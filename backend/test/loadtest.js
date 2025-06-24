import http from 'k6/http';
import { check, sleep } from 'k6';

// Configurações do teste de carga
export let options = {
  vus: 1000,     
  duration: '5m',
};

// Endpoints utilizados no fluxo do teste
export default function () {
  const loginUrl = 'http://localhost:3000/auth/login';             
  const banksUrl = 'http://localhost:3000/banks';                  
  const bankId = 1;                                                
  const bankIdUrl = `http://localhost:3000/banks/${bankId}`;       
  const productsUrl = 'http://localhost:3000/products';            
  const cnabsUrl = 'http://localhost:3000/cnabs';                  
  const vanTypesUrl = 'http://localhost:3000/van-types';           

  // Simula a entrada do usuário
  const loginPayload = JSON.stringify({
    cnpj: '12345678901234',
    token: '123456'
  });

  // Cabeçalho da requisição de login
  const loginHeaders = {
    'Content-Type': 'application/json'
  };

  // Autenticação do usuário
  let loginRes = http.post(loginUrl, loginPayload, { headers: loginHeaders });

  // Validações após o login
  check(loginRes, {
    'login status is 2xx': (r) => r.status >= 200 && r.status < 300,         
    'login response has token': (r) => r.json('access_token') !== undefined 
  });

  // Captura do token da resposta para usar nas demais requisições
  let accessToken = loginRes.json('access_token');

  // Caso não tenha recebido o token, encerra a execução dessa iteração
  if (!accessToken) {
    console.log('Token não encontrado, pulando testes seguintes');
    return;
  }

  // Cabeçalhos com o token para rotas protegidas
  let authHeaders = {
    'Authorization': `Bearer ${accessToken}`,
    'Content-Type': 'application/json'
  };

  // Consulta de bancos
  let banksRes = http.get(banksUrl, { headers: authHeaders });
  check(banksRes, {
    'banks status is 200': (r) => r.status === 200
  });

  // Consulta de id do banco
  let bankIdRes = http.get(bankIdUrl, { headers: authHeaders });
  check(bankIdRes, {
    [`banks/${bankId} status is 200`]: (r) => r.status === 200
  });

  // Consulta de produtos
  let productsRes = http.get(productsUrl, { headers: authHeaders });
  check(productsRes, {
    'products status is 200': (r) => r.status === 200,
    'products response is array': (r) => Array.isArray(r.json()) 
  });

  // Consulta dos CNABs
  let cnabsRes = http.get(cnabsUrl, { headers: authHeaders });
  check(cnabsRes, {
    'cnabs status is 200': (r) => r.status === 200,
    'cnabs response is array': (r) => Array.isArray(r.json())
  });

  // Consulta dos tipos de VAN
  let vanTypesRes = http.get(vanTypesUrl, { headers: authHeaders });
  check(vanTypesRes, {
    'van-types status is 200': (r) => r.status === 200,
    'van-types response is array': (r) => Array.isArray(r.json())
  });

  // Simula tempo de espera de um usuário
  sleep(1);
}
