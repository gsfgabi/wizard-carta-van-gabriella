import { Module } from '@nestjs/common';
import { GeneratePdfsService } from './generate-pdfs.service';
import { generatePdfBufferNexxera } from './pdf-models/nexxera-model';
import { generatePdfBufferFinnet } from './pdf-models/finnet-model';
import { PdfModelsController } from './pdf-model-controller';
import { GeneratePdfsController } from './generate-pdfs.controller';
import { PrismaModule } from '../prisma/prisma.module'; 
import { GeneratePdfsProcessor } from './generate-pdfs.processor';
import { RedisService } from '../redis/redis.service';
import { BullModule } from '@nestjs/bull';

@Module({
  imports: [
    PrismaModule,
    BullModule.registerQueue({
      name: 'pdf-generation',
      redis: {
        host: process.env.REDIS_HOST || 'localhost',
        port: parseInt(process.env.REDIS_PORT || '6379'),
        password: process.env.REDIS_PASSWORD || undefined,
      },
    }),
  ],
  controllers: [PdfModelsController, GeneratePdfsController],
  providers: [
    GeneratePdfsProcessor,
    RedisService,
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
  exports: [GeneratePdfsService],
})
export class GeneratePdfsModule {}