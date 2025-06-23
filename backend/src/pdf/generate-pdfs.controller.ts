import { Controller, Get, Post, Param, BadRequestException, UseGuards, Body } from '@nestjs/common';
import { InjectQueue } from '@nestjs/bull';
import { Queue } from 'bull';
import { AuthGuard } from '@nestjs/passport';
import { ApiTags } from '@nestjs/swagger';
import { RedisService } from '../redis/redis.service';
import { GeneratePdfsService } from './generate-pdfs.service';
import { GeneratePdfsDto } from './dto/generate-pdfs';
import { randomUUID } from 'crypto';

@UseGuards(AuthGuard('jwt'))
@ApiTags('Generate PDFs')
@Controller('pdfs')
export class GeneratePdfsController {
  constructor(
    @InjectQueue('pdf-generation') private pdfQueue: Queue,
    private readonly redisService: RedisService,
    private readonly generatePdfsService: GeneratePdfsService
  ) {}

  @Post('generate')
  async generate(@Body() dto: GeneratePdfsDto) {

    const requestId = randomUUID();

    const jobDto = { ...dto, id: requestId };

    await this.generatePdfsService.enqueuePdfGeneration(jobDto);

    const cachedPdfs = await this.redisService.get(`pdfs:${requestId}`);
    if (cachedPdfs) {
      return { status: 'done', pdfs: cachedPdfs };
    }
  
    return { message: 'Processamento iniciado. Consulte /pdfs/status/:id para resultado.', id_request: requestId };
  }  

  @Get('status/:id')
  async getStatus(@Param('id') id: string) {

    const cachedPdfs = await this.redisService.get(`pdfs:${id}`);
    console.log(`🔍 Conteúdo encontrado no cache para ${id}:`, cachedPdfs);

    if (!cachedPdfs) {
      return { status: 'processing', pdfs: [] };
    }

    return { status: 'done', pdfs: cachedPdfs };
  }
}