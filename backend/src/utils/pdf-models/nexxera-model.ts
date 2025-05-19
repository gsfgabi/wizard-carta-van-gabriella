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
    responsible_person_title
  } = data;

  const docDefinition = {
    content: [
      { text: 'CARTA DE ABERTURA DE RELACIONAMENTO', style: 'header' },

      {
        table: {
          widths: ['*'],
          body: [
            [{ text: '[LOGO]\n' + corporate_name, alignment: 'center', margin: [0, 10] }],
            [{ text: 'Carta Circular', alignment: 'center' }]
          ]
        },
        margin: [0, 10]
      },

      { text: 'Dados do Banco:', style: 'sectionHeader' },

      {
        columns: [
          { text: `Banco: ${bank_name}` },
          { text: `Agência: ${branch_number}` }
        ]
      },

      {
        columns: [
          { text: 'Cidade: __________________' },
          { text: 'UF: ____' }
        ]
      },

      {
        text: 'Dados do gerente responsável pela abertura (ou setor responsável pela abertura do processo) (OBRIGATÓRIO):',
        margin: [0, 10, 0, 0]
      },

      {
        columns: [
          { text: `Nome: ${manager_name}` },
          { text: `Telefone/Celular: ${manager_cellphone}` }
        ]
      },

      { text: `E-mail: ${manager_email}` },

      {
        text: 'Preferência por contato: [ ] E-mail    [ ] Telefone    [ ] Whatsapp    Outro: _______',
        margin: [0, 5]
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
        text:
          `Avaliando os processos eletrônicos existentes na ${corporate_name}, 
percebemos a necessidade de alterarmos a forma de entrega e recebimento de arquivos eletrônicos com bancos, implantando em nossa empresa maior padronização e controle nestes processos.
Em função de atender estas necessidades de integração, informamos que a VAN NEXXERA TECNOLOGIA E SERVIÇOS S/A ficará responsável pelo tráfego de dados entre a ${corporate_name} e o Banco, para os arquivos da tabela abaixo, em substituição ao atual meio de comunicação.`,
        margin: [0, 0, 0, 10]
      },

      {
        table: {
          widths: ['*', '*', '*'],
          body: [
            ['Serviço no Banco', 'Serviço no Banco', 'Serviço no Banco'],
            ['[SERVIÇO 1]', '[SERVIÇO 2]', '[SERVIÇO 3]']
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

      {
        table: {
          widths: ['*', '*'],
          body: [
            [`RAZÃO SOCIAL: ${corporate_name}`, `CNPJ: ${cnpj}`],
            [`NOME: ${responsible_person_name}`, `CARGO: ${responsible_person_title}`],
            [`TELEFONE: ${responsible_person_cellphone}`, `E-MAIL: ${responsible_person_email}`],
            ['RESPONSÁVEL: [RESP TECNOSPEED]', 'E-MAIL RESP TEC: [RESP. TECNOSPEED]']
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