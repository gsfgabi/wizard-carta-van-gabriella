import { Buffer } from 'buffer';
const pdfMake = require('pdfmake/build/pdfmake');
const pdfFonts = require('pdfmake/build/vfs_fonts');
pdfMake.vfs = pdfFonts.vfs;

import { GeneratePdfsDto } from 'src/pdf/dto/generate-pdfs';

export async function generatePdfBufferFinnet(data: GeneratePdfsDto): Promise<Buffer> {
  const {
    bank_name,
    manager_name,
    corporate_name,
    responsible_person_name,
    cnpj,
    branch_number,
    account_number,
    agreement_number,
    responsible_person_email,
    responsible_person_cellphone,
    manager_email,
    manager_cellphone, 
  } = data;

  const docDefinition = {
    content: [
      {
        text: `Ao BANCO ${bank_name}\n\nA/C ${manager_name}`,
        style: 'headerLeft',
        margin: [0, 0, 0, 10],
      },
      {
        text: `Assunto: Intercâmbio de Arquivos – ${corporate_name}`,
        bold: true,
        margin: [0, 0, 0, 10],
      },
      {
        text: `Comunicamos que nossa empresa passou a operar os relacionamentos de EDI, transferência eletrônica de arquivos, através da VAN FINNET.
Solicitamos que esta Instituição disponibilize o suporte necessário para viabilizar esta implantação, onde as ações necessárias para esta migração serão conduzidas juntamente com a FINNET.`,
        margin: [0, 0, 0, 10],
      },
      { text: 'Contratante', bold: true, margin: [0, 0, 0, 5] },
      {
        ul: [
          `Razão Social: ${corporate_name}`,
          `CNPJ: ${cnpj}`,
          `Agência / Conta Corrente: ${branch_number} / ${account_number}`,
          `Convênio: ${agreement_number}`,
        ],
        margin: [0, 0, 0, 10],
      },
      { text: 'Van Contratada', bold: true },
      {
        text: 'Razão Social: FINNET S/A Tecnologia \nCNPJ: 05.607.266/0001-10',
        margin: [0, 0, 0, 10],
      },
      { text: 'Produtos Financeiros', bold: true },
      {
        ul: [ {text: 'Pagamentos'}, {text: 'Boletos'}, {text: 'DDA'}, {text: 'Extrato'} ],
        margin: [0, 0, 0, 10],
      },
      { text: 'Ambiente:', bold: true },
      { text: '( ) Arquivo em produção', margin: [0, 0, 0, 10] },
      {
        text:
          'Os custos serão assumidos 100% pela Empresa (alterar para 100% Banco se assim for negociado entre Empresa e Banco)\n\nQualquer dúvida contatar:',
        margin: [0, 0, 0, 10],
      },
      { text: 'Contato da Empresa', bold: true, margin: [0, 0, 0, 5] },
      {
        ul: [
          `Nome: ${responsible_person_name}`,
          `E-mail: ${responsible_person_email}`,
          `Telefone: ${responsible_person_cellphone}`,
        ],
        margin: [0, 0, 0, 10],
      },
      { text: 'Contato da VAN FINNET', bold: true, margin: [0, 0, 0, 5] },
      {
        ul: [
          'Nome: Bianca e João',
          'E-mail: pis.posvenda@finnet.com.br',
          'Telefone: (11) 94457-8493 (11) 99189-2213',
        ],
        margin: [0, 0, 0, 10],
      },
      {
        text: 'Contato do responsável técnico',
        bold: true,
        margin: [0, 0, 0, 5],
      },
      {
        ul: [
          'Nome: [VARIÁVEL NOME RESPONSÁVEL TECNOSPEED]',
          'E-mail: [VARIÁVEL E-MAIL RESPONSÁVEL TECNOSPEED]',
        ],
        margin: [0, 0, 0, 10],
      },
      {
        text: 'Contato do gerente de conta:',
        bold: true,
        margin: [0, 0, 0, 5],
      },
      {
        ul: [
          `Nome: ${manager_name}`,
          `Telefone: ${manager_cellphone}`,
          `E-mail: ${manager_email}`,
        ],
        margin: [0, 0, 0, 10],
      },
      {
        text:
          'Colocamo-nos à disposição para quaisquer esclarecimentos adicionais.\n\nAtenciosamente,',
        margin: [0, 0, 0, 20],
        alignment: 'right',
      },
      {
        text: '________________________________\nAssinatura do Responsável pela empresa',
        alignment: 'right',
      },
    ],
    styles: {
      headerLeft: {
        fontSize: 10,
        bold: true,
        alignment: 'left',
      },
    },
    defaultStyle: {
      fontSize: 10,
    },
  };

  return new Promise((resolve, reject) => {
    pdfMake.createPdf(docDefinition).getBuffer((buffer: Uint8Array) => {
      resolve(Buffer.from(buffer));
    });
  });
}