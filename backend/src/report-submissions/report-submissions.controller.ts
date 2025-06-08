import { Controller, Post, Body, Res } from '@nestjs/common';
import { Response } from 'express';
import { ReportSubmissionsService } from './report-submissions.service';
import { EmailService } from 'src/email/email.service';
import { GeneratePdfsDto } from 'src/pdf/dto/generate-pdfs';
import { ZapierService } from 'src/zapier/zapier.service';
import * as JSZip from 'jszip';

@Controller('report-submissions')
export class ReportSubmissionsController {
  constructor(
    private readonly reportSubmissionsService: ReportSubmissionsService,
    private readonly emailService: EmailService,
    private readonly zapierService: ZapierService,
  ) {}

  @Post()
  async generateReportsAndSendEmail(
    @Body() generatePdfsDto: GeneratePdfsDto,
    @Res() res: Response,
  ) {
    try {
      const zipBuffer = await this.reportSubmissionsService.generateReportsWithMoreLogic(generatePdfsDto);
  
      await this.emailService.sendReportEmail(
        'kethellinpereira2018@outlook.com',
        'Carta de Van Bancária - Arquivo',
        'Segue em anexo os pdfs gerados para a carta de van bancária.',
        zipBuffer,
      );
  
      const zip = await JSZip.loadAsync(zipBuffer);
      const fileNames = Object.keys(zip.files).filter(name => name.endsWith('.pdf'));
  
      if (fileNames.length !== generatePdfsDto.id_products.length * generatePdfsDto.id_van_types.length) {
        return res.status(400).json({
          message: 'Número de arquivos PDF gerados não corresponde ao número de produtos.',
        });
      }
  
      const cnpjSH = '11111111111111';
      const email = 'guilherme.ganassin@tecnospeed.com.br';
      const CNPJ_cliente = generatePdfsDto.cnpj;
  
      for (let v = 0; v < generatePdfsDto.id_van_types.length; v++) {
        for (let i = 0; i < generatePdfsDto.id_products.length; i++) {
          const product = generatePdfsDto.id_products[i];
          const produto = product.name;
    
          const fileName = fileNames[i];
          const file = zip.files[fileName];
          const pdfBuffer = await file.async('nodebuffer');
          const base64PDF = pdfBuffer.toString('base64');
    
          console.log('Enviando dados para o Zapier...', {
            cnpjSH,
            email,
            base64PDF: base64PDF.substring(0, 30) + '...',
            CNPJ_cliente,
            produto,
          });
    
          await this.zapierService.sendDataToZapier(cnpjSH, email, base64PDF, CNPJ_cliente, produto);
        }
      }
  
      return res.status(200).json({
        message: 'E-mail enviado e dados enviados para o Zapier com sucesso!',
      });
    } catch (error) {
      return res.status(500).json({
        message: 'Erro ao gerar ou enviar o ZIP',
        error: error.message,
      });
    }
  }
}  