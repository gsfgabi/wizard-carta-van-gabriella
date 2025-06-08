import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class VanTypesService {
  constructor(private prisma: PrismaService) {}

  async findAllVanTypes() {
    return this.prisma.van_types.findMany();
  }
}