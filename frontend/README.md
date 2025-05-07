# Wizard de Carta de VAN

Este projeto é um wizard para geração de Cartas de VAN para bancos, desenvolvido com React, TypeScript e Tailwind CSS.

## Requisitos

- Node.js 16.x ou superior
- npm 7.x ou superior

## Instalação

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/wizard-carta-van.git
cd wizard-carta-van
```

2. Instale as dependências:
```bash
npm install
```

3. Configure as variáveis de ambiente:
```bash
cp .env.example .env
```
Edite o arquivo `.env` com suas configurações.

## Desenvolvimento

Para iniciar o servidor de desenvolvimento:

```bash
npm start
```

O aplicativo estará disponível em `http://localhost:3000`.

## Build

Para criar uma versão de produção:

```bash
npm run build
```

Os arquivos de build serão gerados na pasta `build`.

## Testes

Para executar os testes:

```bash
npm test
```

## Estrutura do Projeto

```
src/
  ├── components/         # Componentes React
  │   └── Wizard/        # Componentes do Wizard
  ├── services/          # Serviços e chamadas à API
  ├── types/             # Definições de tipos TypeScript
  ├── App.tsx           # Componente principal
  └── index.tsx         # Ponto de entrada
```

## Funcionalidades

- Seleção de banco com busca por código ou nome
- Seleção múltipla de produtos (Boletos, Pagamentos, Extrato, DDA)
- Formulário com validação de campos
- Geração de PDF da carta
- Integração com Zendesk para criação de tickets
- Envio de e-mail com cópia da carta

## Tecnologias Utilizadas

- React.js
- TypeScript
- Tailwind CSS
- Formik + Yup para validação de formulários
- React PDF para visualização de PDFs
- Axios para chamadas à API
- React Hot Toast para notificações

## Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## Licença

Este projeto está licenciado sob a licença MIT - veja o arquivo [LICENSE](LICENSE) para mais detalhes.
