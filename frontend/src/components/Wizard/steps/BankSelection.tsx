import React, { useState, useEffect } from "react";
import {
  Combobox,
  ComboboxInput,
  ComboboxButton,
  ComboboxOptions,
  ComboboxOption,
} from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import Button from "../../Button/Button"; // ajuste o caminho se necessário

interface Bank {
  code: number;
  name: string;
}

interface BankSelectionProps {
  onSelect: (bankCode: number) => void;
  selectedBank: number | null;
  onNext: () => void;
  onBack: () => void;
}

export const BankSelection: React.FC<BankSelectionProps> = ({
  onSelect,
  selectedBank,
  onNext,
  onBack,
}) => {
  const [banks, setBanks] = useState<Bank[]>([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setBanks([
        { code: 33, name: "Banco Santander" },
        { code: 1, name: "Banco do Brasil" },
        { code: 341, name: "Itaú" },
        { code: 104, name: "Caixa Econômica" },
      ]);
      setLoading(false);
    }, 500);
  }, []);

  const filteredBanks =
    query === ""
      ? banks
      : banks.filter((bank) =>
          `${bank.code} - ${bank.name}`
            .toLowerCase()
            .includes(query.toLowerCase())
        );

  return (
    <div className="w-full max-w-2xl mx-auto px-2">
      <h2 className="text-lg font-semibold mb-1">
        1. Selecionar um Banco (Instituição Bancária)
      </h2>
      <p className="text-sm text-gray-500 mb-4">
        Selecione um banco para criar uma nova carta de VAN
      </p>
      <div className="mb-8 relative">
        <Combobox
          value={banks.find((bank) => bank.code === selectedBank) || null}
          onChange={(bank) => bank && onSelect(bank.code)}
        >
          <div className="relative">
            <ComboboxInput
              className="w-full border border-[#8B3DFF] rounded-md py-2 pl-3 pr-10 text-gray-900 bg-white focus:ring-2 focus:ring-[#8B3DFF] focus:border-[#8B3DFF] focus:outline-none transition placeholder:text-[#8B3DFF]"
              onChange={(event) => setQuery(event.target.value)}
              displayValue={(bank: Bank) =>
                bank ? `${bank.code} - ${bank.name}` : ""
              }
              placeholder="Selecione um banco"
            />
            <ComboboxButton className="absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronUpDownIcon
                className="h-5 w-5"
                aria-hidden="true"
              />
            </ComboboxButton>
          </div>
          <ComboboxOptions className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-opacity-60 focus:outline-none sm:text-sm">
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
                <ComboboxOption
                  key={bank.code}
                  className={({ active }) =>
                    `relative cursor-pointer select-none py-2 pl-10 pr-4 ${
                      active
                        ? "bg-[#8B3DFF] text-white"
                        : "text-[#8B3DFF] hover:bg-[#f3eaff]"
                    }`
                  }
                  value={bank}
                >
                  {({ selected, active }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? "font-semibold" : "font-normal"
                        }`}
                      >
                        {bank.code} - {bank.name}
                      </span>
                      {selected ? (
                        <span
                          className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                            active ? "text-white" : "text-[#8B3DFF]"
                          }`}
                        >
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </ComboboxOption>
              ))
            )}
          </ComboboxOptions>
        </Combobox>
      </div>
      <div className="flex justify-between">
        <Button
          type="button"
          className="border border-[#8D44AD] text-white rounded-full px-6 py-2 font-semibold transition hover:bg-[#f3eaff] hover:text-[#8D44AD] disabled:opacity-50"
          onClick={onBack}
          variant="secondary"
        >
          Voltar
        </Button>
        <Button
          type="button"
          className="bg-[#8D44AD] text-white rounded-full px-6 py-2 font-semibold shadow hover:bg-[#8D44AD] transition disabled:opacity-50"
          onClick={onNext}
          disabled={!selectedBank}
          variant="primary"
        >
          Próximo
        </Button>
      </div>
    </div>
  );
};
