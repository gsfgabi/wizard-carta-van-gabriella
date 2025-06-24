import type { Schema } from './validate-fields';

export const authorizationLetterSchema: Schema = {
  cnpj: [
    { required: true },
    { type: 'number' },
    {
      custom: (v: any) => typeof v === 'string' && v.replace(/\D/g, '').length === 14,
      message: 'CNPJ deve ter 14 dígitos.',
    },
  ],
  corporate_name: [{ required: true }],
  responsible_person_name: [{ required: true }],
  responsible_person_title: [{ required: true }],
  responsible_person_cellphone: [
    { required: true },
    { type: 'number' },
    {
      custom: (v: any) => typeof v === 'string' && v.replace(/\D/g, '').length >= 10,
      message: 'Celular deve ter no mínimo 10 dígitos.',
    },
  ],
  responsible_person_email: [{ required: true }, { type: 'email' }],
  manager_name: [{ required: true }],
  manager_cellphone: [
    { required: true },
    { type: 'number' },
    {
      custom: (v: any) => typeof v === 'string' && v.replace(/\D/g, '').length >= 10,
      message: 'Telefone do gerente deve ter no mínimo 10 dígitos.',
    },
  ],
  manager_email: [{ required: true }, { type: 'email' }],
  branch_number: [{ required: true }, { type: 'number' }],
  branch_dv: [],
  account_number: [{ required: true }, { type: 'number' }],
  account_dv: [],
  agreement_number: [{ required: true }, { type: 'number' }],
  id_banks: [{ required: true }, { type: 'number' }],
  id_cnabs: [{ required: true }, { type: 'number' }],
  id_products: [{ required: true }, { type: 'array', min: 1 }],
  id_van_types: [{ required: true }, { type: 'array', min: 1 }],
};

export const authorizationLetterValidateSchema: Schema = {
  ...authorizationLetterSchema,
};

delete authorizationLetterValidateSchema.id_van_types;
