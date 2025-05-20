import { Injectable } from '@nestjs/common';
import { GeneratePdfsService } from 'src/generate-pdf/generate-pdfs.service';
import { GeneratePdfsDto } from 'src/generate-pdf/dto/generate-pdfs';

@Injectable()
export class ReportSubmissionsService {
  constructor(private readonly GeneratePdfsService: GeneratePdfsService) {}

  async generateReportsWithMoreLogic(generateReportDto: GeneratePdfsDto): Promise<Buffer> {
    console.log('Realizando outras tarefas antes de gerar o PDF.');

    const zipBuffer = await this.GeneratePdfsService.generateReportsZip(generateReportDto);

    console.log('Relatórios gerados com sucesso, agora adicionando mais lógica...');
    
    return zipBuffer;
  }
}