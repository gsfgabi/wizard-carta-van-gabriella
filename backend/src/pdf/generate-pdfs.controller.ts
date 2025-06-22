import { Controller, Get, Param, BadRequestException, UseGuards } from '@nestjs/common';
import { GeneratePdfsService } from './generate-pdfs.service';
import { ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';

@UseGuards(AuthGuard('jwt'))
@ApiTags('Generate PDFs')
@Controller('pdfs')
export class GeneratePdfsController {
  constructor(private readonly generatePdfsService: GeneratePdfsService) {}

  @Get('generate/:id')
  async generateById(@Param('id') id: string) {
    const numericId = parseInt(id, 10);
    if (isNaN(numericId)) {
      throw new BadRequestException('ID inválido');
    }

    const { buffers } = await this.generatePdfsService.generateMultipleFromId(numericId);

    if (!buffers.length) {
      throw new BadRequestException('Nenhum PDF gerado');
    }

    const pdfsBase64 = buffers.map(({ filename, buffer }) => ({
      filename,
      base64: buffer.toString('base64'),
    }));

    return { pdfs: pdfsBase64 };
  }
}