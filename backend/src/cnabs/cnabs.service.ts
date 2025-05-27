import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class CnabsService {
  constructor(private prisma: PrismaService) {}

  async findAllByBankId(bankId: number) {
    const cnabs = await this.prisma.cnabs.findMany({
      select: {
        id: true,
        name: true,
        banks_cnabs: {
          where: {
            id_banks: bankId,
          },
          select: {
            id: true,
          },
        },
      },
    });

    return cnabs.map((cnab) => ({
      id: cnab.id,
      name: cnab.name,
      available: cnab.banks_cnabs.length > 0,
    }));
  }
}