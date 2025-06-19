import { BadRequestException } from '@nestjs/common';

export type ValidationRule = {
  required?: boolean;
  type?: 'email' | 'number' | 'array';
  min?: number;
  custom?: (value: any) => boolean;
  message?: string;
};

export type Schema = Record<string, ValidationRule[]>;

export function validateFields(data: any, schema: Schema) {
  const errors: string[] = [];

  for (const [field, rules] of Object.entries(schema)) {
    const value = data[field];

    for (const rule of rules) {
      if (rule.required && (value === undefined || value === null || value === '')) {
        errors.push(`Campo "${field}" é obrigatório.`);
        continue;
      }

      if (rule.type === 'email') {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (value && typeof value === 'string' && !regex.test(value)) {
          errors.push(`Campo "${field}" deve ser um e-mail válido.`);
        }
      }

      if (rule.type === 'number') {
        if (value !== undefined && value !== null && isNaN(Number(value))) {
          errors.push(`Campo "${field}" deve ser um número válido.`);
        }
      }

      if (rule.type === 'array') {
        if (!Array.isArray(value)) {
          errors.push(`Campo "${field}" deve ser um array.`);
        } else if (rule.min && value.length < rule.min) {
          errors.push(`Campo "${field}" deve conter no mínimo ${rule.min} item(s).`);
        }
      }

      if (rule.custom && !rule.custom(value)) {
        errors.push(rule.message?.replace('{field}', field) || `Campo "${field}" é inválido.`);
      }
    }
  }

  if (errors.length > 0) {
    throw new BadRequestException(errors.join(' '));
  }
}
