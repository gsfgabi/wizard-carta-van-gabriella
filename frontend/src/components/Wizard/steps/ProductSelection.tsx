import React from 'react';

interface ProductSelectionProps {
  selectedProducts: string[];
  onSelect: (products: string[]) => void;
  onNext: () => void;
  onBack: () => void;
}

const AVAILABLE_PRODUCTS = [
  { id: 'boletos', name: 'Boletos' },
  { id: 'pagamentos', name: 'Pagamentos' },
  { id: 'extrato', name: 'Extrato' },
  { id: 'dda', name: 'DDA' },
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
    <div className="w-full max-w-5xl mx-auto px-2">
      <h2 className="text-2xl font-bold mb-2 text-black text-left">
        2. Selecione os Produtos
      </h2>
      <p className="text-base text-black mb-6 text-left">
        Escolha os produtos que deseja incluir na Carta de VAN
      </p>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 mb-12">
        {AVAILABLE_PRODUCTS.map((product) => (
          <div
            key={product.id}
            className={`relative flex cursor-pointer rounded-lg border-2 p-6 shadow-md transition focus:outline-none items-center min-h-[72px] text-lg font-medium
              ${selectedProducts.includes(product.id)
                ? 'border-[#8D44AD] bg-[#f3eaff] text-[#8D44AD]'
                : 'border-[#E0E0E0] bg-white text-black hover:border-[#8D44AD]'}
            `}
            onClick={() => handleProductToggle(product.id)}
          >
            <span className="flex-1 text-left">{product.name}</span>
            <span className={`ml-4 flex items-center justify-center w-7 h-7 rounded-full border-2 ${selectedProducts.includes(product.id) ? 'border-[#8D44AD] bg-[#8D44AD] text-white' : 'border-[#E0E0E0] bg-white text-[#E0E0E0]'}`}>
              <svg
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </div>
        ))}
      </div>
      <div className="flex justify-between items-center mt-8">
        <button
          type="button"
          className="border-2 border-[#8D44AD] text-[#8D44AD] bg-white rounded-full px-10 py-2 font-semibold transition hover:bg-[#f3eaff] hover:text-[#8D44AD] disabled:opacity-50 shadow-none"
          onClick={onBack}
        >
          Voltar
        </button>
        <button
          type="button"
          className="bg-[#8D44AD] text-white rounded-full px-10 py-2 font-semibold shadow-md hover:bg-[#7d379c] transition disabled:opacity-50"
          onClick={onNext}
          disabled={selectedProducts.length === 0}
        >
          Próximo
        </button>
      </div>
    </div>
  );
}; 