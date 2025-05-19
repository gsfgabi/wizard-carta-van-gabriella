import { Injectable } from '@nestjs/common';
import { GeneratePdfsDto } from './dto/generate-pdfs';
import { generatePdfBufferNexxera } from '../utils/pdf-models/nexxera-model';
import { generatePdfBufferFinnet } from '../utils/pdf-models/finnet-model';
import * as JSZip from 'jszip';
import { Buffer } from 'buffer';

@Injectable()
export class GeneratePdfsService {
  /**
   * Gera um ZIP com PDFs para cada combinação de produto e VAN
   * @param generatePdfsDto Dados para gerar os relatórios
   * @returns Buffer do arquivo ZIP
   */

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

  /**
   * Gera um PDF com base no tipo de VAN
   * @param generatePdfsDto Dados para gerar o relatório
   * @param vanTypeId ID do tipo de VAN: 1 para 'nexxera', 2 para 'finnet', etc.
   * @returns Buffer do PDF gerado
   */
  
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