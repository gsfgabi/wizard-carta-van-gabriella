import { Module } from '@nestjs/common';
import { VanTypesService } from './van-types.service';
import { VanTypesController } from './van-types.controller';
import { PrismaModule } from '../prisma/prisma.module'; 

@Module({
  imports: [PrismaModule],
  controllers: [VanTypesController],
  providers: [VanTypesService],
})
export class VanTypesModule {}