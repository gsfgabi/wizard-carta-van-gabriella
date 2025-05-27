import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService) {}

  async findAllByBankId(bankId: number) {
    const products = await this.prisma.products.findMany({
      select: {
        id: true,
        name: true,
        banks_products: {
          where: {
            id_banks: bankId,
          },
          select: {
            id: true,
          },
        },
      },
    });

    return products.map((product) => ({
      id: product.id,
      name: product.name,
      available: product.banks_products.length > 0,
    }));
  }
}