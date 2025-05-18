import { Controller, Post, Body, Res } from '@nestjs/common';
import { Response } from 'express';
import { ReportSubmissionsService } from './report-submissions.service';
import { EmailService } from 'src/email/email.service';
import { GeneratePdfsDto } from 'src/generate-pdf/dto/generate-pdfs';

@Controller('report-submissions')
export class GeneratePdfsController {
  constructor(
    private readonly reportService: ReportSubmissionsService,
    private readonly emailService: EmailService,
  ) {}

  @Post()
  async generateReportsAndSendEmail(
    @Body() generateReportDto: GeneratePdfsDto,
    @Res() res: Response,
  ) {
    try {
      const zipBuffer = await this.reportService.generateReportsWithMoreLogic(generateReportDto);

      await this.emailService.sendReportEmail(
        'kethellinpereira2018@outlook.com', // para quem enviar - mudar ao testar
        'Relatórios Gerados',
        'Segue em anexo os relatórios gerados.',
        zipBuffer,
      );

      return res.status(200).json({ message: 'E-mail enviado com sucesso!' });
    } catch (error) {
      return res.status(500).json({ message: 'Erro ao gerar ou enviar o ZIP', error: error.message });
    }
  }
}