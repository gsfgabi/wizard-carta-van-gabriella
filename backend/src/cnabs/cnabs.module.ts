import { Module } from '@nestjs/common';
import { CnabsService } from './cnabs.service';
import { CnabsController } from './cnabs.controller';
import { PrismaModule } from '../prisma/prisma.module'; 

@Module({
  imports: [PrismaModule],
  controllers: [CnabsController],
  providers: [CnabsService],
})
export class CnabsModule {}