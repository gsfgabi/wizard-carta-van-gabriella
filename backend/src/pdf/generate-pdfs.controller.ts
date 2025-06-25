import { Controller, Get, Post, Param, UseGuards, Body, HttpCode } from '@nestjs/common';
import { InjectQueue } from '@nestjs/bull';
import { Queue } from 'bull';
import { AuthGuard } from '@nestjs/passport';
import { ApiTags, ApiBearerAuth, ApiOperation, ApiOkResponse, ApiUnauthorizedResponse, ApiInternalServerErrorResponse, ApiBadRequestResponse } from '@nestjs/swagger';
import { RedisService } from '../redis/redis.service';
import { GeneratePdfsService } from './generate-pdfs.service';
import { randomUUID } from 'crypto';
import { CreateAuthorizationLettersDto } from 'src/authorization-letters/dto/create-authorization-letters.dto';

@UseGuards(AuthGuard('jwt'))
@ApiBearerAuth('jwt')
@ApiTags('Generate PDFs')
@Controller('pdfs')
export class GeneratePdfsController {
  constructor(
    @InjectQueue('pdf-generation') private pdfQueue: Queue,
    private readonly redisService: RedisService,
    private readonly generatePdfsService: GeneratePdfsService
  ) {}

  @Post('generate')
  @ApiOperation({ summary: 'Colocar em fila para gerar PDF' })
  @ApiOkResponse({ description: '(OK)' })
  @ApiUnauthorizedResponse({
    description: 'Usuario não autenticado. (Unauthorized)',
  })
  @ApiBadRequestResponse({
    description: 'Requisição malformada. (Bad Request).',
  })
  @ApiInternalServerErrorResponse({
    description: 'Erro interno no servidor. (Internal Server Error)',
  })
  async generate(@Body() dto: CreateAuthorizationLettersDto) {

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
  @ApiOperation({ summary: 'Buscar status do PDF e o PDF gerado' })
  @ApiOkResponse({ description: '(OK)' })
  @ApiUnauthorizedResponse({
    description: 'Usuario não autenticado. (Unauthorized)',
  })
  @ApiInternalServerErrorResponse({
    description: 'Erro interno no servidor. (Internal Server Error)',
  })
  async getStatus(@Param('id') id: string) {

    const cachedPdfs = await this.redisService.get(`pdfs:${id}`);
    console.log(`🔍 Conteúdo encontrado no cache para ${id}:`, cachedPdfs);

    if (!cachedPdfs) {
      return { status: 'processing', pdfs: [] };
    }

    return { status: 'done', pdfs: cachedPdfs };
  }
}