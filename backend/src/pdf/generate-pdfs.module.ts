import { Module } from '@nestjs/common';
import { GeneratePdfsService } from './generate-pdfs.service';
import { generatePdfBufferNexxera } from './pdf-models/nexxera-model';
import { generatePdfBufferFinnet } from './pdf-models/finnet-model';
import { PdfModelsController } from './pdf-model-controller';

@Module({
  imports: [],
  controllers: [PdfModelsController],
  providers: [
    GeneratePdfsService,
    {
      provide: 'PDF_GENERATOR_NEXXERA',
      useValue: generatePdfBufferNexxera,
    },
    {
      provide: 'PDF_GENERATOR_FINNET',
      useValue: generatePdfBufferFinnet,
    },
  ],
})
export class GeneratePdfsModule {}