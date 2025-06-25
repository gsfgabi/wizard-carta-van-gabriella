import { Buffer } from 'buffer';
const pdfMake = require('pdfmake/build/pdfmake');
const pdfFonts = require('pdfmake/build/vfs_fonts');
pdfMake.vfs = pdfFonts.vfs;

export async function generatePdfBufferNexxera(data: any): Promise<Buffer> {
  const {
    bank_name,
    branch_number,
    manager_name,
    manager_cellphone,
    manager_email,
    corporate_name,
    cnpj,
    responsible_person_name,
    responsible_person_email,
    responsible_person_cellphone,
    responsible_person_title,
    name_responsible_person_tecnospeed,
    email_responsible_person_tecnospeed,
    url_logo,
    bank_city,
    bank_state,
    contact_preference
  } = data;

  const docDefinition = {
    content: [
      { text: 'CARTA DE ABERTURA DE RELACIONAMENTO', style: 'header' },

      {
        table: {
          widths: ['*'],
          body: [
            [{ text: '[LOGO]\n' + corporate_name, alignment: 'center', margin: [0, 10, 0, 10] }],
            [{ text: 'Carta Circular', alignment: 'center' }] // segunda linha centralizada também
          ]
        },
        margin: [0, 10]
      },

      { text: 'Dados do Banco:', style: 'sectionHeader' },

      {
        columns: [
          { text: [{ text: 'Banco: ', bold: true }, bank_name], margin: [0, 0, 10, 0] },
          { text: [{ text: 'Agência: ', bold: true }, branch_number] }
        ],
        margin: [0, 0, 0, 5]
      },

      {
        columns: [
          { text: [{ text: `Cidade:`, bold: true }, `${bank_city || "São Paulo"}`], margin: [0, 0, 10, 0] },
          { text: [{ text: `UF:`, bold: true }, `${bank_state || "SP"}`] }
        ],
        margin: [0, 0, 0, 10]
      },

      {
        text: 'Dados do gerente responsável pela abertura (ou setor responsável pela abertura do processo) (OBRIGATÓRIO):',
        bold: true,
        margin: [0, 10, 0, 5]
      },

      {
        columns: [
          { text: [{ text: 'Nome: ', bold: true }, manager_name], margin: [0, 0, 10, 0] },
          { text: [{ text: 'Telefone/Celular: ', bold: true }, manager_cellphone] }
        ],
        margin: [0, 0, 0, 5]
      },

      { text: [{ text: 'E-mail: ', bold: true }, manager_email], margin: [0, 0, 0, 10] },

      {
        text: 'Preferência por contato: (x) E-mail    ( ) Telefone    (x) Whatsapp    Outro: _______',
        margin: [0, 5, 0, 10]
      },

      {
        text: '*** Este contato será utilizado apenas caso haja problemas ou atrasos no processo de liberação do relacionamento',
        italics: true,
        fontSize: 8,
        margin: [0, 0, 0, 10]
      },

      {
        text: 'Assunto: Solicitação de Alteração do Processo EDI – Troca Eletrônica de Dados',
        bold: true,
        margin: [0, 0, 0, 10]
      },

      { text: 'Prezados Senhores,', margin: [0, 0, 0, 10] },

      {
        text: [
          'Avaliando os processos eletrônicos existentes na ',
          { text: 'Nexxera tecnologia e serviços s/a', bold: true },
          ', percebemos a necessidade de alterarmos a forma de entrega e recebimento de arquivos eletrônicos com bancos, implantando em nossa empresa maior padronização e controle nestes processos.\nEm função de atender estas necessidades de integração, informamos que a ',
          { text: 'VAN NEXXERA TECNOLOGIA E SERVIÇOS S/A', bold: true },
          ' ficará responsável pelo tráfego de dados entre a ',
          corporate_name,
          ' e o Banco, para os arquivos da tabela abaixo, em substituição ao atual meio de comunicação.'
        ],
        margin: [0, 0, 0, 10]
      },

      {
        table: {
          widths: ['*', '*', '*'],
          body: [
            [
              { text: 'Serviço no Banco', bold: true, alignment: 'center' },
              { text: 'Serviço no Banco', bold: true, alignment: 'center' },
              { text: 'Serviço no Banco', bold: true, alignment: 'center' }
            ],
            [
              { text: 'DDA', alignment: 'center' },
              { text: 'Extrato', alignment: 'center' },
              { text: 'Pagamento', alignment: 'center' }
            ]
          ]
        },
        margin: [0, 0, 0, 10]
      },

      {
        text: `Este processo faz parte de um novo projeto que está sendo implementado na área financeira de nossa empresa, e por essa razão necessitamos da liberação dos arquivos solicitados, em Ambiente de Produção.
Desta forma, solicitamos que o Banco disponibilize à Nexxera os arquivos com periodicidade diária, através do meio de comunicação já utilizado com a Nexxera.
Informamos que os custos de Troca Eletrônica de Informações - EDI será 100% empresa.
Os contatos na Nexxera serão através da equipe de Relacionamentos no e-mail implantacao@nexxera.com. Sendo assim, solicitamos seu empenho em liberar este acesso com a maior brevidade possível, sob pena de impactar o cronograma do projeto.
Contamos com sua habitual atenção e desde já agradecemos.
Atenciosamente,`,
        margin: [0, 0, 0, 10]
      },

      // Segunda planilha (última tabela)
      {
        table: {
          widths: ['*', '*'],
          body: [
            [
              { text: [{ text: 'RAZÃO SOCIAL: ', bold: true }, corporate_name] },
              { text: [{ text: 'CNPJ: ', bold: true }, cnpj] }
            ],
            [
              { text: [{ text: 'NOME: ', bold: true }, responsible_person_name] },
              { text: [{ text: 'CARGO: ', bold: true }, responsible_person_title] }
            ],
            [
              { text: [{ text: 'TELEFONE: ', bold: true }, responsible_person_cellphone] },
              { text: [{ text: 'E-MAIL: ', bold: true }, responsible_person_email] }
            ],
            [
              { text: [{ text: 'RESPONSÁVEL: ', bold: true }, `${name_responsible_person_tecnospeed}`] },
              { text: [{ text: 'E-MAIL RESP: ', bold: true }, `${email_responsible_person_tecnospeed}`] }
            ]
          ]
        },
        margin: [0, 20, 0, 0]
      }
    ],

    styles: {
      header: {
        fontSize: 10,
        bold: true,
        alignment: 'center',
        margin: [0, 0, 0, 10]
      },
      sectionHeader: {
        fontSize: 10,
        bold: true,
        margin: [0, 10, 0, 4]
      }
    },
    defaultStyle: {
      fontSize: 10
    }
  };

  return new Promise((resolve) => {
    pdfMake.createPdf(docDefinition).getBuffer((buffer: Uint8Array) => {
      resolve(Buffer.from(buffer));
    });
  });
}
