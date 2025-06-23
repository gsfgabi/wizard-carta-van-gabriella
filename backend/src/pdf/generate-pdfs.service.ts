import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectQueue } from '@nestjs/bull';
import { Queue } from 'bull';
import { GeneratePdfsDto } from './dto/generate-pdfs';
import { generatePdfBufferNexxera } from './pdf-models/nexxera-model';
import { generatePdfBufferFinnet } from './pdf-models/finnet-model';
import * as JSZip from 'jszip';
import { Buffer } from 'buffer';
import { PrismaService } from '../prisma/prisma.service';
import { RedisService } from '../redis/redis.service';

@Injectable()
export class GeneratePdfsService {
  constructor(
    private prisma: PrismaService,
    @InjectQueue('pdf-generation') private pdfQueue: Queue,
    private redisService: RedisService,
  ) {}

  async enqueuePdfGeneration(dto: GeneratePdfsDto) {
    await this.pdfQueue.add(dto);
  }

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
        const filename = `relatorio_produto_${product.name}_van_${vanType}.pdf`;

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

  async generateMultipleFromDto(dto: GeneratePdfsDto): Promise<{ filename: string; buffer: Buffer }[]> {
    this.validateInput(dto);
    console.log("entrou aqui");

    const buffers: { filename: string; buffer: Buffer }[] = [];

    for (const product of dto.id_products) {
      for (const vanType of dto.id_van_types) {
        const localDto: GeneratePdfsDto = {
          ...dto,
          id_products: [product],
          id_van_types: [vanType],
        };

        const buffer = await this.generatePdf(localDto, vanType);
        const filename = `relatorio_produto_${product.name}_van_${vanType}.pdf`;

        buffers.push({ filename, buffer });
        console.log(`PDF gerado: ${filename}`);
      }
    }

    return buffers;
  }

  async generateAndCachePdfs(dto: GeneratePdfsDto) {
    const buffers = await this.generateMultipleFromDto(dto);
  
    const pdfs = buffers.map(({ filename, buffer }) => ({
      filename,
      data: buffer.toString('base64'),
    }));
  
    const cacheKey = `pdfs:${dto.id}`;
    await this.redisService.set(cacheKey, pdfs);
    return { cacheKey, pdfs };
  }
  
}