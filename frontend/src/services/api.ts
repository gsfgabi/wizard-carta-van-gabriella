/// <reference types="vite/client" />
import axios from 'axios';
import type { Bank, FormData as FormDataType, Product, ZendeskTicket } from '../types';

const API_BASE_URL = import.meta.env.DEV 
  ? '/api' 
  : 'https://wizard-carta-van-teste.onrender.com';

console.log('API_BASE_URL:', API_BASE_URL); // Debug log

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
  timeout: 10000
});

// Interceptor para logging
api.interceptors.request.use(
  (config) => {
    console.log('Request:', {
      method: config.method?.toUpperCase(),
      url: config.url,
      baseURL: config.baseURL,
      fullURL: `${config.baseURL}${config.url}`
    });
    return config;
  },
  (error) => {
    console.error('Request Error:', error);
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    console.log('Response:', {
      status: response.status,
      url: response.config.url,
      baseURL: response.config.baseURL,
      fullURL: `${response.config.baseURL}${response.config.url}`
    });
    return response;
  },
  (error) => {
    console.error('Response Error:', {
      status: error.response?.status,
      url: error.config?.url,
      baseURL: error.config?.baseURL,
      fullURL: error.config ? `${error.config.baseURL}${error.config.url}` : 'unknown',
      message: error.message
    });
    return Promise.reject(error);
  }
);

export interface BankData {
  code: string;
  name: string;
}

export const getBanks = async (): Promise<BankData[]> => {
  try {
    const response = await api.get('/banks');
    console.log('Resposta da API:', response.data);
    const banks = response.data.map((b: any) => ({
      code: b.code,
      name: b.name
    }));
    banks.sort((a, b) => a.code.localeCompare(b.code));
    return banks;
  } catch (error) {
    console.error('Erro ao buscar bancos:', error);
    throw error;
  }
};

export const generatePDF = async (
  formData: FormDataType,
  product: Product
): Promise<Blob> => {
  const response = await api.post(
    '/generate-pdf',
    { formData, product },
    { responseType: 'blob' }
  );
  return response.data;
};

export const createZendeskTicket = async (
  formData: FormDataType,
  product: Product,
  pdfBlob: Blob
): Promise<ZendeskTicket> => {
  const formDataToSend = new FormData();
  formDataToSend.append('formData', JSON.stringify(formData));
  formDataToSend.append('product', product);
  formDataToSend.append('pdf', pdfBlob);

  const response = await api.post('/zendesk/ticket', formDataToSend, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return response.data;
};

export const sendEmail = async (
  formData: FormDataType,
  product: Product,
  pdfBlob: Blob,
  ticketUrl: string
): Promise<void> => {
  const formDataToSend = new FormData();
  formDataToSend.append('formData', JSON.stringify(formData));
  formDataToSend.append('product', product);
  formDataToSend.append('pdf', pdfBlob);
  formDataToSend.append('ticketUrl', ticketUrl);

  await api.post('/email/send', formDataToSend, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
}; 