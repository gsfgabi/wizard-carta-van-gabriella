import { Controller, Post, Body, Res } from '@nestjs/common';
import { Response } from 'express';
import { generatePdfBufferNexxera } from 'src/utils/pdf-models/nexxera-model';
import { generatePdfBufferFinnet } from 'src/utils/pdf-models/finnet-model';
import { GeneratePdfsDto } from 'src/generate-pdf/dto/generate-pdfs';

@Controller('pdf-models')
export class PdfModelsController {
  @Post('nexxera')
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