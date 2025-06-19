import { Injectable, BadRequestException } from '@nestjs/common';
import { GeneratePdfsService } from 'src/pdf/generate-pdfs.service';
import { EmailService } from 'src/email/email.service';
import { ZapierService } from 'src/zapier/zapier.service';
import { GeneratePdfsDto } from 'src/pdf/dto/generate-pdfs';
import * as JSZip from 'jszip';

@Injectable()
export class ReportSubmissionsService {
  constructor(
    private readonly generatePdfsService: GeneratePdfsService,
    private readonly emailService: EmailService,
    private readonly zapierService: ZapierService,
  ) {}

  async generateSendAndNotify(dto: GeneratePdfsDto): Promise<void> {
    const { buffer, isZip } = await this.generatePdfsService.generateReports(dto);

    await this.emailService.sendReportEmail('kethellinpereira2018@outlook.com', buffer, isZip);

    if (isZip) {
      const zip = await JSZip.loadAsync(buffer);
      this.validateZipContents(zip, dto);
      await this.sendZipToZapier(zip, dto);
    } else {
      await this.sendSinglePdfToZapier(buffer, dto);
    }
  }

  private validateZipContents(zip: JSZip, dto: GeneratePdfsDto): void {
    const fileNames = Object.keys(zip.files).filter(name => name.endsWith('.pdf'));
    const expectedCount = dto.id_products.length * dto.id_van_types.length;

    if (fileNames.length !== expectedCount) {
      throw new BadRequestException('Número de arquivos PDF gerados não corresponde ao número de produtos.');
    }
  }

  private async sendZipToZapier(zip: JSZip, dto: GeneratePdfsDto): Promise<void> {
    for (const vanType of dto.id_van_types) {
      for (const product of dto.id_products) {
        const fileName = `relatorio_produto_${product.id}_van_${vanType.id}.pdf`;
        const file = zip.files[fileName];

        if (!file) {
          throw new BadRequestException(`Arquivo esperado ${fileName} não encontrado no ZIP.`);
        }

        const pdfBuffer = await file.async('nodebuffer');
        await this.prepareAndSendToZapier(product.name, pdfBuffer, dto);
      }
    }
  }

  private async sendSinglePdfToZapier(buffer: Buffer, dto: GeneratePdfsDto): Promise<void> {
    const produto = dto.id_products[0].name;
    await this.prepareAndSendToZapier(produto, buffer, dto);
  }

  private async prepareAndSendToZapier(produto: string, buffer: Buffer, dto: GeneratePdfsDto): Promise<void> {
    const cnpj_sh = '11111111111111';
    const email = 'guilherme.ganassin@tecnospeed.com.br';
    const cnpj_cliente = dto.cnpj;
    const arquivoBase64 = buffer.toString('base64');

    console.log('Enviando dados para o Zapier...', {
      cnpj_sh,
      email,
      cnpj_cliente,
      produto,
      arquivo: arquivoBase64.substring(0, 30) + '...',
    });

    await this.zapierService.sendDataToZapier({
      cnpj_sh,
      email,
      cnpj_cliente,
      produto,
      arquivo: arquivoBase64,
    });
  }
}