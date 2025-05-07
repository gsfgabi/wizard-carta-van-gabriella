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
    <div className="space-y-6">
      <div>
        <h2 className="text-lg font-medium text-gray-900">
          Selecione os Produtos
        </h2>
        <p className="mt-1 text-sm text-gray-500">
          Escolha os produtos que deseja incluir na Carta de VAN
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {AVAILABLE_PRODUCTS.map((product) => (
          <div
            key={product.id}
            className={`relative flex cursor-pointer rounded-lg border p-4 shadow-sm focus:outline-none ${
              selectedProducts.includes(product.id)
                ? 'border-primary-500 bg-primary-50'
                : 'border-gray-300 bg-white'
            }`}
            onClick={() => handleProductToggle(product.id)}
          >
            <div className="flex flex-1">
              <div className="flex flex-col">
                <span
                  className={`block text-sm font-medium ${
                    selectedProducts.includes(product.id)
                      ? 'text-primary-900'
                      : 'text-gray-900'
                  }`}
                >
                  {product.name}
                </span>
              </div>
            </div>
            <div
              className={`ml-3 flex h-5 items-center ${
                selectedProducts.includes(product.id)
                  ? 'text-primary-600'
                  : 'text-gray-300'
              }`}
            >
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
            </div>
          </div>
        ))}
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
          type="button"
          className="btn-primary"
          onClick={onNext}
          disabled={selectedProducts.length === 0}
        >
          Próximo
        </button>
      </div>
    </div>
  );
}; 