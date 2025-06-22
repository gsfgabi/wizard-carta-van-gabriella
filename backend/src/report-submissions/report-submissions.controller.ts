import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { ReportSubmissionsService } from './report-submissions.service';
import { GenerateReportsDto } from 'src/report-submissions/dto/generate-reports.dto';
import { ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';

@UseGuards(AuthGuard('jwt'))
@ApiTags('Report Submissions')
@Controller('report-submissions')
export class ReportSubmissionsController {
  constructor(private readonly reportSubmissionsService: ReportSubmissionsService) {}

  @Post()
  async generateReportsAndSendEmail(@Body() generateReportsDto: GenerateReportsDto) {
    try {
      await this.reportSubmissionsService.generateSendAndNotify(generateReportsDto);

      return {
        message: 'E-mail enviado e dados enviados para o Zapier com sucesso!',
      };
    } catch (error) {
      throw error;
    }
  }
}