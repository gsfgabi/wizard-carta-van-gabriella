import { Injectable, BadRequestException } from '@nestjs/common';
import { GeneratePdfsDto } from './dto/generate-pdfs';
import { generatePdfBufferNexxera } from './pdf-models/nexxera-model';
import { generatePdfBufferFinnet } from './pdf-models/finnet-model';
import * as JSZip from 'jszip';
import { Buffer } from 'buffer';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class GeneratePdfsService {
  constructor(private prisma: PrismaService) {}

  async generateReports(dto: GeneratePdfsDto): Promise<{ buffer: Buffer; isZip: boolean }> {
    this.validateInput(dto);

    if (dto.id_products.length === 1 && dto.id_van_types.length === 1) {
      const buffer = await this.generatePdf(dto, dto.id_van_types[0]);
      return { buffer, isZip: false };
    }

    const buffer = await this.generateZip(dto);
    return { buffer, isZip: true };
  }

  private validateInput(dto: GeneratePdfsDto): void {
    if (!dto.id_products?.length) {
      throw new BadRequestException('É necessário informar ao menos um produto.');
    }

    if (!dto.id_van_types?.length) {
      throw new BadRequestException('É necessário informar ao menos um tipo de VAN.');
    }
  }

  private async generateZip(dto: GeneratePdfsDto): Promise<Buffer> {
    const zip = new JSZip();

    for (const product of dto.id_products) {
      for (const vanType of dto.id_van_types) {
        const data: GeneratePdfsDto = {
          ...dto,
          id_products: [product],
          id_van_types: [vanType],
        };

        const pdf = await this.generatePdf(data, vanType);
        const filename = `relatorio_produto_${product}_van_${vanType}.pdf`;

        zip.file(filename, pdf);
      }
    }

    return zip.generateAsync({ type: 'nodebuffer' });
  }

  private generatePdf(dto: GeneratePdfsDto, vanTypeId: number): Promise<Buffer> {
    switch (vanTypeId) {
      case 1:
        return generatePdfBufferNexxera(dto);
      case 2:
        return generatePdfBufferFinnet(dto);
      default:
        throw new BadRequestException(`Tipo de VAN desconhecido: ${vanTypeId}`);
    }
  }

  async generateMultipleFromId(id: number): Promise<{ buffers: { filename: string; buffer: Buffer }[] }> {
    const record = await this.prisma.authorization_letters.findUnique({
      where: { id },
      include: {
        authorization_letters_products: {
          include: {
            products: true,
          },
        },
        authorization_letters_van_types: true,
        banks: true,
      },
    });
  
    if (!record) {
      throw new BadRequestException('Registro não encontrado');
    }

    console.log(record);
  
    const dto: GeneratePdfsDto = {
      manager_name: record.manager_name,
      corporate_name: record.corporate_name,
      responsible_person_name: record.responsible_person_name,
      cnpj: record.cnpj,
      branch_number: record.branch_number,
      account_number: record.account_number,
      agreement_number: record.agreement_number,
      responsible_person_email: record.responsible_person_email,
      responsible_person_cellphone: record.responsible_person_cellphone,
      manager_email: record.manager_email,
      manager_cellphone: record.manager_cellphone,
      id_cnabs: record.id_cnabs.toString(),
      id_products: record.authorization_letters_products.map(p => ({
        id: p.products.id,
        name: p.products.name,
      })),
      id_van_types: record.authorization_letters_van_types.map((v) => v.id_van_types),
    };
    
  
    if (!dto.id_products.length || !dto.id_van_types.length) {
      throw new BadRequestException('Produtos ou VANs não encontrados');
    }
  
    const buffers: { filename: string; buffer: Buffer }[] = [];
  
    for (const product of dto.id_products) {
      for (const vanType of dto.id_van_types) {
        const localDto: GeneratePdfsDto = {
          ...dto,
          id_products: [product],
          id_van_types: [vanType],
        };
  
        const buffer = await this.generatePdf(localDto, vanType);
        const filename = `relatorio_produto_${product}_van_${vanType}.pdf`;
  
        buffers.push({ filename, buffer });
      }
    }
  
    return { buffers };
  }  
}