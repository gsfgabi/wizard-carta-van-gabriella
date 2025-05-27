import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class VanTypesService {
  constructor(private prisma: PrismaService) {}

  async findAllByBankId(bankId: number) {
    const vanTypes = await this.prisma.van_types.findMany({
      select: {
        id: true,
        type: true,
        banks_van_types: {
          where: {
            id_banks: bankId,
          },
          select: {
            id: true,
          },
        },
      },
    });

    return vanTypes.map((vanType) => ({
      id: vanType.id,
      type: vanType.type,
      available: vanType.banks_van_types.length > 0,
    }));
  }
}