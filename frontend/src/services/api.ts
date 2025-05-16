/// <reference types="vite/client" />
import axios from 'axios';
import type { Bank, FormData as FormDataType, Product, ZendeskTicket } from '../types';

const BANKS_API_URL = import.meta.env.VITE_BANKS_API;

const api = axios.create({
  baseURL: '/api'
});

export const getBanks = async (): Promise<Bank[]> => {
  try {
    const response = await api.get('/banks'); // Usando a instância configurada com baseURL
    console.log('Resposta da API:', response.data); // Para debug
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