import React from 'react';
import { FaMoneyCheckAlt, FaFileAlt, FaExchangeAlt, FaBarcode } from 'react-icons/fa';
import Card from '../../Card/Card';
import { Button } from '../../Form/Button';
import { PreviewStep1 } from '../../Stepper/PreviewStep1.tsx';

interface ProductSelectionProps {
  selectedProducts: string[];
  onSelect: (products: string[]) => void;
  onNext: () => void;
  onBack: () => void;
}

const AVAILABLE_PRODUCTS = [
  {
    id: 'pagamentos',
    name: 'Pagamentos',
    description: 'Trafegar arquivos de remessa e retorno de pagamentos',
    icon: <FaMoneyCheckAlt/>,
  },
  {
    id: 'extrato',
    name: 'Extrato',
    description: 'Trafegar arquivos de extratos',
    icon: <FaFileAlt/>,
  },
  {    id: 'dda',
    name: 'DDA',
    description: 'Trafegar arquivos de varredura de débitos',
    icon: <FaExchangeAlt/>,
  },
  {
    id: 'boletos',
    name: 'Boletos',
    description: 'Trafegar arquivos de remessa e retorno de boletos',
    icon: <FaBarcode/>,
  },
];

export const ProductSelection: React.FC<ProductSelectionProps> = ({
  selectedProducts,
  onSelect,
  onNext,
  onBack,
}) => {
  const handleProductToggle = (productId: string) => {
    const newSelection = selectedProducts.includes(productId)
      ? selectedProducts.filter((id) => id !== productId)
      : [...selectedProducts, productId];
    onSelect(newSelection);
  };

  return (
    
    <Card className="shadow-none p-0">
      <div className="w-full h-full px-0 py-0">
        <h2 className="text-2xl font-semibold mb-2 text-black text-left">
          2. Selecionar um ou mais produtos
        </h2>
        <p className="text-base text-black mb-8 text-left">
          Selecione quais produtos deseja utilizar a transferência de arquivos por VAN
        </p>
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4
            gap-6
            mb-12
          "
        >
          {AVAILABLE_PRODUCTS.map((product) => {
            const selected = selectedProducts.includes(product.id);
            return (
              <button
                key={product.id}
                type="button"
                className={`
                  flex flex-col items-center justify-center rounded-xl border-2 px-4 py-10 transition min-h-[160px] h-full
                  ${selected
                    ? 'border-[#8D44AD] bg-[#8D44AD] text-white'
                    : 'border-[#8D44AD] bg-white text-[#8D44AD] hover:bg-[#f3eaff]'}
                  focus:outline-none
                `}
                style={{ boxShadow: 'none' }}
                onClick={() => handleProductToggle(product.id)}
              >
                <span className="mb-3">
                  {React.cloneElement(product.icon, {
                    color: selected ? 'white' : '#8D44AD',
                    size: 38,
                  })}
                </span>
                <span className="text-2xl font-bold mb-2">{product.name}</span>
                <span
                  className="text-base font-normal text-black/80 md:text-white/80 text-center"
                  style={{ color: selected ? 'white' : '#222' }}
                >
                  {product.description}
                </span>
              </button>
            );
          })}
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-center mt-8 gap-4">
          <Button
            label="Voltar"
            className="border-2 border-[#8D44AD] text-[#8D44AD] bg-white rounded-full px-10 py-2 font-semibold transition hover:bg-[#f3eaff] hover:text-[#8D44AD] disabled:opacity-50 shadow-none"
            onClick={onBack}
            type="button"
          />
          <Button
            label="Próximo"
            className="bg-[#8D44AD] text-white rounded-full px-10 py-2 font-semibold shadow-none hover:bg-[#7d379c] transition disabled:opacity-50"
            onClick={onNext}
            type="button"
            disabled={selectedProducts.length === 0}
          />
        </div>
      </div>
    </Card>
  );
};