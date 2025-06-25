import { Injectable, BadRequestException } from '@nestjs/common';
import { EmailService } from 'src/email/email.service';
import { ZapierService } from 'src/zapier/zapier.service';
import { GenerateReportsDto } from './dto/generate-reports.dto';
import * as JSZip from 'jszip';
import { RedisService } from 'src/redis/redis.service';
import { PrismaService } from 'src/prisma/prisma.service';

interface CachedPdf {
  filename?: string;
  data: string;
}

@Injectable()
export class ReportSubmissionsService {
  constructor(
    private readonly emailService: EmailService,
    private readonly zapierService: ZapierService,
    private readonly redisService: RedisService,
    private prisma: PrismaService,
  ) {}

  async generateSendAndNotify(dto: GenerateReportsDto): Promise<void> {
    if (!dto.responsible_person_email) {
      throw new BadRequestException('E-mail da pessoa responsável não informado.');
    }
    if (!dto.id_request) {
      throw new BadRequestException('Chave para buscar PDFs no cache não informada.');
    }
    console.log("dto ", dto.id_request);
    const raw = await this.redisService.get(`pdfs:${dto.id_request}`);
    if (!raw) {
      throw new BadRequestException('Nenhum PDF encontrado no cache para a chave informada.');
    }

    console.log("raw ", raw);
    const cachedBuffers = this.parseCachedPdfs(raw);
    console.log("cache ",cachedBuffers);

    if (cachedBuffers.length === 0) {
      throw new BadRequestException('Nenhum PDF válido encontrado no cache para a chave informada.');
    }

    if (cachedBuffers.length > 1) {
      const zip = new JSZip();
      cachedBuffers.forEach((buffer, i) => {
        zip.file(`relatorio_${i + 1}.pdf`, buffer);
      });
      const zipBuffer = await zip.generateAsync({ type: 'nodebuffer' });

      await this.emailService.sendReportEmail(dto.responsible_person_email, dto.responsible_person_name, zipBuffer, true);

      for (const [index, pdfBuffer] of cachedBuffers.entries()) {
        await this.prepareAndSendToZapier(dto.id_products[0].name, pdfBuffer, dto);
      }
    } else {
      await this.emailService.sendReportEmail(dto.responsible_person_email, dto.responsible_person_name, cachedBuffers[0], false);
      console.log('produto', dto.id_products[0].name);
      await this.prepareAndSendToZapier(dto.id_products[0].name, cachedBuffers[0], dto);
    }
  }

  private parseCachedPdfs(raw: any): Buffer[] {
    let base64Array: any[] = [];

    if (typeof raw === 'string') {
      try {
        base64Array = JSON.parse(raw);
      } catch {
        base64Array = [raw];
      }
    } else if (Array.isArray(raw)) {
      base64Array = raw;
    } else {
      throw new BadRequestException('Formato inválido do cache.');
    }

    if (!Array.isArray(base64Array) || base64Array.length === 0) {
      throw new BadRequestException('Nenhum PDF encontrado no cache.');
    }

    if (typeof base64Array[0] === 'string') {
      return base64Array.map(b64 => Buffer.from(b64, 'base64'));
    }

    if (typeof base64Array[0] === 'object' && base64Array[0].data && typeof base64Array[0].data === 'string') {
      return base64Array.map((item: CachedPdf) => Buffer.from(item.data, 'base64'));
    }

    throw new BadRequestException('Formato inválido dos PDFs no cache.');
  }

  private async prepareAndSendToZapier(produto: string, buffer: Buffer, dto: GenerateReportsDto): Promise<void> {
    const [settings] = await this.prisma.general_settings.findMany( {
      select: { 
        email_responsible_person_tecnospeed: true,
        cnpj_tecnospeed: true
      },
    });

    const cnpj_sh = settings.cnpj_tecnospeed ?? "";
    const email = settings.email_responsible_person_tecnospeed ?? "";
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