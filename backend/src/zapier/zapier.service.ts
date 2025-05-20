import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom } from 'rxjs'; 
import * as FormData from 'form-data';
import { AxiosResponse } from 'axios';

@Injectable()
export class ZapierService {
  constructor(private readonly httpService: HttpService) {}

  async sendDataToZapier(
    cnpj_SH: string,
    email: string,
    arquivo: string,
    CNPJ_cliente: string,
    Produto: string,
  ): Promise<AxiosResponse> {
    const zapierUrl = process.env.URL_ZAPIER!;

    const formData = new FormData();
    
    formData.append('cnpj_SH', cnpj_SH);
    formData.append('email', email);
    formData.append('arquivo', arquivo);
    formData.append('CNPJ_cliente', CNPJ_cliente);
    formData.append('Produto', Produto);

    try {
      const response = await lastValueFrom(
        this.httpService.post(zapierUrl, formData, {
          headers: formData.getHeaders(),
        }),
      );

      return response;
    } catch (error) {
      console.error('Erro ao enviar dados para o Zapier:', error);
      throw error;
    }
  }
}