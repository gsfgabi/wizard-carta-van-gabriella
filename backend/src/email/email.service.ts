import * as nodemailer from 'nodemailer';
import { Injectable } from '@nestjs/common';

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

  async sendReportEmail(to: string, attachment: Buffer, isZip: boolean) {
    const subject = 'Carta de Van Bancária - Arquivo';
    const text = 'Segue em anexo os PDFs gerados para a carta de VAN bancária.';

    const filename = isZip ? 'cartas_de_van.zip' : 'carta_de_van.pdf';

    const mailOptions = {
      from: `"Plugboleto" <${process.env.EMAIL_USER}>`,
      to,
      subject,
      text,
      attachments: [
        {
          filename,
          content: attachment,
        },
      ],
    };

    await this.transporter.sendMail(mailOptions);
  }
}