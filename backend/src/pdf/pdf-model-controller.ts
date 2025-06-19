import { Controller, Post, Body, Header } from '@nestjs/common';
import { ApiTags, ApiOkResponse, ApiProduces } from '@nestjs/swagger';
import { GeneratePdfsDto } from 'src/pdf/dto/generate-pdfs';
import { generatePdfBufferNexxera } from 'src/pdf/pdf-models/nexxera-model';
import { generatePdfBufferFinnet } from 'src/pdf/pdf-models/finnet-model';

@ApiTags('PDF Models')
@Controller('pdf-models')
export class PdfModelsController {

  private async generatePdf(
    dto: GeneratePdfsDto,
    generator: (dto: GeneratePdfsDto) => Promise<Buffer>,
  ): Promise<Buffer> {
    return generator(dto);
  }

  @Post('nexxera')
  @ApiOkResponse({ description: "PDF Nexxera" })
  @ApiProduces('application/pdf')
  @Header('Content-Type', 'application/pdf')
  @Header('Content-Disposition', 'inline; filename=nexxera-relatorio.pdf')
  async generateNexxeraPdf(@Body() dto: GeneratePdfsDto): Promise<Buffer> {
    return this.generatePdf(dto, generatePdfBufferNexxera);
  }

  @Post('finnet')
  @ApiOkResponse({ description: "PDF Finnet" })
  @ApiProduces('application/pdf')
  @Header('Content-Type', 'application/pdf')
  @Header('Content-Disposition', 'inline; filename=finnet-relatorio.pdf')
  async generateFinnetPdf(@Body() dto: GeneratePdfsDto): Promise<Buffer> {
    return this.generatePdf(dto, generatePdfBufferFinnet);
  }
}