import { Buffer } from 'buffer';
const pdfMake = require('pdfmake/build/pdfmake');
const pdfFonts = require('pdfmake/build/vfs_fonts');
pdfMake.vfs = pdfFonts.vfs;

import { GeneratePdfsDto } from 'src/pdf/dto/generate-pdfs.dto';

export async function generatePdfBufferFinnet(data: GeneratePdfsDto): Promise<Buffer> {
  const {
    name_bank,
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
    name_responsible_person_tecnospeed,
    email_responsible_person_tecnospeed
  } = data;

  const docDefinition = {
    content: [
      {
        text: `Ao ${name_bank || "Banco do Brasil"} \n\nA/C ${manager_name}`,
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
        text: [
          { text: 'Razão Social: ', bold: true },
          `${corporate_name}\n`,
          { text: 'CNPJ: ', bold: true },
          `${cnpj}\n`,
          { text: 'Agência / Conta Corrente: ', bold: true },
          `${branch_number} / ${account_number}\n`,
          { text: 'Convênio: ', bold: true },
          `${agreement_number}`,
        ],
        margin: [0, 0, 0, 10],
      },
      { text: 'Van Contratada', bold: true },
      {
        text: [
          { text: 'Razão Social: ', bold: true },
          'FINNET S/A Tecnologia\n',
          { text: 'CNPJ: ', bold: true },
          '05.607.266/0001-10',
        ],
        margin: [0, 0, 0, 10],
      },
      { text: 'Produtos Financeiros', bold: true },
      {
        text: `(x) Pagamentos\n( ) Boletos\n(x) DDA\n(x) Extrato`,
        margin: [0, 0, 0, 10],
      },
      { text: 'Ambiente:', bold: true, margin: [0, 0, 0, 0] },
      {
        text: `(X) Arquivo em produção\n\nCNAB:\n(x) 240\n( ) 400`,
        margin: [0, 0, 0, 10],
      },
      {
        text:
          'Os custos serão assumidos 100% pela Empresa (alterar para 100% Banco se assim for negociado entre Empresa e Banco)\n\nQualquer dúvida contatar:',
        margin: [0, 0, 0, 10],
      },
      { text: 'Contato da Empresa', bold: true, margin: [0, 0, 0, 5] },
      {
        text: [
          { text: 'Nome: ', bold: true },
          `${responsible_person_name}\n`,
          { text: 'E-mail: ', bold: true },
          `${responsible_person_email}\n`,
          { text: 'Telefone: ', bold: true },
          `${responsible_person_cellphone}`,
        ],
        margin: [0, 0, 0, 10],
      },
      { text: 'Contato da VAN FINNET', bold: true, margin: [0, 0, 0, 5] },
      {
        text: [
          { text: 'Nome: ', bold: true },
          `Bianca e João\n`,
          { text: 'E-mail: ', bold: true },
          `pis.posvenda@finnet.com.br\n`,
          { text: 'Telefone: ', bold: true },
          `(11) 94457-8493 (11) 99189-2213`,
        ],
        margin: [0, 0, 0, 10],
      },
      {
        text: 'Contato do responsável técnico',
        bold: true,
        margin: [0, 0, 0, 5],
      },
      {
        text: [
          { text: 'Nome: ', bold: true },
          `${name_responsible_person_tecnospeed}\n`,
          { text: 'E-mail: ', bold: true },
          `${email_responsible_person_tecnospeed}`,
        ],
        margin: [0, 0, 0, 10],
      },
      {
        text: 'Contato do gerente de conta:',
        bold: true,
        margin: [0, 0, 0, 5],
      },
      {
        text: [
          { text: 'Nome: ', bold: true },
          `${manager_name}\n`,
          { text: 'Telefone: ', bold: true },
          `${manager_cellphone}\n`,
          { text: 'E-mail: ', bold: true },
          `${manager_email}`,
        ],
        margin: [0, 0, 0, 10],
      },
      {
        text:
          'Colocamo-nos à disposição para quaisquer esclarecimentos adicionais.\n\nAtenciosamente,',
        bold: true,
        alignment: 'right',
        margin: [0, -10, 0, 40], 
      },
      {
        canvas: [
          {
            type: 'line',
            x1: 0,
            y1: 0,
            x2: 250,
            y2: 0,
            lineWidth: 1,
          },
        ],
        alignment: 'right',
        margin: [0, -12, 0, 0], 
      },
      {
        text: 'Assinatura do Responsável pela empresa',
        alignment: 'right',
        margin: [0, -1, 0, 0], 
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
