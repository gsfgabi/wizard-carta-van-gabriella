import { Controller, Post, Body, Res } from '@nestjs/common';
import { ApiTags, ApiOkResponse } from '@nestjs/swagger';
import { Response } from 'express';
import { generatePdfBufferNexxera } from 'src/pdf/pdf-models/nexxera-model';
import { generatePdfBufferFinnet } from 'src/pdf/pdf-models/finnet-model';
import { GeneratePdfsDto } from 'src/pdf/dto/generate-pdfs';

@ApiTags('PDF Models')
@Controller('pdf-models')
export class PdfModelsController {

  @Post('nexxera')
  @ApiOkResponse({ type: [GeneratePdfsDto] })
  async generateNexxeraPdf(@Body() dto: GeneratePdfsDto, @Res() res: Response) {
    try {
      const buffer = await generatePdfBufferNexxera(dto);
      console.log('Buffer gerado Nexxera:', buffer.length);

      res.set({
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="nexxera-relatorio.pdf"',
        'Content-Length': buffer.length,
      });

      return res.send(buffer);
    } catch (error) {
      console.error('Erro ao gerar PDF Nexxera:', error);
      return res.status(500).json({ message: 'Erro ao gerar PDF Nexxera' });
    }
  }

  @Post('finnet')
  @ApiOkResponse({ type: [GeneratePdfsDto] })
  async generateFinnetPdf(@Body() dto: GeneratePdfsDto, @Res() res: Response) {
    try {
      const buffer = await generatePdfBufferFinnet(dto);
      console.log('Buffer gerado Finnet:', buffer.length);

      res.set({
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="finnet-relatorio.pdf"',
        'Content-Length': buffer.length,
      });

      return res.send(buffer);
    } catch (error) {
      console.error('Erro ao gerar PDF Finnet:', error);
      return res.status(500).json({ message: 'Erro ao gerar PDF Finnet' });
    }
  }
}