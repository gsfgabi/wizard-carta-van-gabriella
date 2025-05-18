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

  async sendReportEmail(to: string, subject: string, text: string, attachment: Buffer) {
    const mailOptions = {
      from: `"Relatórios" <${process.env.EMAIL_USER}>`,
      to,
      subject,
      text,
      attachments: [
        {
          filename: 'relatorios.zip',
          content: attachment,
        },
      ],
    };

    await this.transporter.sendMail(mailOptions);
  }
}