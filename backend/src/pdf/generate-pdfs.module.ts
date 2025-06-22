import { Module } from '@nestjs/common';
import { GeneratePdfsService } from './generate-pdfs.service';
import { generatePdfBufferNexxera } from './pdf-models/nexxera-model';
import { generatePdfBufferFinnet } from './pdf-models/finnet-model';
import { PdfModelsController } from './pdf-model-controller';
import { GeneratePdfsController } from './generate-pdfs.controller';
import { PrismaModule } from '../prisma/prisma.module'; 

@Module({
  imports: [PrismaModule],
  controllers: [PdfModelsController, GeneratePdfsController],
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