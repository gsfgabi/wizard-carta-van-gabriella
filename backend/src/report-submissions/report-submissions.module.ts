import { Module } from '@nestjs/common';
import { ReportSubmissionsController } from './report-submissions.controller';
import { ReportSubmissionsService } from './report-submissions.service';
import { GeneratePdfsService } from 'src/pdf/generate-pdfs.service';
import { EmailModule } from 'src/email/email.module';
import { ZapierModule } from 'src/zapier/zapier.module';
import { PrismaModule } from '../prisma/prisma.module'; 

@Module({
  imports: [EmailModule, ZapierModule, PrismaModule],
  controllers: [ReportSubmissionsController],
  providers: [
    ReportSubmissionsService,
    GeneratePdfsService,
  ],
})
export class ReportSubmissionsModule {}