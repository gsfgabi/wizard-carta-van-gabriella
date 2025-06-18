import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { CreateAuthorizationLettersDto } from './dto/create-authorization-letters.dto';
import { validateFields } from './validation/validate-fields';
import { authorizationLetterSchema } from './validation/schema-validator';
import { validateForeignKeys } from './validation/validate-foreign-keys';

const prisma = new PrismaClient();

@Injectable()
export class AuthorizationService {
  async saveAuthorizationLetters(data: CreateAuthorizationLettersDto) {
    // Validação do esquema básico
    validateFields(data, authorizationLetterSchema);

    // Preparar foreign keys para validação e para inserir no DB como números
    const foreignKeysToValidate = {
      id_banks: Number(data.id_banks),
      id_cnabs: Number(data.id_cnabs),
      id_products: data.id_products,
      id_van_types: data.id_van_types,
    };

    await validateForeignKeys(foreignKeysToValidate);

    try {
      const carta = await prisma.authorization_letters.create({
        data: {
          cnpj: data.cnpj,
          corporate_name: data.corporate_name,
          responsible_person_name: data.responsible_person_name,
          responsible_person_title: data.responsible_person_title,
          responsible_person_cellphone: data.responsible_person_cellphone,
          responsible_person_email: data.responsible_person_email,
          manager_name: data.manager_name,
          manager_cellphone: data.manager_cellphone,
          manager_email: data.manager_email,
          branch_number: data.branch_number,
          branch_dv: data.branch_dv,
          account_number: data.account_number,
          account_dv: data.account_dv,
          agreement_number: data.agreement_number,
          id_banks: Number(data.id_banks),
          id_cnabs: Number(data.id_cnabs),

          created_at: new Date(),

          authorization_letters_products: {
            create: data.id_products.map((id) => ({ id_products: id })),
          },
          authorization_letters_van_types: {
            create: data.id_van_types.map((id) => ({ id_van_types: id })),
          },
        },
        include: {
          banks: true,
          cnabs: true,
          authorization_letters_products: true,
          authorization_letters_van_types: true,
        },
      });

      return carta;
    } catch (error) {
      console.error('Erro ao salvar carta de autorização:', error);
      throw new InternalServerErrorException('Erro ao salvar os dados.');
    }
  }

  async getAllAuthorizationLetters() {
    try {
      const cartas = await prisma.authorization_letters.findMany({
        orderBy: { created_at: 'desc' },
        include: {
          banks: true,
          cnabs: true,
          authorization_letters_products: { select: { id_products: true } },
          authorization_letters_van_types: { select: { id_van_types: true } },
        },
      });

      return cartas;
    } catch (error) {
      console.error('Erro ao buscar cartas de autorização:', error);
      throw new InternalServerErrorException('Erro ao buscar as cartas.');
    }
  }

  async getAuthorizationLetterById(id: number) {
    try {
      const carta = await prisma.authorization_letters.findUnique({
        where: { id },
        include: {
          banks: true,
          cnabs: true,
          authorization_letters_products: { select: { id_products: true } },
          authorization_letters_van_types: { select: { id_van_types: true } },
        },
      });

      return carta;
    } catch (error) {
      console.error('Erro ao buscar carta por ID:', error);
      throw new InternalServerErrorException('Erro ao buscar a carta de autorização.');
    }
  }

  async saveAuthorizationLettersProducts(data: { id_products: number; id_authorization_letters: number }) {
    try {
      const result = await prisma.authorization_letters_products.create({
        data,
      });

      return result;
    } catch (error) {
      console.error('Erro ao salvar relação produto x carta:', error);
      throw new InternalServerErrorException('Erro ao salvar os dados.');
    }
  }

  async saveAuthorizationLettersVanTypes(data: { id_van_types: number; id_authorization_letters: number }) {
    try {
      const result = await prisma.authorization_letters_van_types.create({
        data,
      });

      return result;
    } catch (error) {
      console.error('Erro ao salvar relação tipo van x carta:', error);
      throw new InternalServerErrorException('Erro ao salvar os dados.');
    }
  }
}
