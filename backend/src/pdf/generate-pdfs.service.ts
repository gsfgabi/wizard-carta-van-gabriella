import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectQueue } from '@nestjs/bull';
import { Queue } from 'bull';
import { generatePdfBufferNexxera } from './pdf-models/nexxera-model';
import { generatePdfBufferFinnet } from './pdf-models/finnet-model';
import * as JSZip from 'jszip';
import { Buffer } from 'buffer';
import { PrismaService } from '../prisma/prisma.service';
import { RedisService } from '../redis/redis.service';
import { GeneratePdfsDto } from './dto/generate-pdfs.dto';
import { CreateAuthorizationLettersDto } from 'src/authorization-letters/dto/create-authorization-letters.dto';

@Injectable()
export class GeneratePdfsService {
  constructor(
    private prisma: PrismaService,
    @InjectQueue('pdf-generation') private pdfQueue: Queue,
    private redisService: RedisService,
  ) { }

  async enqueuePdfGeneration(dto: CreateAuthorizationLettersDto) {
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

    const products = await this.prisma.products.findMany();
    const vans = await this.prisma.van_types.findMany();
    const [tecnospeed] = await this.prisma.general_settings.findMany({
      select : {
        email_responsible_person_tecnospeed: true,
        name_responsible_person_tecnospeed: true
      }
    });

    console.log('tecnospeed', tecnospeed);

    for (const product_id of dto.id_products) {
      for (const van_type_id of dto.id_van_types) {
        console.log(tecnospeed.email_responsible_person_tecnospeed);
        console.log(tecnospeed.name_responsible_person_tecnospeed);

        const data: GeneratePdfsDto = {
          ...dto,
          email_responsible_person_tecnospeed: tecnospeed.email_responsible_person_tecnospeed,
          name_responsible_person_tecnospeed: tecnospeed.name_responsible_person_tecnospeed,
          id_products: [product_id],
          id_van_types: [van_type_id],
        };

        const selectedProduct = products.filter((p) => p.id === product_id);
        const selectedVan = vans.filter((v) => v.id === van_type_id);

        const pdf = await this.generatePdf(data, van_type_id);

        const filename = `Van_${selectedVan[0].type}_${selectedProduct[0].name}.pdf`;

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
    console.log("entrou aqui");
    this.validateInput(dto);

    const buffers: { filename: string; buffer: Buffer }[] = [];

    // carregar todos os produtos
    const products = await this.prisma.products.findMany();

    // carregar todas as vans
    const vans = await this.prisma.van_types.findMany();

    const tecnospeed = await this.prisma.general_settings.findFirst({
      select : {
        email_responsible_person_tecnospeed: true,
        name_responsible_person_tecnospeed: true
      }
    });

    if (!tecnospeed) {
      throw new BadRequestException('Dados da Tecnospeed não encontrados.');
    }

    console.log('tecnospeed', tecnospeed);

    for (const product_id of dto.id_products) {
      for (const van_type_id of dto.id_van_types) {
        const localDto: GeneratePdfsDto = {
          ...dto,
          id_products: [product_id],
          id_van_types: [van_type_id],
          email_responsible_person_tecnospeed: tecnospeed.email_responsible_person_tecnospeed,
          name_responsible_person_tecnospeed: tecnospeed.name_responsible_person_tecnospeed
        };

        const selectedProduct = products.filter((p) => p.id === product_id);
        const selectedVan = vans.filter((v) => v.id === van_type_id);

        const buffer = await this.generatePdf(localDto, van_type_id);
        const filename = `Van_${selectedVan[0].type}_${selectedProduct[0].name}.pdf`;
        
        console.log('arquivo gerado', filename);

        buffers.push({ filename, buffer });
        console.log(`PDF gerado: ${filename}`);
      }
    }

    return buffers;
  }

  async generateAndCachePdfs(dto: GeneratePdfsDto) {
    const buffers = await this.generateMultipleFromDto(dto);

    const pdfs = buffers.map(({ filename, buffer }) => ({
      id_products: [dto.id_products],
      id_van_types: [dto.id_van_types],
      filename,
      data: buffer.toString('base64'),
    }));

    const cacheKey = `pdfs:${dto.id}`;
    await this.redisService.set(cacheKey, pdfs);
    return { cacheKey, pdfs };
  }

}