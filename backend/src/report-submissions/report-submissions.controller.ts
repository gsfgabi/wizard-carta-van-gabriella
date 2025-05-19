import { Controller, Post, Body, Res } from '@nestjs/common';
import { Response } from 'express';
import { ReportSubmissionsService } from './report-submissions.service';
import { EmailService } from 'src/email/email.service';
import { GeneratePdfsDto } from 'src/generate-pdf/dto/generate-pdfs';

@Controller('report-submissions')
export class ReportSubmissionsController {
  constructor(
    private readonly reportSubmissionsService: ReportSubmissionsService,
    private readonly emailService: EmailService,
  ) {}

  @Post()
  async generateReportsAndSendEmail(
    @Body() generatePdfsDto: GeneratePdfsDto,
    @Res() res: Response,
  ) {
    try {
      const zipBuffer = await this.reportSubmissionsService.generateReportsWithMoreLogic(generatePdfsDto);

      await this.emailService.sendReportEmail(
        'kethellinpereira2018@outlook.com', // para quem enviar - mudar para email gerente/responsável
        'Carta de Van Bancária - Arquivo',
        'Segue em anexo os pdfs gerados para a carta de van bancária.',
        zipBuffer,
      );

      return res.status(200).json({ message: 'E-mail enviado com sucesso!' });
    } catch (error) {
      return res.status(500).json({ message: 'Erro ao gerar ou enviar o ZIP', error: error.message });
    }
  }
}