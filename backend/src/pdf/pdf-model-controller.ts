import { Controller, Post, Body, Res } from '@nestjs/common';
import { ApiTags, ApiOkResponse } from '@nestjs/swagger';
import { Response } from 'express';
import { generatePdfBufferNexxera } from 'src/pdf/pdf-models/nexxera-model';
import { generatePdfBufferFinnet } from 'src/pdf/pdf-models/finnet-model';
import { GeneratePdfsDto } from 'src/pdf/dto/generate-pdfs';

@Controller('pdf-models')
export class PdfModelsController {

  @Post('nexxera')
  @ApiOkResponse({ type: [GeneratePdfsDto] })
  async generateNexxeraPdf(@Body() dto: GeneratePdfsDto, @Res() res: Response) {
    const buffer = await generatePdfBufferNexxera(dto);

    res.set({
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'inline; filename=nexxera-relatorio.pdf',
      'Content-Length': buffer.length,
    });

    return res.send(buffer);
  }

  @Post('finnet')
  @ApiOkResponse({ type: [GeneratePdfsDto] })
  async generateFinnetPdf(@Body() dto: GeneratePdfsDto, @Res() res: Response) {
    const buffer = await generatePdfBufferFinnet(dto);

    res.set({
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'inline; filename=finnet-relatorio.pdf',
      'Content-Length': buffer.length,
    });

    return res.send(buffer);
  }
}