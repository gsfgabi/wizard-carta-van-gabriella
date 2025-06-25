import * as Yup from 'yup';

/**
 * Valida se um CNPJ é válido.
 * @param cnpj CNPJ em string
 * @returns boolean
 */
export function isValidCNPJ(cnpj: string): boolean {
  const cleaned = cnpj.replace(/[^\d]+/g, '');
  if (cleaned.length !== 14) return false;
  if (/^(\d)\1+$/.test(cleaned)) return false; 

  const calcDV = (base: string, pesoInicial: number): number => {
    let soma = 0;
    let peso = pesoInicial;
    for (let i = 0; i < base.length; i++) {
      soma += parseInt(base[i]) * peso--;
      if (peso < 2) peso = 9;
    }
    const resto = soma % 11;
    return resto < 2 ? 0 : 11 - resto;
  };

  const base = cleaned.slice(0, 12);
  const dv1 = calcDV(base, 5);
  const dv2 = calcDV(base + dv1, 6);

  return cleaned === base + dv1.toString() + dv2.toString();
}

/**
 * Valida se o token é válido.
 * @param token Token em string
 * @returns boolean
 */
export function isValidToken(token: string): boolean {
  return typeof token === 'string' && token.length >= 6;
}

/**
 * Verifica se um token JWT está expirado.
 * @param token Token JWT
 * @returns boolean
 */
export function isTokenExpired(token: string): boolean {
  if (!token) return true;
  try {
    const payload = JSON.parse(atob(token.split('.')[1]));
    if (!payload.exp) return true;
    const now = Math.floor(Date.now() / 1000);
    return payload.exp < now;
  } catch (e) {
    return true;
  }
}

// Função auxiliar para validar telefone
export const validatePhone = (value: string) => {
  if (!value) return false;
  
  // Telefone fixo (8 dígitos) ou móvel (9 dígitos)
  if (value.length === 10) {
    // Telefone fixo
    return /^\d{2}[2-5]\d{7}$/.test(value);
  } else if (value.length === 11) {
    // Telefone móvel
    return /^\d{2}9\d{8}$/.test(value);
  }
  
  return false;
};

export const formValidationSchema = Yup.object().shape({
  cnpj: Yup.string()
    .required('CNPJ é obrigatório')
    .matches(/^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/, 'CNPJ inválido'),
  corporate_name: Yup.string()
    .required('Razão Social é obrigatória')
    .min(10, 'Razão Social deve ter no mínimo 10 digitos'),
  responsible_person_name: Yup.string()
    .required('Nome do responsável é obrigatório')
    .min(9, 'Nome deve ter no mínimo 8 dígitos')
    .matches(/^\S+\s+\S+/, 'Informe pelo menos nome e sobrenome'),
  responsible_person_position: Yup.string()
    .required('Cargo do responsável é obrigatório')
    .min(5, 'Cargo do responsável deve ter no mínimo 5 digitos'),
  responsible_person_cellphone: Yup.string()
    .required('Telefone é obrigatório')
    .min(10, 'Telefone deve conter pelo menos 10 digitos')
    .max(15, 'Telefone deve conter até 15 digitos')
    .test(
      'valid-cellphone',
      'Telefone inválido',
      function (value) {
        if (!value) return this.createError({ message: 'Telefone é obrigatório' });

        const numbers = value.replace(/\D/g, ''); //Remove tudo que não é número
        const isValid = validatePhone(numbers); //Valida com a função validatePhone para retornar verdadeiro ou falso

        if (!isValid) {
          if (numbers.length === 10) {
            // Caso de erro para fixo
            return this.createError({ message: 'Telefone fixo inválido - Número deve possuir DDD, seguido de início entre 2 e 5' });
          } else if (numbers.length === 11) {
            //Caso de erro para móvel
            return this.createError({ message: 'Telefone móvel inválido - Número deve possuir DDD, seguido de início com número 9' });
          } else {
            //Demais casos de erro
            return this.createError({ message: 'Telefone inválido - Use um número com DDD, ex: (44) 9XXXX-XXXX' });
          }
        }

        return true;
      }
    ),
  responsible_person_email: Yup.string()
    .email('E-mail inválido - Inclua endereço e domínio, ex: tecno@outlook.com')
    .required('E-mail do gerente é obrigatório')
    .min(5, 'E-mail deve conter pelo menos 5 digitos')
    .matches(/@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/, 'E-mail inválido - Inclua endereço e domínio, ex: tecno@outlook.com'),  
  branch_number: Yup.string()
    .required('Agência é obrigatória')
    .matches(/^\d{4}$/, 'Agência deve conter 4 dígitos'),
  branch_dv: Yup.string()
    .required('DV da agência é obrigatório')
    .matches(/^\d{1,2}$/, 'DV da agência deve conter 1 ou 2 dígitos'),
  account_number: Yup.string()
    .required('Conta é obrigatória')
    .matches(/^\d{6}$/, 'Conta deve conter 6 dígitos'),
  account_dv: Yup.string()
    .required('DV da conta é obrigatório')
    .matches(/^\d{1,2}$/, 'DV da conta deve conter 1 ou 2 dígitos'),
  agreement_number: Yup.string()
    .required('Convênio é obrigatório')
    .matches(/^\d+$/, 'Convênio deve conter apenas números'),
  cnab: Yup.string()
    .required('CNAB é obrigatório'),
  manager_name: Yup.string()
    .required('Nome do gerente é obrigatório')
    .min(9, 'Nome deve conter pelo menos 8 dígitos')
    .matches(/^\S+\s+\S+/, 'Informe pelo menos nome e sobrenome'),
  manager_cellphone: Yup.string()
    .required('Telefone é obrigatório')
    .min(10, 'Telefone deve conter pelo menos 10 digitos')
    .max(15, 'Telefone deve conter até 15 digitos')
    .test(
      'valid-cellphone',
      'Telefone inválido',
      function (value) {
        if (!value) return this.createError({ message: 'Telefone é obrigatório' });

        const numbers = value.replace(/\D/g, ''); //Remove tudo que não é número
        const isValid = validatePhone(numbers); //Valida com a função validatePhone para retornar verdadeiro ou falso

        if (!isValid) {
          if (numbers.length === 10) {
            // Caso de erro para fixo
            return this.createError({ message: 'Telefone fixo inválido - Número deve possuir DDD, seguido de início entre 2 e 5' });
          } else if (numbers.length === 11) {
            //Caso de erro para móvel
            return this.createError({ message: 'Telefone móvel inválido - Número deve possuir DDD, seguido de início com número 9' });
          } else {
            //Demais casos de erro
            return this.createError({ message: 'Telefone inválido - Use um número com DDD, ex: (44) 9XXXX-XXXX' });
          }
        }

        return true;
      }
    ),
  manager_email: Yup.string()
    .email('E-mail inválido - Inclua endereço e domínio, ex: tecno@outlook.com')
    .required('E-mail do gerente é obrigatório')
    .min(5, 'E-mail deve conter pelo menos 5 digitos')
    .matches(/@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/, 'E-mail inválido - Inclua endereço e domínio, ex: tecno@outlook.com'),
  // bank: Yup.string().required('Banco é obrigatório'),
});

