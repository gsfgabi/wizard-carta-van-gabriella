import {
  Injectable,
  BadRequestException,
  InternalServerErrorException,
} from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { CreateFormAuthorizationLettersDto } from './dto/create-form-authorization-letters.dto';

const prisma = new PrismaClient();

function convertBigIntToString(obj: any): any {
  if (obj === null || obj === undefined) return obj;

  if (typeof obj === 'bigint') {
    return obj.toString();
  }

  if (Array.isArray(obj)) {
    return obj.map(convertBigIntToString);
  }

  if (typeof obj === 'object') {
    const res: any = {};
    for (const key in obj) {
      res[key] = convertBigIntToString(obj[key]);
    }
    return res;
  }

  return obj;
}

@Injectable()
export class FormsService {
  async saveAuthorizationLetters(data: CreateFormAuthorizationLettersDto) {
    const {
      cnpj,
      corporate_name,
      responsible_person_name,
      responsible_person_title,
      responsible_person_cellphone,
      responsible_person_email,
      manager_name,
      manager_cellphone,
      manager_email,
      branch_number,
      branch_dv,
      account_number,
      account_dv,
      agreement_number,
      id_banks,
      id_cnabs,
      id_products,
      id_van_types,
    } = data;

    // Validações básicas
    if (!cnpj || cnpj.length !== 14 || isNaN(Number(cnpj))) {
      throw new BadRequestException('CNPJ inválido (deve conter 14 números).');
    }
    if (!corporate_name.trim()) {
      throw new BadRequestException('Nome da empresa é obrigatório.');
    }
    if (!responsible_person_name.trim()) {
      throw new BadRequestException('Nome do responsável é obrigatório.');
    }
    if (!responsible_person_title.trim()) {
      throw new BadRequestException('Cargo do responsável é obrigatório.');
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!responsible_person_email || !emailRegex.test(responsible_person_email)) {
      throw new BadRequestException('E-mail do responsável inválido.');
    }
    if (
      !responsible_person_cellphone ||
      responsible_person_cellphone.length < 10 ||
      isNaN(Number(responsible_person_cellphone))
    ) {
      throw new BadRequestException('Celular do responsável inválido.');
    }
    if (!manager_name.trim()) {
      throw new BadRequestException('Nome do gerente é obrigatório.');
    }
    if (!manager_email || !emailRegex.test(manager_email)) {
      throw new BadRequestException('E-mail do gerente inválido.');
    }
    if (
      !manager_cellphone ||
      manager_cellphone.length < 10 ||
      isNaN(Number(manager_cellphone))
    ) {
      throw new BadRequestException('Telefone do gerente inválido.');
    }
    if (
      isNaN(Number(branch_number)) ||
      isNaN(Number(account_number)) ||
      isNaN(Number(agreement_number))
    ) {
      throw new BadRequestException(
        'Agência, conta ou convênio devem ser números.',
      );
    }
    if (isNaN(Number(id_banks)) || isNaN(Number(id_cnabs))) {
      throw new BadRequestException('ID do banco e do CNAB devem ser números.');
    }
    const validCnabs = [1, 2, 3];
    if (!validCnabs.includes(Number(id_cnabs))) {
      throw new BadRequestException(
        `id_cnabs inválido. Deve ser um dos seguintes valores: ${validCnabs.join(
          ', ',
        )}`,
      );
    }
    const idBanksNum = Number(id_banks);
    if (idBanksNum < 1 || idBanksNum > 37 || !Number.isInteger(idBanksNum)) {
      throw new BadRequestException(
        'id_banks inválido. Deve ser um número inteiro entre 1 e 37.',
      );
    }

    // Validação dos arrays
    if (!Array.isArray(id_products) || id_products.length === 0) {
      throw new BadRequestException('id_products deve ser um array não vazio.');
    }
    if (!id_products.every((id) => Number.isInteger(id) && id > 0)) {
      throw new BadRequestException(
        'Todos os ids em id_products devem ser inteiros positivos.',
      );
    }

    if (!Array.isArray(id_van_types) || id_van_types.length === 0) {
      throw new BadRequestException('id_van_types deve ser um array não vazio.');
    }
    if (!id_van_types.every((id) => Number.isInteger(id) && id > 0)) {
      throw new BadRequestException(
        'Todos os ids em id_van_types devem ser inteiros positivos.',
      );
    }

    try {
      const carta = await prisma.authorization_letters.create({
        data: {
          cnpj,
          corporate_name,
          responsible_person_name,
          responsible_person_title,
          responsible_person_cellphone,
          responsible_person_email,
          manager_name,
          manager_cellphone,
          manager_email,
          branch_number,
          branch_dv,
          account_number,
          account_dv,
          agreement_number,
          id_banks: idBanksNum,
          id_cnabs: Number(id_cnabs),
          created_at: new Date(),

          authorization_letters_products: {
            create: id_products.map((id) => ({
              id_products: id,
            })),
          },
          authorization_letters_van_types: {
            create: id_van_types.map((id) => ({
              id_van_types: id,
            })),
          },
        },
        include: {
          banks: true,
          cnabs: true,
          authorization_letters_products: true,
          authorization_letters_van_types: true,
        },
      });

      return convertBigIntToString(carta);
    } catch (error) {
      console.error('Erro ao salvar carta de autorização:', error);
      throw new InternalServerErrorException(
        'Erro ao salvar os dados: ' + error.message,
      );
    }
  }

