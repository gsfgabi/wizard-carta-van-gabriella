import React, { useEffect, useState, memo } from 'react';
import Button from '../../Button/Button';
import type { VanTypeData } from '../../../services/api';
import VanTypeSelectionSkeleton from '../../Skeleton/VanTypeSelectionSkeleton';

interface VanTypeSelectionProps {
  selectedBank: number | null;
  onNext: (selectedVanTypes: string[]) => void;
  onBack: () => void;
  onSelect: (vanTypes: string[]) => void;
  selectedVanTypes: string[];
  vanTypes: VanTypeData[];
  loading: boolean;
}

export const VanTypeSelection = memo(({
  selectedBank,
  onNext,
  onBack,
  onSelect,
  selectedVanTypes,
  vanTypes,
  loading,
}: VanTypeSelectionProps) => {
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (vanTypes.length === 1 && vanTypes[0].available) {
      onSelect([vanTypes[0].id.toString()]);
    }
  }, [vanTypes, onSelect]);

  const handleVanTypeToggle = (vanTypeId: string) => {
    const newSelection = selectedVanTypes.includes(vanTypeId)
      ? selectedVanTypes.filter((id) => id !== vanTypeId)
      : [...selectedVanTypes, vanTypeId];
    onSelect(newSelection);
  };

  if (loading) {
    return <VanTypeSelectionSkeleton />;
  }

  if (error) {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center">
        <p className="text-red-600 mb-4 text-sm xs:text-base">{error}</p>
        <button
          onClick={() => {
            setError(null);
          }}
          className="text-[#8D44AD] hover:text-[#7d379c] font-medium text-sm xs:text-base"
        >
          Tentar novamente
        </button>
      </div>
    );
  }

  const allVanTypesUnavailable = vanTypes.length > 0 && vanTypes.every(vanType => !vanType.available);

  if (vanTypes.length === 0 || allVanTypesUnavailable) {
    return (
      <>
        <p className="text-sm xs:text-base text-gray-700 mb-4 xs:mb-6">
          Selecione qual(is) tipo(s) de VAN você deseja gerar a carta.
        </p>

        <div className="w-full h-full flex flex-col items-center justify-center p-4 xs:p-8 bg-gray-50 rounded-lg">
          <div className="text-center">
            <p className="text-red-600 text-base xs:text-lg font-medium mb-2">
              Não há tipos de VAN disponíveis para o banco selecionado
            </p>
            <p className="text-gray-600 text-xs xs:text-base">
              Por favor, selecione outro banco ou entre em contato com o suporte.<br/>
            </p>
          </div>
        </div>

        <div className="flex flex-col xs:flex-row justify-between items-center mt-6 xs:mt-8 gap-3 xs:gap-4">
          <Button
            type="button"
            className="border-2 border-[#8D44AD] text-[#8D44AD] bg-white rounded-full px-6 xs:px-10 py-2 font-semibold transition hover:bg-[#f3eaff] hover:text-[#8D44AD] disabled:opacity-50 shadow-none w-full xs:w-auto"
            onClick={onBack}
          >
            Voltar
          </Button>
          <Button
            type="button"
            className="bg-[#8D44AD] text-white rounded-full px-6 xs:px-10 py-2 font-semibold shadow-md hover:bg-[#7d379c] transition disabled:opacity-50 w-full xs:w-auto"
            onClick={() => onNext([])}
            disabled={true}
          >
            Próximo
          </Button>
        </div>
      </>
    );
  }

  return (
    <>
      <p className="text-sm xs:text-base text-gray-700 mb-4 xs:mb-6">
        Selecione qual(is) tipo(s) de VAN você deseja gerar a carta.
      </p>

      <div className="space-y-3 xs:space-y-4 mb-6 xs:mb-8">
        {vanTypes.map((vanType) => (
          <label
            key={vanType.id}
            className={`flex items-center p-3 xs:p-4 rounded-lg border-2 cursor-pointer transition-colors duration-200 text-sm xs:text-base
              ${selectedVanTypes.includes(vanType.id.toString())
                ? 'border-[#8D44AD] bg-[#f3eaff]'
                : 'border-gray-200 hover:border-[#8D44AD] hover:bg-[#f3eaff]'}
              ${!vanType.available ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            <input
              type="checkbox"
              checked={selectedVanTypes.includes(vanType.id.toString())}
              onChange={() => handleVanTypeToggle(vanType.id.toString())}
              disabled={!vanType.available}
              className="w-4 h-4 xs:w-5 xs:h-5 text-[#8D44AD] accent-[#8D44AD] border-gray-300 rounded focus:ring-[#8D44AD]"
            />
            <span className="ml-2 xs:ml-3 text-base xs:text-lg font-medium text-gray-900">
              {vanType.type}
            </span>
            {!vanType.available && (
              <span className="ml-2 text-xs xs:text-sm text-red-600">
                (Indisponível)
              </span>
            )}
          </label>
        ))}
      </div>

      <div className="flex flex-row justify-between items-center mt-6 gap-3">
        <Button
          type="button"
          className="border-2 border-[#8D44AD] text-[#8D44AD] bg-white rounded-full min-w-[120px] px-6 xs:px-10 py-2 font-semibold transition hover:bg-[#f3eaff] hover:text-[#8D44AD] disabled:opacity-50 shadow-none"
          onClick={onBack}
          disabled={loading}
        >
          Voltar
        </Button>
        <Button
          type="button"
          className="bg-[#8D44AD] text-white rounded-full min-w-[120px] px-6 xs:px-10 py-2 font-semibold shadow-md hover:bg-[#7d379c] transition disabled:opacity-50"
          onClick={() => onNext(selectedVanTypes)}
          disabled={selectedVanTypes.length === 0 || vanTypes.length === 0 || loading}
          title={vanTypes.length === 0 ? "Nenhum tipo de VAN disponível para este banco." : selectedVanTypes.length === 0 ? "Selecione pelo menos um tipo de VAN para continuar." : ""}
        >
          {loading ? "Gerando PDFs..." : "Gerar Cartas"}
        </Button>
      </div>
    </>
  );
}); 