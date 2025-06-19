import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom } from 'rxjs'; 
import * as FormData from 'form-data';
import { AxiosResponse } from 'axios';
import { ZapierSendDataDto } from './dto/zapier-send-data.dto';

@Injectable()
export class ZapierService {
  constructor(private readonly httpService: HttpService) {}

  async sendDataToZapier(data: ZapierSendDataDto): Promise<AxiosResponse> {
    const zapierUrl = process.env.URL_ZAPIER;

    if (!zapierUrl) {
      console.error('A URL do Zapier não está configurada');
      throw new Error('A URL do Zapier não está configurada');
    }

    const formData = new FormData();
    
    formData.append('cnpj_sh', data.cnpj_sh);
    formData.append('email', data.email);
    formData.append('arquivo', data.arquivo);
    formData.append('cnpj_cliente', data.cnpj_cliente);
    formData.append('produto', data.produto);

    try {
      const response = await lastValueFrom(
        this.httpService.post(zapierUrl, formData, {
          headers: formData.getHeaders(),
        }),
      );

      return response;
    } catch (error) {
      console.error('Erro ao enviar dados para o Zapier:', error.message || error);
      throw error;
    }
  }
}