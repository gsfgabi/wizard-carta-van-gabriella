export interface Bank {
  code: string;
  name: string;
}

export interface FormData {
  cnpj: string;
  razaoSocial: string;
  nomeResponsavel: string;
  cargoResponsavel: string;
  telefone: string;
  email: string;
  agencia: string;
  agenciaDV: string;
  conta: string;
  contaDV: string;
  convenio: string;
  cnab: string;
  nomeGerente: string;
  telefoneGerente: string;
  emailGerente: string;
}

export type Product = 'boletos' | 'pagamentos' | 'extrato' | 'dda';

export interface ZendeskTicket {
  id: string;
  url: string;
  subject: string;
  description: string;
  status: string;
  priority: string;
  requester: {
    name: string;
    email: string;
  };
} 