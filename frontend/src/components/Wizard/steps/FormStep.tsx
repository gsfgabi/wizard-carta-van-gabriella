import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import InputMask from 'react-input-mask';

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
}

interface FormStepProps {
  formData: FormData;
  onUpdate: (data: FormData) => void;
  onNext: () => void;
  onBack: () => void;
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
});

const CNAB_OPTIONS = [
  { value: 'cnab240', label: 'CNAB 240' },
  { value: 'cnab400', label: 'CNAB 400' },
  { value: 'cnab444', label: 'CNAB 444' },
];

export const FormStep: React.FC<FormStepProps> = ({
  formData,
  onUpdate,
  onNext,
  onBack,
}) => {
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
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-lg font-medium text-gray-900">
          Preencha os Dados da Carta
        </h2>
        <p className="mt-1 text-sm text-gray-500">
          Preencha todos os campos necessários para gerar a Carta de VAN
        </p>
      </div>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          onUpdate(values);
          onNext();
        }}
      >
        {({ errors, touched }) => (
          <Form className="space-y-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="cnpj"
                  className="block text-sm font-medium text-gray-700"
                >
                  CNPJ
                </label>
                <Field
                  as={InputMask}
                  mask="99.999.999/9999-99"
                  name="cnpj"
                  className={`input-field ${
                    errors.cnpj && touched.cnpj ? 'border-red-500' : ''
                  }`}
                />
                {errors.cnpj && touched.cnpj && (
                  <div className="error-message">{errors.cnpj}</div>
                )}
              </div>

              <div>
                <label
                  htmlFor="razaoSocial"
                  className="block text-sm font-medium text-gray-700"
                >
                  Razão Social
                </label>
                <Field
                  name="razaoSocial"
                  className={`input-field ${
                    errors.razaoSocial && touched.razaoSocial
                      ? 'border-red-500'
                      : ''
                  }`}
                />
                {errors.razaoSocial && touched.razaoSocial && (
                  <div className="error-message">{errors.razaoSocial}</div>
                )}
              </div>

              <div>
                <label
                  htmlFor="nomeResponsavel"
                  className="block text-sm font-medium text-gray-700"
                >
                  Nome do Responsável
                </label>
                <Field
                  name="nomeResponsavel"
                  className={`input-field ${
                    errors.nomeResponsavel && touched.nomeResponsavel
                      ? 'border-red-500'
                      : ''
                  }`}
                />
                {errors.nomeResponsavel && touched.nomeResponsavel && (
                  <div className="error-message">{errors.nomeResponsavel}</div>
                )}
              </div>

              <div>
                <label
                  htmlFor="cargoResponsavel"
                  className="block text-sm font-medium text-gray-700"
                >
                  Cargo do Responsável
                </label>
                <Field
                  name="cargoResponsavel"
                  className={`input-field ${
                    errors.cargoResponsavel && touched.cargoResponsavel
                      ? 'border-red-500'
                      : ''
                  }`}
                />
                {errors.cargoResponsavel && touched.cargoResponsavel && (
                  <div className="error-message">{errors.cargoResponsavel}</div>
                )}
              </div>

              <div>
                <label
                  htmlFor="telefone"
                  className="block text-sm font-medium text-gray-700"
                >
                  Telefone
                </label>
                <Field
                  as={InputMask}
                  mask="(99) 99999-9999"
                  name="telefone"
                  className={`input-field ${
                    errors.telefone && touched.telefone ? 'border-red-500' : ''
                  }`}
                />
                {errors.telefone && touched.telefone && (
                  <div className="error-message">{errors.telefone}</div>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  E-mail
                </label>
                <Field
                  name="email"
                  type="email"
                  className={`input-field ${
                    errors.email && touched.email ? 'border-red-500' : ''
                  }`}
                />
                {errors.email && touched.email && (
                  <div className="error-message">{errors.email}</div>
                )}
              </div>

              <div>
                <label
                  htmlFor="agencia"
                  className="block text-sm font-medium text-gray-700"
                >
                  Agência
                </label>
                <Field
                  name="agencia"
                  className={`input-field ${
                    errors.agencia && touched.agencia ? 'border-red-500' : ''
                  }`}
                />
                {errors.agencia && touched.agencia && (
                  <div className="error-message">{errors.agencia}</div>
                )}
              </div>

              <div>
                <label
                  htmlFor="agenciaDV"
                  className="block text-sm font-medium text-gray-700"
                >
                  DV da Agência (opcional)
                </label>
                <Field
                  name="agenciaDV"
                  className="input-field"
                />
              </div>

              <div>
                <label
                  htmlFor="conta"
                  className="block text-sm font-medium text-gray-700"
                >
                  Conta
                </label>
                <Field
                  name="conta"
                  className={`input-field ${
                    errors.conta && touched.conta ? 'border-red-500' : ''
                  }`}
                />
                {errors.conta && touched.conta && (
                  <div className="error-message">{errors.conta}</div>
                )}
              </div>

              <div>
                <label
                  htmlFor="contaDV"
                  className="block text-sm font-medium text-gray-700"
                >
                  DV da Conta
                </label>
                <Field
                  name="contaDV"
                  className={`input-field ${
                    errors.contaDV && touched.contaDV ? 'border-red-500' : ''
                  }`}
                />
                {errors.contaDV && touched.contaDV && (
                  <div className="error-message">{errors.contaDV}</div>
                )}
              </div>

              <div>
                <label
                  htmlFor="convenio"
                  className="block text-sm font-medium text-gray-700"
                >
                  Convênio
                </label>
                <Field
                  name="convenio"
                  className={`input-field ${
                    errors.convenio && touched.convenio ? 'border-red-500' : ''
                  }`}
                />
                {errors.convenio && touched.convenio && (
                  <div className="error-message">{errors.convenio}</div>
                )}
              </div>

              <div>
                <label
                  htmlFor="cnab"
                  className="block text-sm font-medium text-gray-700"
                >
                  CNAB
                </label>
                <Field
                  as="select"
                  name="cnab"
                  className={`input-field ${
                    errors.cnab && touched.cnab ? 'border-red-500' : ''
                  }`}
                >
                  <option value="">Selecione o CNAB</option>
                  {CNAB_OPTIONS.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </Field>
                {errors.cnab && touched.cnab && (
                  <div className="error-message">{errors.cnab}</div>
                )}
              </div>

              <div>
                <label
                  htmlFor="nomeGerente"
                  className="block text-sm font-medium text-gray-700"
                >
                  Nome do Gerente
                </label>
                <Field
                  name="nomeGerente"
                  className={`input-field ${
                    errors.nomeGerente && touched.nomeGerente
                      ? 'border-red-500'
                      : ''
                  }`}
                />
                {errors.nomeGerente && touched.nomeGerente && (
                  <div className="error-message">{errors.nomeGerente}</div>
                )}
              </div>

              <div>
                <label
                  htmlFor="telefoneGerente"
                  className="block text-sm font-medium text-gray-700"
                >
                  Telefone do Gerente
                </label>
                <Field
                  as={InputMask}
                  mask="(99) 99999-9999"
                  name="telefoneGerente"
                  className={`input-field ${
                    errors.telefoneGerente && touched.telefoneGerente
                      ? 'border-red-500'
                      : ''
                  }`}
                />
                {errors.telefoneGerente && touched.telefoneGerente && (
                  <div className="error-message">{errors.telefoneGerente}</div>
                )}
              </div>

              <div>
                <label
                  htmlFor="emailGerente"
                  className="block text-sm font-medium text-gray-700"
                >
                  E-mail do Gerente
                </label>
                <Field
                  name="emailGerente"
                  type="email"
                  className={`input-field ${
                    errors.emailGerente && touched.emailGerente
                      ? 'border-red-500'
                      : ''
                  }`}
                />
                {errors.emailGerente && touched.emailGerente && (
                  <div className="error-message">{errors.emailGerente}</div>
                )}
              </div>
            </div>

            <div className="flex justify-between">
              <button
                type="button"
                className="btn-secondary"
                onClick={onBack}
              >
                Voltar
              </button>
              <button
                type="submit"
                className="btn-primary"
              >
                Próximo
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}; 