import { Injectable } from '@nestjs/common';
import { GeneratePdfsDto } from './dto/generate-pdfs';
import { generatePdfBufferNexxera } from './pdf-models/nexxera-model';
import { generatePdfBufferFinnet } from './pdf-models/finnet-model';
import * as JSZip from 'jszip';
import { Buffer } from 'buffer';

@Injectable()
export class GeneratePdfsService {

  async generateReportsZip(generatePdfsDto: GeneratePdfsDto): Promise<Buffer> {
    const { id_products, id_van_types } = generatePdfsDto;

    if (!id_products?.length || !id_van_types?.length) {
      throw new Error('É necessário informar ao menos um produto e um tipo de VAN.');
    }

    const zip = new JSZip();

    for (const product of id_products) {
      for (const vanType of id_van_types) {
        const reportData: GeneratePdfsDto = {
          ...generatePdfsDto,
          id_products: [product],
          id_van_types: [vanType],
        };

        const pdfBuffer = await this.generatePdf(reportData, vanType.id);

        const fileName = `relatorio_produto_${product.id}_van_${vanType.id}.pdf`;

        zip.file(fileName, pdfBuffer);
      }
    }

    return await zip.generateAsync({ type: 'nodebuffer' });
  }
  
  private async generatePdf(generatePdfsDto: GeneratePdfsDto, vanTypeId: number): Promise<Buffer> {
    switch (vanTypeId) {
      case 1: 
        return await generatePdfBufferNexxera(generatePdfsDto);
      case 2: 
        return await generatePdfBufferFinnet(generatePdfsDto);
      default:
        throw new Error(`Tipo de VAN desconhecido: ${vanTypeId}`);
    }
  }
}