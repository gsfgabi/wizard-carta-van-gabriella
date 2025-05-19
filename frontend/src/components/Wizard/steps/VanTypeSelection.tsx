import React, { useEffect, useState } from 'react';
import Card from '../../Card/Card';
import Button from '../../Button/Button';
import { getVanTypes, type VanTypeData } from '../../../services/api';

interface VanTypeSelectionProps {
  selectedVanType: string | null;
  onSelect: (vanType: string | null) => void;
  onNext: () => void;
  onBack: () => void;
  selectedBank: number | null;
}

export const VanTypeSelection: React.FC<VanTypeSelectionProps> = ({
  selectedVanType,
  onSelect,
  onNext,
  onBack,
  selectedBank,
}) => {
  const [vanTypes, setVanTypes] = useState<VanTypeData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (selectedBank) {
      setLoading(true);
      setError(null);
      getVanTypes(selectedBank.toString())
        .then((data) => {
          setVanTypes(data);
          setError(null);
        })
        .catch((error) => {
          console.error('Erro ao carregar tipos de VAN:', error);
          setError('Erro ao carregar os tipos de VAN. Por favor, tente novamente.');
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [selectedBank]);

  if (loading) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <p className="text-gray-600">Carregando tipos de VAN...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center">
        <p className="text-red-600 mb-4">{error}</p>
        <button
          onClick={() => {
            setLoading(true);
            setError(null);
            getVanTypes(selectedBank!.toString())
              .then((data) => {
                setVanTypes(data);
                setError(null);
              })
              .catch((error) => {
                setError('Erro ao carregar os tipos de VAN. Por favor, tente novamente.');
              })
              .finally(() => {
                setLoading(false);
              });
          }}
          className="text-[#8D44AD] hover:text-[#7d379c] font-medium"
        >
          Tentar novamente
        </button>
      </div>
    );
  }

  return (
    <Card className="shadow-none p-0">
      <div className="w-full h-full px-0 py-0">
        <h2 className="text-2xl font-semibold mb-2 text-black text-left">
          4. Selecionar tipo de VAN
        </h2>
        <p className="text-base text-black mb-8 text-left">
          Selecione qual tipo de VAN deseja utilizar para a transferência de arquivos
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {vanTypes.map((vanType) => {
            const selected = selectedVanType === vanType.id.toString();
            const isDisabled = !vanType.name;
            
            return (
              <button
                key={vanType.id}
                type="button"
                disabled={isDisabled}
                className={`
                  flex flex-col items-center justify-center rounded-xl border-2 px-4 py-10 transition min-h-[160px] h-full
                  ${selected
                    ? 'border-[#8D44AD] bg-[#8D44AD] text-white'
                    : isDisabled
                    ? 'border-gray-300 bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'border-[#8D44AD] bg-white text-[#8D44AD] hover:bg-[#f3eaff]'}
                  focus:outline-none
                `}
                style={{ boxShadow: 'none' }}
                onClick={() => !isDisabled && onSelect(vanType.id.toString())}
              >
                <span className="text-2xl font-bold mb-2">{vanType.name}</span>
                {isDisabled && (
                  <span className="text-sm text-gray-500 mt-2">
                    Indisponível
                  </span>
                )}
              </button>
            );
          })}
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-center mt-8 gap-4">
          <Button
            type="button"
            className="border-2 border-[#8D44AD] text-[#8D44AD] bg-white rounded-full px-10 py-2 font-semibold transition hover:bg-[#f3eaff] hover:text-[#8D44AD] disabled:opacity-50 shadow-none"
            onClick={onBack}
          >
            Voltar
          </Button>
          <Button
            type="button"
            className="bg-[#8D44AD] text-white rounded-full px-10 py-2 font-semibold shadow-none hover:bg-[#7d379c] transition disabled:opacity-50"
            onClick={onNext}
            disabled={!selectedVanType}
          >
            Próximo
          </Button>
        </div>
      </div>
    </Card>
  );
}; 