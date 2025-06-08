import { Injectable } from '@nestjs/common';
import { GeneratePdfsService } from 'src/pdf/generate-pdfs.service';
import { GeneratePdfsDto } from 'src/pdf/dto/generate-pdfs';

@Injectable()
export class ReportSubmissionsService {
  constructor(private readonly GeneratePdfsService: GeneratePdfsService) {}

  async generateReportsWithMoreLogic(generateReportDto: GeneratePdfsDto): Promise<Buffer> {
    console.log('Realizando tarefas antes de gerar o PDF');

    const zipBuffer = await this.GeneratePdfsService.generateReportsZip(generateReportDto);

    console.log('Relatórios gerados');
    
    return zipBuffer;
  }
}