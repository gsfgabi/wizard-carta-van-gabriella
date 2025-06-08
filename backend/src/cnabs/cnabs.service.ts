import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class CnabsService {
  constructor(private prisma: PrismaService) {}

  async findAllCnabs() {
    return this.prisma.cnabs.findMany();
  }
}