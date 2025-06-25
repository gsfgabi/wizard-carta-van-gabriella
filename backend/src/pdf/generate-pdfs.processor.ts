import { Processor, Process } from '@nestjs/bull';
import { Job } from 'bull';
import { GeneratePdfsDto } from './dto/generate-pdfs';
import { GeneratePdfsService } from './generate-pdfs.service';
import { RedisService } from '../redis/redis.service';

@Processor('pdf-generation')
export class GeneratePdfsProcessor {
  constructor(
    private readonly generatePdfsService: GeneratePdfsService,
    private readonly redisService: RedisService,
  ) {}

  @Process()
  async handlePdfGeneration(job: Job<GeneratePdfsDto>) {
    console.log('Job recebido:', job.id, job.data);
    const dto = job.data;

    const { cacheKey, pdfs } = await this.generatePdfsService.generateAndCachePdfs(dto);

    console.log(`PDFs salvos no cache com a chave "${cacheKey}"`);

    return { cacheKey, pdfs };
  }

}