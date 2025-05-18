import { Injectable } from '@nestjs/common';
import { GeneratePdfsDto } from './dto/generate-pdfs';
import { generatePdfBufferNexxera } from '../utils/pdf-models/nexxera-model';
import { generatePdfBufferFinnet } from '../utils/pdf-models/finnet-model';
import * as JSZip from 'jszip';
import { Buffer } from 'buffer';

@Injectable()
export class GeneratePdfsService {
  /**
   * @param generateReportDto Dados para gerar os relatórios
   * @returns Buffer do arquivo ZIP
   */

  async generateReportsZip(generateReportDto: GeneratePdfsDto): Promise<Buffer> {
    const { title, generatedAt, products, reportTypes } = generateReportDto;
    const pdfBuffers: Buffer[] = [];
    const pdfDetails: Array<any> = [];

    for (const product of products) {
      for (const reportType of reportTypes) {
        const reportData: GeneratePdfsDto = {
          title,
          generatedAt,
          products: [product],
          reportTypes: [reportType],
        };

        const pdfBuffer = await this.generatePdf(reportData, reportType);
        pdfBuffers.push(pdfBuffer);

        pdfDetails.push({
          productId: product.id,
          productName: product.name,
          reportType,
          pdfUrl: `relatorio_${product.id}_${reportType}.pdf`,
        });
      }
    }

    if (pdfBuffers.length > 0) {
      const zip = new JSZip();

      pdfBuffers.forEach((pdfBuffer, index) => {
        zip.file(pdfDetails[index].pdfUrl, pdfBuffer);
      });

      return await zip.generateAsync({ type: 'nodebuffer' });
    }

    throw new Error('Nenhum relatório gerado.');
  }

  /**
   * Gera um único PDF baseado nos dados fornecidos e no tipo de relatório
   * @param generateReportDto Dados para gerar o relatório
   * @param reportType Tipo de relatório (type1, type2, etc.)
   * @returns Buffer do PDF gerado
   */

  private async generatePdf(generateReportDto: GeneratePdfsDto, reportType: string): Promise<Buffer> {
    if (reportType === 'type1') {
      return await generatePdfBufferNexxera(generateReportDto);
    } else if (reportType === 'type2') {
      return await generatePdfBufferFinnet(generateReportDto);
    } else {
      throw new Error(`Tipo de relatório desconhecido: ${reportType}`);
    }
  }
}