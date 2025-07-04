import { Module } from '@nestjs/common';
import { ReportSubmissionsController } from './report-submissions.controller';
import { ReportSubmissionsService } from './report-submissions.service';
import { EmailModule } from 'src/email/email.module';
import { ZapierModule } from 'src/zapier/zapier.module';
import { PrismaModule } from '../prisma/prisma.module'; 
import { GeneratePdfsModule } from 'src/pdf/generate-pdfs.module';
import { RedisModule } from 'src/redis/redis.module';
import { AuthorizationModule } from 'src/authorization-letters/authorization-letters.module';

@Module({
  imports: [EmailModule, ZapierModule, PrismaModule, GeneratePdfsModule, RedisModule, AuthorizationModule],
  controllers: [ReportSubmissionsController],
  providers: [ ReportSubmissionsService,  ],
})
export class ReportSubmissionsModule {}