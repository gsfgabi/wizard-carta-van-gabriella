import { Module } from '@nestjs/common';
import { AuthorizationService } from './authorization-letters.service';
import { AuthorizationController } from './authorization-letters.controller';
import { PrismaModule } from '../prisma/prisma.module'; 

@Module({
  imports: [PrismaModule],
  controllers: [AuthorizationController],
  providers: [AuthorizationService],
})
export class AuthorizationModule {}
