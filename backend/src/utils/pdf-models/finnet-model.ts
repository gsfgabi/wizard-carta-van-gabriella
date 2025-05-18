import { Buffer } from 'buffer';

const pdfMake = require('pdfmake/build/pdfmake');
const pdfFonts = require('pdfmake/build/vfs_fonts');

pdfMake.vfs = pdfFonts.vfs;

export async function generatePdfBufferFinnet(data: any): Promise<Buffer> {
  const exampleData = data || {
    title: 'Relatório de Tipos de Vans',
    generatedAt: new Date().toLocaleDateString(),
    products: [
      { id: 1, name: 'Furgão' },
      { id: 2, name: 'Minivan' },
    ],
    reportTypes: ['type1', 'type2'],
  };

  const products = Array.isArray(exampleData.products) ? exampleData.products : [];
  const reportTypes = Array.isArray(exampleData.reportTypes) ? exampleData.reportTypes : [];

  if (products.length === 0 || reportTypes.length === 0) {
    throw new Error('Não há produtos ou tipos de relatório válidos para gerar o PDF.');
  }

  const docDefinition = {
    content: [
      { text: exampleData.title, style: 'header' },
      { text: `Gerado em: ${exampleData.generatedAt}`, style: 'subheader' },
      {
        table: {
          widths: ['auto', '*', '*'],
          body: [
            ['ID', 'Nome do Produto', 'Tipo de Relatório'],
            ...products
              .map((product) =>
                reportTypes.map((reportType) => [
                  product.id,
                  product.name,
                  reportType,
                ])
              )
              .flat(),
          ],
        },
        margin: [0, 10],
      },
    ],
    styles: {
      header: {
        fontSize: 18,
        bold: true,
        alignment: 'center',
        margin: [0, 0, 0, 10],
      },
      subheader: {
        fontSize: 12,
        color: 'gray',
        margin: [0, 0, 0, 10],
      },
    },
  };

  return new Promise((resolve, reject) => {
    pdfMake.createPdf(docDefinition).getBuffer((buffer: Uint8Array) => {
      resolve(Buffer.from(buffer));
    });
  });
}