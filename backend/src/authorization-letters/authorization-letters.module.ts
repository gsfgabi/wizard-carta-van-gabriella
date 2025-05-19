import { Module } from '@nestjs/common';
import { AuthorizationLettersService } from './authorization-letters.service';
import { AuthorizationLettersController } from './authorization-letters.controller';
import { PrismaModule } from '../prisma/prisma.module'; 

@Module({
  imports: [PrismaModule],
  controllers: [AuthorizationLettersController],
  providers: [AuthorizationLettersService],
})
export class authorizationLettersModule {}