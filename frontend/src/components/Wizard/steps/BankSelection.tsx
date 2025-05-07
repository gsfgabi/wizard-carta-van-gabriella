import React, { useState, useEffect } from 'react';
import { Combobox } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';

interface Bank {
  code: number;
  name: string;
  vanPattern: string;
  cnab240: boolean;
  cnab400: boolean;
  cnab444: boolean;
  products: string;
}

interface BankSelectionProps {
  onSelect: (bankCode: number) => void;
  selectedBank: number | null;
  onNext: () => void;
}

export const BankSelection: React.FC<BankSelectionProps> = ({
  onSelect,
  selectedBank,
  onNext,
}) => {
  const [banks, setBanks] = useState<Bank[]>([]);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // TODO: Implementar chamada à API para buscar os bancos
    const fetchBanks = async () => {
      try {
        // Simulação temporária
        const mockBanks: Bank[] = [
          {
            code: 1,
            name: 'Banco do Brasil',
            vanPattern: 'CNAB240',
            cnab240: true,
            cnab400: false,
            cnab444: false,
            products: 'Boletos, Pagamentos, Extrato, DDA',
          },
          {
            code: 341,
            name: 'Itaú',
            vanPattern: 'CNAB400',
            cnab240: false,
            cnab400: true,
            cnab444: false,
            products: 'Boletos, Pagamentos, Extrato',
          },
        ];
        setBanks(mockBanks);
        setLoading(false);
      } catch (error) {
        console.error('Erro ao buscar bancos:', error);
        setLoading(false);
      }
    };

    fetchBanks();
  }, []);

  const filteredBanks =
    query === ''
      ? banks
      : banks.filter((bank) =>
          `${bank.code} - ${bank.name}`
            .toLowerCase()
            .includes(query.toLowerCase())
        );

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-lg font-medium text-gray-900">
          Selecione o Banco
        </h2>
        <p className="mt-1 text-sm text-gray-500">
          Escolha o banco para o qual deseja gerar a Carta de VAN
        </p>
      </div>

      <div className="relative">
        <Combobox
          value={banks.find((bank) => bank.code === selectedBank) || null}
          onChange={(bank) => bank && onSelect(bank.code)}
        >
          <div className="relative">
            <Combobox.Input
              className="input-field"
              onChange={(event) => setQuery(event.target.value)}
              displayValue={(bank: Bank) =>
                bank ? `${bank.code} - ${bank.name}` : ''
              }
              placeholder="Digite o código ou nome do banco"
            />
            <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronUpDownIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </Combobox.Button>
          </div>

          <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {loading ? (
              <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                Carregando...
              </div>
            ) : filteredBanks.length === 0 ? (
              <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                Banco não localizado
              </div>
            ) : (
              filteredBanks.map((bank) => (
                <Combobox.Option
                  key={bank.code}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? 'bg-primary-600 text-white' : 'text-gray-900'
                    }`
                  }
                  value={bank}
                >
                  {({ selected, active }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? 'font-medium' : 'font-normal'
                        }`}
                      >
                        {bank.code} - {bank.name}
                      </span>
                      {selected ? (
                        <span
                          className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                            active ? 'text-white' : 'text-primary-600'
                          }`}
                        >
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Combobox.Option>
              ))
            )}
          </Combobox.Options>
        </Combobox>
      </div>

      <div className="flex justify-end">
        <button
          type="button"
          className="btn-primary"
          onClick={onNext}
          disabled={!selectedBank}
        >
          Próximo
        </button>
      </div>
    </div>
  );
}; 