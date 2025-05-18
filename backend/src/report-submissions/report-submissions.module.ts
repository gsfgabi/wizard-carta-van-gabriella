import { Module } from '@nestjs/common';
import { GeneratePdfsController } from './report-submissions.controller';
import { ReportSubmissionsService } from './report-submissions.service';
import { GeneratePdfsService } from 'src/generate-pdf/generate-pdfs.service';
import { EmailModule } from 'src/email/email.module';

@Module({
  imports: [EmailModule],
  controllers: [GeneratePdfsController],
  providers: [
    ReportSubmissionsService,
    GeneratePdfsService,
  ],
})
export class NewFeatureModule {}