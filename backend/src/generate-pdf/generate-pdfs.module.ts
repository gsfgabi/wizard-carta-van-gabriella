import { Module } from '@nestjs/common';
import { GeneratePdfsService } from './generate-pdfs.service';
import { generatePdfBufferNexxera } from '../utils/pdf-models/nexxera-model';
import { generatePdfBufferFinnet } from '../utils/pdf-models/finnet-model';

@Module({
  imports: [],
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