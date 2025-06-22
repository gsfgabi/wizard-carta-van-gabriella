import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class BanksService {
  constructor(private prisma: PrismaService) {}
  
  //Retorna todos os bancos
  findAllBanks() {
    return this.prisma.banks.findMany();
  }

  //Retorna informações do banco pelo id
  findBankDetailsById(bankId: number) {
    return this.prisma.banks.findUnique({
      where: { id: bankId },
      include: {
        banks_cnabs: {
          select: { id_cnabs: true },
        },
        banks_products: {
          select: { id_products: true },
        },
        banks_van_types: {
          select: { id_van_types: true },
        },
      },
    });
  }
}