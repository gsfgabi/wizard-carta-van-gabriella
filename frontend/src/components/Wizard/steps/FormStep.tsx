import React, { useEffect, useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { IMaskInput } from 'react-imask';
import InputField from '../../Form/InputField';
import Button from '../../Button/Button';
import { getCNABs, type CNABData } from '../../../services/api';

interface FormData {
  cnpj: string;
  razaoSocial: string;
  nomeResponsavel: string;
  cargoResponsavel: string;
  telefone: string;
  email: string;
  agencia: string;
  agenciaDV: string;
  conta: string;
  contaDV: string;
  convenio: string;
  cnab: string;
  nomeGerente: string;
  telefoneGerente: string;
  emailGerente: string;
  banco?: string;
}

interface FormStepProps {
  formData: FormData;
  onUpdate: (data: FormData) => void;
  onNext: () => void;
  onBack: () => void;
  selectedBank: number | null;
}

const validationSchema = Yup.object().shape({
  cnpj: Yup.string()
    .required('CNPJ é obrigatório')
    .matches(/^[0-9]{2}\.[0-9]{3}\.[0-9]{3}\/[0-9]{4}-[0-9]{2}$/, 'CNPJ inválido'),
  razaoSocial: Yup.string().required('Razão Social é obrigatória'),
  nomeResponsavel: Yup.string().required('Nome do Responsável é obrigatório'),
  cargoResponsavel: Yup.string().required('Cargo do Responsável é obrigatório'),
  telefone: Yup.string()
    .required('Telefone é obrigatório')
    .matches(/^\(\d{2}\) \d{5}-\d{4}$/, 'Telefone inválido'),
  email: Yup.string()
    .email('E-mail inválido')
    .required('E-mail é obrigatório'),
  agencia: Yup.string().required('Agência é obrigatória'),
  agenciaDV: Yup.string(),
  conta: Yup.string().required('Conta é obrigatória'),
  contaDV: Yup.string().required('DV da Conta é obrigatório'),
  convenio: Yup.string().required('Convênio é obrigatório'),
  cnab: Yup.string().required('CNAB é obrigatório'),
  nomeGerente: Yup.string().required('Nome do Gerente é obrigatório'),
  telefoneGerente: Yup.string()
    .required('Telefone do Gerente é obrigatório')
    .matches(/^\(\d{2}\) \d{5}-\d{4}$/, 'Telefone inválido'),
  emailGerente: Yup.string()
    .email('E-mail inválido')
    .required('E-mail do Gerente é obrigatório'),
  banco: Yup.string().required('Banco é obrigatório'),
});

export const FormStep: React.FC<FormStepProps> = ({
  formData,
  onUpdate,
  onNext,
  onBack,
  selectedBank,
}) => {
  const [cnabs, setCNABs] = useState<CNABData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedBankData, setSelectedBankData] = useState<{ code: string; name: string } | null>(null);

  useEffect(() => {
    // Recuperar dados do banco do localStorage
    const storedBank = localStorage.getItem('selectedBank');
    if (storedBank) {
      const bankData = JSON.parse(storedBank);
      setSelectedBankData(bankData);
    }

    // Carregar CNABs disponíveis
    if (selectedBank) {
      setLoading(true);
      setError(null);
      getCNABs(selectedBank.toString())
        .then((data) => {
          setCNABs(data);
          setError(null);
        })
        .catch((error) => {
          console.error('Erro ao carregar CNABs:', error);
          setError('Erro ao carregar os CNABs. Por favor, tente novamente.');
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [selectedBank]);

  const initialValues: FormData = {
    cnpj: formData.cnpj || '',
    razaoSocial: formData.razaoSocial || '',
    nomeResponsavel: formData.nomeResponsavel || '',
    cargoResponsavel: formData.cargoResponsavel || '',
    telefone: formData.telefone || '',
    email: formData.email || '',
    agencia: formData.agencia || '',
    agenciaDV: formData.agenciaDV || '',
    conta: formData.conta || '',
    contaDV: formData.contaDV || '',
    convenio: formData.convenio || '',
    cnab: formData.cnab || '',
    nomeGerente: formData.nomeGerente || '',
    telefoneGerente: formData.telefoneGerente || '',
    emailGerente: formData.emailGerente || '',
    banco: selectedBankData ? `${selectedBankData.code} - ${selectedBankData.name}` : '',
  };

  return (
    <>
      <h2 className="text-2xl font-semibold text-black mb-1">
        3. Preencher dados da empresa e conta
      </h2>
      <p className="text-base text-gray-700 mb-6">
        A seguir precisamos coletar alguns dados que utilizaremos para elaborar a carta de VAN para o banco desejado.
      </p>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          onUpdate(values);
          onNext();
        }}
      >
        {({ errors, touched, setFieldValue, values }) => (
          <Form>
            {/* EMPRESA */}
            <div className="mb-6">
              <h3 className="font-semibold text-black mb-2">Empresa</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Field name="razaoSocial">
                  {({ field }: any) => (
                    <InputField
                      label="Razão Social"
                      placeholder="Inserir razão social da empresa"
                      error={touched.razaoSocial && errors.razaoSocial ? errors.razaoSocial : ''}
                      {...field}
                    />
                  )}
                </Field>
                <Field name="cnpj">
                  {({ field }: any) => (
                    <InputField
                      label="CNPJ"
                      placeholder="Inserir número do CNPJ"
                      error={touched.cnpj && errors.cnpj ? errors.cnpj : ''}
                      as={IMaskInput}
                      mask="00.000.000/0000-00"
                      unmask={false}
                      {...field}
                      onAccept={(value: any) => setFieldValue('cnpj', value)}
                    />
                  )}
                </Field>
              </div>
            </div>

            {/* RESPONSÁVEL */}
            <div className="mb-6">
              <h3 className="font-semibold text-black mb-2">Responsável pela Empresa</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Field name="cargoResponsavel">
                  {({ field }: any) => (
                    <InputField
                      label="Cargo"
                      placeholder="Inserir cargo do responsável da empresa"
                      error={touched.cargoResponsavel && errors.cargoResponsavel ? errors.cargoResponsavel : ''}
                      {...field}
                    />
                  )}
                </Field>
                <Field name="nomeResponsavel">
                  {({ field }: any) => (
                    <InputField
                      label="Nome"
                      placeholder="Inserir nome do responsável pela empresa"
                      error={touched.nomeResponsavel && errors.nomeResponsavel ? errors.nomeResponsavel : ''}
                      {...field}
                    />
                  )}
                </Field>
                <Field name="email">
                  {({ field }: any) => (
                    <InputField
                      label="E-mail"
                      placeholder="Inserir email do responsável pela empresa"
                      type="email"
                      error={touched.email && errors.email ? errors.email : ''}
                      {...field}
                    />
                  )}
                </Field>
                <Field name="telefone">
                  {({ field }: any) => (
                    <InputField
                      label="Telefone"
                      placeholder="Inserir telefone do responsável pela empresa"
                      error={touched.telefone && errors.telefone ? errors.telefone : ''}
                      as={IMaskInput}
                      mask="(00) 00000-0000"
                      unmask={false}
                      {...field}
                      onAccept={(value: any) => setFieldValue('telefone', value)}
                    />
                  )}
                </Field>
              </div>
            </div>

            {/* CONTA */}
            <div className="mb-6">
              <h3 className="font-semibold text-black mb-2">Conta</h3>

              {/* Linha com Banco, Conta+DV e Agência+DV */}
              <div className="w-full flex justify-center gap-4">
                
                {/* Banco */}
                <div className="flex flex-col">
                  <label className="block text-sm font-medium mb-1 text-black">Banco</label>
                  <input
                    type="text"
                    value={selectedBankData ? `${selectedBankData.code} - ${selectedBankData.name}` : ''}
                    readOnly
                    className="min-w-[300px] max-w-[500px] rounded-md border border-gray-300 bg-gray-100 px-3 py-2 w-full text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                {/* Conta + DV */}
                <div className="flex gap-2 flex-grow">
                  <Field name="conta">
                    {({ field }: any) => (
                      <InputField
                        label="Conta"
                        placeholder="Inserir o número da conta"
                        error={touched.conta && errors.conta ? errors.conta : ''}
                        {...field}
                        maxLength={6}
                        type="text"
                        className="flex-grow"
                      />
                    )}
                  </Field>
                  <Field name="contaDV">
                    {({ field }: any) => (
                      <InputField
                        label="DV"
                        placeholder="DV"
                        error={touched.contaDV && errors.contaDV ? errors.contaDV : ''}
                        {...field}
                        maxLength={2}
                        type="text"
                        className="w-16"
                      />
                    )}
                  </Field>
                </div>

                {/* Agência + DV */}
                <div className="flex gap-2 flex-grow">
                  <Field name="agencia">
                    {({ field }: any) => (
                      <InputField
                        label="Agência"
                        placeholder="Inserir o número da agência"
                        error={touched.agencia && errors.agencia ? errors.agencia : ''}
                        {...field}
                        maxLength={4}
                        type="text"
                        className="flex-grow"
                      />
                    )}
                  </Field>
                  <Field name="agenciaDV">
                    {({ field }: any) => (
                      <InputField
                        label="DV"
                        placeholder="DV"
                        {...field}
                        maxLength={2}
                        type="text"
                        className="w-16"
                      />
                    )}
                  </Field>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <Field name="convenio">
                  {({ field }: any) => (
                    <InputField
                      label="Convênio"
                      placeholder="Inserir o número do convênio"
                      error={touched.convenio && errors.convenio ? errors.convenio : ''}
                      {...field}
                    />
                  )}
                </Field>
                <div>
                  <label className="block text-sm font-medium mb-1 text-black">CNAB</label>
                  <div className="flex flex-wrap gap-4 mt-2">
                    {loading ? (
                      <p className="text-gray-600">Carregando CNABs...</p>
                    ) : error ? (
                      <p className="text-red-600">{error}</p>
                    ) : cnabs.length === 0 ? (
                      <p className="text-gray-600">Nenhum CNAB disponível para este banco.</p>
                    ) : (
                      cnabs.map(cnab => (
                        <label 
                          key={cnab.id} 
                          className={
                            `flex items-center gap-2 p-3 rounded-lg ${(values.cnab === cnab.name) ? 'bg-[#f3eaff]' : 'bg-white hover:bg-[#f3eaff]'} ${!cnab.available ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'} transition-colors duration-200`
                          }
                        >
                          <Field
                            type="radio"
                            name="cnab"
                            value={cnab.name}
                            className="accent-[#8D44AD]"
                            disabled={!cnab.available}
                          />
                          <span className={`text-base ${!cnab.available ? 'text-gray-400' : 'text-gray-700'}`}>
                            {cnab.name}
                          </span>
                        </label>
                      ))
                    )}
                  </div>
                  {touched.cnab && errors.cnab && (
                    <span className="text-red-500 text-xs mt-1">{errors.cnab}</span>
                  )}
                </div>
              </div>
            </div>

            {/* GERENTE CONTA */}
            <div className="mb-8">
              <h3 className="font-semibold text-black mb-2">Gerente Conta</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Field name="nomeGerente">
                  {({ field }: any) => (
                    <InputField
                      label="Nome"
                      placeholder="Inserir nome do gerente da conta bancária"
                      error={touched.nomeGerente && errors.nomeGerente ? errors.nomeGerente : ''}
                      {...field}
                    />
                  )}
                </Field>
                <Field name="emailGerente">
                  {({ field }: any) => (
                    <InputField
                      label="E-mail"
                      placeholder="Inserir email do gerente da conta bancária"
                      type="email"
                      error={touched.emailGerente && errors.emailGerente ? errors.emailGerente : ''}
                      {...field}
                    />
                  )}
                </Field>
                <Field name="telefoneGerente">
                  {({ field }: any) => (
                    <InputField
                      label="Telefone"
                      placeholder="Inserir telefone do gerente da conta bancária"
                      error={touched.telefoneGerente && errors.telefoneGerente ? errors.telefoneGerente : ''}
                      as={IMaskInput}
                      mask="(00) 00000-0000"
                      unmask={false}
                      {...field}
                      onAccept={(value: any) => setFieldValue('telefoneGerente', value)}
                    />
                  )}
                </Field>
              </div>
            </div>

            <div className="flex justify-between items-center mt-8">
              <Button
                type="button"
                className="border-2 border-[#8D44AD] text-[#8D44AD] bg-white rounded-full px-10 py-2 font-semibold transition hover:bg-[#f3eaff] hover:text-[#8D44AD] disabled:opacity-50 shadow-none"
                onClick={onBack}
              >
                Voltar
              </Button>
              <Button
                type="submit"
                className="bg-[#8D44AD] text-white rounded-full px-10 py-2 font-semibold shadow-md hover:bg-[#7d379c] transition disabled:opacity-50"
              >
                Revisar
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};