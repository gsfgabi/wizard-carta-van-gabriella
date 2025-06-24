import * as nodemailer from 'nodemailer';
import { Injectable, InternalServerErrorException } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';

// Mantido comentado, conforme seu código original.
// export interface SendReportEmailOptions {
//   to: string;
//   nomeDestinatario: string;
//   attachment: Buffer;
//   isZip: boolean;
// }

@Injectable()
export class EmailService {
  private transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  async sendReportEmail(to: string, recipientName: string, attachment: Buffer, isZip: boolean) {

    try {
      const devTemplatePath = path.resolve(
        process.cwd(),
        'src/email/templates/authorization-letters.html',
      );
      
      const prodTemplatePath = path.resolve(
        __dirname,
        'templates/authorization-letters.html',
      );
      
      const templatePath = fs.existsSync(devTemplatePath)
        ? devTemplatePath
        : prodTemplatePath;       
      
      let htmlTemplate = fs.readFileSync(templatePath, 'utf-8');

      const formattedDate = new Date().toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
      });
      const fileFormat = isZip ? 'ZIP' : 'PDF';

      htmlTemplate = htmlTemplate
        .replace('{{recipientName}}', recipientName)
        .replace('{{generationDate}}', formattedDate.toUpperCase())
        .replace('{{fileFormat}}', fileFormat);


      const filename = isZip ? 'cartas_de_van.zip' : 'carta_de_van.pdf';
      const subject = `Plugbank | Sua Carta de VAN Bancária está disponível`;

      const mailOptions = {
        from: `"Plugbank" <${process.env.EMAIL_USER}>`,
        to,
        subject,
        html: htmlTemplate,
        attachments: [
          {
            filename,
            content: attachment,
            contentType: isZip ? 'application/zip' : 'application/pdf',
          },
        ],
      };

      await this.transporter.sendMail(mailOptions);
      console.log(`Email enviado com sucesso para: ${to}`);

    } catch (error) {
      console.error(`Falha ao enviar e-mail para ${to}:`, error);
      throw new InternalServerErrorException('Falha ao enviar o e-mail da carta de VAN.');
    }
  }
}