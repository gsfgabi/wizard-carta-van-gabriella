import React, { useState, useEffect, memo } from "react";
import {
  Combobox,
  ComboboxInput,
  ComboboxButton,
  ComboboxOptions,
  ComboboxOption,
} from "@headlessui/react";
import { 
  CheckIcon, 
  ChevronUpDownIcon, 
  ChevronDownIcon, 
  ChevronUpIcon, 
  ExclamationTriangleIcon, 
  ArrowPathIcon 
} from "@heroicons/react/20/solid";
import Button from "../../Button/Button";
import { ErrorModal } from '../../Modal/ErrorModal';
import BankSelectionSkeleton from '../../Skeleton/BankSelectionSkeleton';
import type { BankData, ProductData, VanTypeData } from '../../../services/api';

interface BankSelectionProps {
  onSelect: (bankId: number | null) => void;
  selectedBank: number | null;
  onNext: () => void;
  onBack: () => void;
  banks: BankData[];
  loading: boolean;
  error: string | null;
  onRetryFetchBanks: () => void;
  bankFetchAttempts: number;
  products: ProductData[];
  vanTypes: VanTypeData[];
  loadingProducts: boolean;
}

export const BankSelection = memo(({
  onSelect,
  selectedBank,
  onNext,
  onBack,
  banks,
  loading,
  error,
  onRetryFetchBanks,
  bankFetchAttempts,
  products,
  vanTypes,
  loadingProducts,
}: BankSelectionProps) => {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);

  const filteredBanks =
    query === ""
      ? banks
      : banks.filter((bank) =>
          `${bank.code} - ${bank.name}`
            .toLowerCase()
            .includes(query.toLowerCase())
        );

  // Verificar se o banco selecionado tem produtos e tipos de VAN disponíveis
  const availableProducts = products.filter(product => product.available !== false);
  const availableVanTypes = vanTypes.filter(vanType => vanType.available !== false);
  const hasProducts = availableProducts.length > 0;
  const hasVanTypes = availableVanTypes.length > 0;
  const canProceed = hasProducts && hasVanTypes;

  function SaveSelectedBank() {
    const finalBankSelected = banks.find(bank => bank.id === selectedBank);
    localStorage.setItem('selectedBank', JSON.stringify(finalBankSelected));
    console.log("Banco armazenado:", finalBankSelected);
  }

  if (loading && !error) {
    return <BankSelectionSkeleton />;
  }

  if (error && bankFetchAttempts < 3) {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center bg-white rounded-lg">
        <ExclamationTriangleIcon className="h-12 w-12 text-red-500 mb-4" />
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Falha ao carregar bancos</h3>
        <p className="text-red-600 mb-6">{error}</p>
        <Button
          type="button"
          className="bg-[#8D44AD] text-white rounded-full px-6 py-2 font-semibold shadow-md hover:bg-[#7d379c] transition flex items-center gap-2"
          onClick={onRetryFetchBanks}
        >
          <ArrowPathIcon className="h-5 w-5" />
          Tentar Novamente
        </Button>
      </div>
    );
  }

  if (!loading && !error) {
    return (
      <div className="w-full max-w-5xl mx-auto px-2 sm:px-4">
        {/* <h2 className="text-2xl font-bold mb-2 text-black text-left">
          1. Selecionar um Banco (Instituição Bancária)
        </h2> */}
        <p className="text-sm xs:text-base text-black mb-4 sm:mb-6 text-left">
          Selecione um banco para criar uma nova carta de VAN
        </p>
        <div className="mb-8 sm:mb-12 relative">
          <Combobox
            value={banks.find((bank) => bank.id === selectedBank) || null}
            onChange={(bank) => {
              if (bank && bank.id === selectedBank) {
                onSelect(null);
              } else if (bank) {
                onSelect(bank.id);
              }
            }}
          >
            {({ open: comboboxOpen }) => {
              if (open !== comboboxOpen) setTimeout(() => setOpen(comboboxOpen), 0);
              return (
                <div className="relative">
                  <ComboboxInput
                    className="w-full border border-[#E0E0E0] rounded-lg py-2 px-3 xs:py-3 xs:px-4 sm:py-4 sm:px-5 pr-10 xs:pr-12 text-gray-900 bg-white focus:ring-2 focus:ring-[#D1B3E0] focus:border-[#D1B3E0] focus:outline-none transition placeholder:text-gray-400 shadow-md text-sm xs:text-base"
                    onChange={(event) => setQuery(event.target.value)}
                    displayValue={(bank: BankData) =>
                      bank ? `${bank.code} - ${bank.name}` : ""
                    }
                    placeholder="Selecione um banco"
                  />
                  <ComboboxButton className="absolute inset-y-0 right-0 flex items-center pr-2 xs:pr-4 bg-transparent focus:outline-none border-none shadow-none">
                    {open ? (
                      <ChevronUpIcon className="h-4 w-4 xs:h-5 xs:w-5 sm:h-6 sm:w-6 text-gray-400" aria-hidden="true" />
                    ) : (
                      <ChevronDownIcon className="h-4 w-4 xs:h-5 xs:w-5 sm:h-6 sm:w-6 text-gray-400" aria-hidden="true" />
                    )}
                  </ComboboxButton>
                  <ComboboxOptions className="absolute z-10 mt-2 max-h-60 w-full overflow-auto rounded-lg bg-white py-1 text-sm xs:text-base shadow-lg border border-[#D1B3E0] focus:outline-none">
                    {filteredBanks.length === 0 ? (
                      <div key="no-results" className="relative cursor-default select-none py-2 px-4 text-gray-700">
                        Banco não localizado
                      </div>
                    ) : (
                      filteredBanks.map((bank) => (
                        <ComboboxOption
                          key={bank.id}
                          className={({ selected }) =>
                            `relative cursor-pointer select-none py-3 xs:py-4 pl-10 xs:pl-12 pr-4 text-sm xs:text-lg border-b border-[#ECECEC] last:border-b-0
                              ${selected ? "bg-[#f3eaff] text-[#8B3DFF] font-semibold" : "text-gray-900 hover:bg-[#f3eaff]"}
                              transition-colors duration-150 focus:bg-[#E0D7F3] focus:text-[#8B3DFF] focus:font-semibold`
                          }
                          value={bank}
                        >
                          {({ selected }) => (
                            <React.Fragment>
                              <span
                                className={`block truncate ${
                                  selected ? "font-semibold" : "font-normal"
                                }`}
                              >
                                {bank.code} - {bank.name}
                              </span>
                              {selected && (
                                <span
                                  className={`absolute inset-y-0 left-0 flex items-center pl-3 xs:pl-4 ${selected ? "text-[#8B3DFF]" : "text-gray-400"}`}
                                >
                                  <CheckIcon className="h-4 w-4 xs:h-5 xs:w-5" aria-hidden="true" />
                                </span>
                              )}
                            </React.Fragment>
                          )}
                        </ComboboxOption>
                      ))
                    )}
                  </ComboboxOptions>
                </div>
              );
            }}
          </Combobox>
        </div>

        {/* Avisos sobre disponibilidade de produtos e tipos de VAN */}
        {selectedBank && !loadingProducts && (
          <div className="mb-4 sm:mb-6">
            {!hasProducts && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-3 xs:p-4 mb-2 sm:mb-3">
                <div className="flex items-center">
                  <ExclamationTriangleIcon className="h-4 w-4 xs:h-5 xs:w-5 text-red-500 mr-2" />
                  <span className="text-red-700 font-medium text-sm xs:text-base">
                    Este banco não possui produtos disponíveis.
                  </span>
                </div>
                <p className="text-red-600 text-xs xs:text-sm mt-1">
                  Selecione outro banco para continuar.
                </p>
              </div>
            )}
            
            {!hasVanTypes && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-3 xs:p-4 mb-2 sm:mb-3">
                <div className="flex items-center">
                  <ExclamationTriangleIcon className="h-4 w-4 xs:h-5 xs:w-5 text-red-500 mr-2" />
                  <span className="text-red-700 font-medium text-sm xs:text-base">
                    Este banco não possui tipos de VAN disponíveis.
                  </span>
                </div>
                <p className="text-red-600 text-xs xs:text-sm mt-1">
                  Selecione outro banco para continuar.
                </p>
              </div>
            )}
          </div>
        )}

        <div className="flex flex-row justify-between items-center gap-3 mt-6">
          <Button
            type="button"
            className="border-2 border-[#8D44AD] text-[#8D44AD] bg-white rounded-full min-w-[120px] px-6 xs:px-8 sm:px-10 py-2 font-semibold transition hover:bg-[#f3eaff] hover:text-[#8D44AD] disabled:opacity-50 shadow-none"
            onClick={onBack}
          >
            Voltar
          </Button>
          <Button
            type="button"
            className="bg-[#8D44AD] text-white rounded-full min-w-[120px] px-6 xs:px-8 sm:px-10 py-2 font-semibold shadow-md hover:bg-[#7d379c] transition disabled:opacity-50"
            onClick={() => {
              if (selectedBank && canProceed) {
                SaveSelectedBank();
                onNext();
              }
            }}
            disabled={!selectedBank || !canProceed || loadingProducts}
          >
            {loadingProducts ? "Carregando..." : "Próximo"}
          </Button>
        </div>

        <ErrorModal 
          isOpen={showErrorModal} 
          onClose={() => setShowErrorModal(false)} 
        />
      </div>
    );
  }

  return null;
});