  async getAllAuthorizationLetters() {
    try {
      const cartas = await prisma.authorization_letters.findMany({
        orderBy: { created_at: 'desc' },
        include: {
          banks: true,
          cnabs: true,
          authorization_letters_products: {
            select: { id_products: true },
          },
          authorization_letters_van_types: {
            select: { id_van_types: true },
          },
        },
      });

      const result = cartas.map((carta) => ({
        company: {
          corporate_name: carta.corporate_name,
          cnpj: carta.cnpj,
        },
        bank: {
          id: carta.banks?.id,
          bank_name: carta.banks?.name,
          branch_number: carta.branch_number,
          account_number: carta.account_number,
          agreement_number: carta.agreement_number,
        },
        responsible_person: {
          responsible_person_name: carta.responsible_person_name,
          responsible_person_email: carta.responsible_person_email,
          responsible_person_cellphone: carta.responsible_person_cellphone,
        },
        manager: {
          manager_name: carta.manager_name,
          manager_email: carta.manager_email,
          manager_cellphone: carta.manager_cellphone,
        },
        id_products: carta.authorization_letters_products.map((p) => ({
          id: p.id_products,
        })),
        id_van_types: carta.authorization_letters_van_types.map((v) => ({
          id: v.id_van_types,
        })),
        id_cnabs: carta.cnabs ? [{ id: carta.cnabs.id }] : [],
      }));

      return convertBigIntToString(result);
    } catch (error) {
      console.error('Erro ao buscar cartas de autorização:', error);
      throw new InternalServerErrorException('Erro ao buscar as cartas.');
    }
  }

  async getAuthorizationLetterById(id: number) {
    try {
      const authorizationLetter = await prisma.authorization_letters.findUnique({
        where: { id },
        include: {
          banks: true,
          cnabs: true,
          authorization_letters_products: {
            select: { id_products: true },
          },
          authorization_letters_van_types: {
            select: { id_van_types: true },
          },
        },
      });

      if (!authorizationLetter) return null;

      const result = {
        company: {
          corporate_name: authorizationLetter.corporate_name,
          cnpj: authorizationLetter.cnpj,
        },
        bank: {
          id: authorizationLetter.banks?.id,
          bank_name: authorizationLetter.banks?.name,
          branch_number: authorizationLetter.branch_number,
          account_number: authorizationLetter.account_number,
          agreement_number: authorizationLetter.agreement_number,
        },
        responsible_person: {
          responsible_person_name: authorizationLetter.responsible_person_name,
          responsible_person_email: authorizationLetter.responsible_person_email,
          responsible_person_cellphone: authorizationLetter.responsible_person_cellphone,
        },
        manager: {
          manager_name: authorizationLetter.manager_name,
          manager_email: authorizationLetter.manager_email,
          manager_cellphone: authorizationLetter.manager_cellphone,
        },
        id_products: authorizationLetter.authorization_letters_products.map((p) => ({
          id: p.id_products,
        })),
        id_van_types: authorizationLetter.authorization_letters_van_types.map((v) => ({
          id: v.id_van_types,
        })),
        id_cnabs: authorizationLetter.cnabs ? [{ id: authorizationLetter.cnabs.id }] : [],
      };

      return convertBigIntToString(result);
    } catch (error) {
      console.error('Erro ao buscar carta por ID:', error);
      throw new InternalServerErrorException('Erro ao buscar a carta de autorização.');
    }
  }

  // Mantenho os métodos de salvar produtos e van_types se precisar adicionar individualmente

  async saveAuthorizationLettersProducts(data: { id_products: number; id_authorization_letters: number }) {
    const { id_products, id_authorization_letters } = data;

    if (!Number.isInteger(id_products) || id_products < 1) {
      throw new BadRequestException('id_products inválido.');
    }

    if (!Number.isInteger(id_authorization_letters) || id_authorization_letters < 1) {
      throw new BadRequestException('id_authorization_letters inválido.');
    }

    try {
      const result = await prisma.authorization_letters_products.create({
        data: {
          id_products,
          id_authorization_letters,
        },
      });

      return convertBigIntToString(result);
    } catch (error) {
      console.error('Erro ao salvar relação produto x carta:', error);
      throw new InternalServerErrorException('Erro ao salvar os dados.');
    }
  }

  async saveAuthorizationLettersVanTypes(data: { id_van_types: number; id_authorization_letters: number }) {
    const { id_van_types, id_authorization_letters } = data;

    if (!Number.isInteger(id_van_types) || id_van_types < 1) {
      throw new BadRequestException('id_van_types inválido.');
    }

    if (!Number.isInteger(id_authorization_letters) || id_authorization_letters < 1) {
      throw new BadRequestException('id_authorization_letters inválido.');
    }

    try {
      const result = await prisma.authorization_letters_van_types.create({
        data: {
          id_van_types,
          id_authorization_letters,
        },
      });

      return convertBigIntToString(result);
    } catch (error) {
      console.error('Erro ao salvar relação tipo van x carta:', error);
      throw new InternalServerErrorException('Erro ao salvar os dados.');
    }
  }
}
