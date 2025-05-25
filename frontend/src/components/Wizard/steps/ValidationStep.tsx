import React, { useState, useEffect, memo } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import toast from 'react-hot-toast';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import Button from '../../Button/Button';
import Modal from '../../Modal/Modal';
import Confirmation from '../../Modal/Confirmation';
import { getVanTypes, type VanTypeData, getProducts, type ProductData } from '../../../services/api';

// Configuração do worker do PDF.js
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

interface BankData {
  id: number;
  name: string;
  // Add other bank properties as needed
}

interface CNABData {
  id: number;
  // Add CNAB properties as needed
}

interface ValidationStepProps {
  selectedProducts: string[];
  selectedVanTypes: string[];
  onBack: () => void;
  selectedBank: number | null;
  generatedLetterContents: { type: string, content: string, formData: any, bankInfo: BankData | undefined, productInfo: ProductData[], vanTypeInfo: VanTypeData[], cnabs: CNABData[], productName: string }[];
  onConfirmAndSend: () => Promise<void>;
  loadingConfirmAndSend: boolean;
}

interface LetterDisplayProps {
  data: {
    type: string;
    content: string;
    formData: any;
    bankInfo: BankData | undefined;
    productInfo: ProductData[];
    vanTypeInfo: VanTypeData[];
    cnabs: CNABData[];
    productName: string;
  };
}

const FinnetLetterDisplay: React.FC<LetterDisplayProps> = ({ data }) => {
  return (
    <div className="whitespace-pre-wrap text-sm text-gray-800">
      {data.content}
    </div>
  );
};

const NexxeraLetterDisplay: React.FC<LetterDisplayProps> = ({ data }) => {
  return (
    <div className="whitespace-pre-wrap text-sm text-gray-800">
      {data.content}
    </div>
  );
};

export const ValidationStep = memo(({
  selectedProducts,
  selectedVanTypes,
  onBack,
  selectedBank,
  generatedLetterContents,
  onConfirmAndSend,
  loadingConfirmAndSend,
}: ValidationStepProps) => {
  const [currentLetterIndex, setCurrentLetterIndex] = useState(0);
  const [loadingData, setLoadingData] = useState(true);
  const [loadingPdf, setLoadingPdf] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);
  const [vanTypes, setVanTypes] = useState<VanTypeData[]>([]);
  const [products, setProducts] = useState<ProductData[]>([]);
  const [dataError, setDataError] = useState<string | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);

  const filteredLetters = generatedLetterContents.filter(
    letter => letter.productInfo.some(p => p.id.toString() === selectedProduct)
  );

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleConfirm = async () => {
    setIsModalOpen(false);
    await onConfirmAndSend();
  };

  useEffect(() => {
    if (selectedBank) {
      setLoadingData(true);
      setDataError(null);
      Promise.all([
        getVanTypes(selectedBank.toString()),
        getProducts(selectedBank.toString()),
      ])
        .then(([vanTypesData, productsData]) => {
          setVanTypes(vanTypesData);
          setProducts(productsData);
          // Seleciona o primeiro produto por padrão (agora considera selectedProducts)
          if (selectedProducts.length > 0 && productsData.length > 0) {
            const firstSelectedProduct = productsData.find(p => p.id.toString() === selectedProducts[0]);
            if (firstSelectedProduct) {
              setSelectedProduct(firstSelectedProduct.id.toString());
            } else if (productsData.length > 0) {
              // Fallback: se o primeiro selectedProduct não for encontrado nos dados carregados, use o primeiro dos dados carregados
              setSelectedProduct(productsData[0].id.toString());
            }
          } else if (productsData.length > 0) {
             // Se não há produtos selecionados na etapa anterior, mas há produtos carregados, use o primeiro dos carregados
            setSelectedProduct(productsData[0].id.toString());
          }
        })
        .catch((error) => {
          console.error('Erro ao carregar dados para revisão:', error);
          setDataError('Erro ao carregar informações para revisão. Por favor, tente novamente.');
        })
        .finally(() => {
          setLoadingData(false);
        });
    } else {
      setVanTypes([]);
      setProducts([]);
      setLoadingData(false);
    }
  }, [selectedBank]);

  const handleGeneratePDF = async () => {
    setLoadingPdf(true);
    try {
      // TODO: Implementar chamada à API para gerar o PDF
      // Simulação temporária
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setPdfUrl('/sample.pdf');
      toast.success('PDF gerado com sucesso!');
    } catch (error) {
      console.error('Erro ao buscar bancos:', error);
      toast.error('Erro ao gerar o PDF. Tente novamente.');
    } finally {
      setLoadingPdf(false);
    }
  };

  const handleConfirmAndSend = async () => {
    setLoadingPdf(true);
    try {
      // TODO: Implementar chamada à API para criar ticket no Zendesk
      // TODO: Implementar envio de e-mail
      await new Promise((resolve) => setTimeout(resolve, 2000));
      toast.success('Carta enviada com sucesso!');
    } catch (error) {
      console.error('Erro ao enviar carta:', error);
      toast.error('Erro ao enviar a carta. Tente novamente.');
    } finally {
      setLoadingPdf(false);
    }
  };

  const handleNextLetter = () => {
    if (currentLetterIndex < filteredLetters.length - 1) {
      setCurrentLetterIndex(currentLetterIndex + 1);
    }
  };

  const handlePreviousLetter = () => {
    if (currentLetterIndex > 0) {
      setCurrentLetterIndex(currentLetterIndex - 1);
    }
  };

  const currentLetter = filteredLetters[currentLetterIndex];

  return (
    <>
      <h2 className="text-2xl font-semibold text-black mb-1">
        5. Revisar e Validar
      </h2>
      <p className="text-base text-gray-700 mb-6">
        Revise os dados preenchidos e o conteúdo da carta gerada antes de finalizar.
      </p>

      {/* Seletor de Produto */}
      {selectedProducts.length > 1 && (
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-black mb-3">Selecione o Produto:</h3>
          <div className="flex flex-wrap gap-3">
            {products
              .filter(product => selectedProducts.includes(product.id.toString()))
              .map((product) => (
                <button
                  key={product.id}
                  onClick={() => {
                    setSelectedProduct(product.id.toString());
                    setCurrentLetterIndex(0);
                  }}
                  className={`
                  px-4 py-2 rounded-full text-sm font-medium transition-colors
                  ${selectedProduct === product.id.toString()
                    ? 'bg-[#8D44AD] text-white'
                    : 'bg-white text-[#8D44AD] border-2 border-[#8D44AD] hover:bg-[#f3eaff]'
                  }
                `}
                >
                  {product.name}
                </button>
              ))}
          </div>
        </div>
      )}

      {/* Container principal para a carta e botões de navegação */}
      <div className="relative flex items-center justify-center mb-6">
        {/* Botão de Navegação Anterior */}
        {filteredLetters.length > 1 && (
          <Button
            type="button"
            className="absolute left-0 z-10 p-2 bg-white rounded-full shadow-md text-[#8D44AD] hover:bg-[#f3eaff] disabled:opacity-50 transition-colors duration-200 -translate-y-1/2 top-1/2"
            onClick={handlePreviousLetter}
            disabled={currentLetterIndex === 0}
            aria-label="Carta anterior"
          >
            <ChevronLeftIcon className="h-6 w-6" aria-hidden="true" />
          </Button>
        )}

        {currentLetter && (
          <div className="flex-grow max-w-full px-12 py-4">
            <h4 className="font-semibold text-black mb-2">
              Carta: {currentLetter.type} - {currentLetter.productName}
              {filteredLetters.length > 1 && 
                ` (${currentLetterIndex + 1} de ${filteredLetters.length})`
              }
            </h4>
            {currentLetter.type === 'Finnet' && (
              <FinnetLetterDisplay data={currentLetter} />
            )}
            {currentLetter.type === 'Nexxera' && (
              <NexxeraLetterDisplay data={currentLetter} />
            )}
            {!['Finnet', 'Nexxera'].includes(currentLetter.type) && (
              <div className="whitespace-pre-wrap text-sm text-gray-800">
                {currentLetter.content}
              </div>
            )}
          </div>
        )}

        {/* Botão de Navegação Próximo */}
        {filteredLetters.length > 1 && (
          <Button
            type="button"
            className="absolute right-0 z-10 p-2 bg-white rounded-full shadow-md text-[#8D44AD] hover:bg-[#f3eaff] disabled:opacity-50 transition-colors duration-200 -translate-y-1/2 top-1/2"
            onClick={handleNextLetter}
            disabled={currentLetterIndex === filteredLetters.length - 1}
            aria-label="Próxima carta"
          >
            <ChevronRightIcon className="h-6 w-6" aria-hidden="true" />
          </Button>
        )}
      </div>

      {loadingData ? (
        <div className="w-full h-full flex items-center justify-center">
          <p className="text-gray-600">Carregando informações para revisão...</p>
        </div>
      ) : dataError ? (
        <div className="w-full h-full flex flex-col items-center justify-center">
          <p className="text-red-600 mb-4">{dataError}</p>
          <button
            onClick={() => {
              if (selectedBank) {
                setLoadingData(true);
                setDataError(null);
                Promise.all([
                  getVanTypes(selectedBank.toString()),
                  getProducts(selectedBank.toString()),
                ])
                  .then(([vanTypesData, productsData]) => {
                    setVanTypes(vanTypesData);
                    setProducts(productsData);
                  })
                  .catch((error) => {
                    console.error('Erro ao carregar dados para revisão:', error);
                    setDataError('Erro ao carregar informações para revisão. Por favor, tente novamente.');
                  })
                  .finally(() => {
                    setLoadingData(false);
                  });
              }
            }}
            className="text-[#8D44AD] hover:text-[#7d379c] font-medium"
          >
            Tentar novamente
          </button>
        </div>
      ) : (
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-black mb-2">Produtos Selecionados</h3>
            <div className="space-y-2">
              {selectedProducts.length === 0 ? (
                <p className="text-gray-600">Nenhum produto selecionado.</p>
              ) : (
                selectedProducts.map((productId) => {
                  const product = products.find(p => p.id.toString() === productId);
                  return (
                    <div key={productId} className="flex items-center">
                      <span className="w-2 h-2 bg-[#8D44AD] rounded-full mr-2"></span>
                      <span className="text-gray-700">{product?.name || 'Produto desconhecido'}</span>
                    </div>
                  );
                })
              )}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-black mb-2">Tipos de VAN Selecionados</h3>
            <div className="space-y-2">
              {selectedVanTypes.length === 0 ? (
                <p className="text-gray-600">Nenhum tipo de VAN selecionado.</p>
              ) : (
                selectedVanTypes.map((vanTypeId) => {
                  const vanType = vanTypes.find(vt => vt.id.toString() === vanTypeId);
                  return (
                    <div key={vanTypeId} className="flex items-center">
                      <span className="w-2 h-2 bg-[#8D44AD] rounded-full mr-2"></span>
                      <span className="text-gray-700">{vanType?.type || 'Tipo de VAN desconhecido'}</span>
                    </div>
                  );
                })
              )}
            </div>
          </div>
        </div>
      )}

      {/* Botões de Ação */}
      <div className="flex justify-between items-center mt-8">
        <Button
          type="button"
          className="border-2 border-[#8D44AD] text-[#8D44AD] bg-white rounded-full px-10 py-2 font-semibold transition hover:bg-[#f3eaff] hover:text-[#8D44AD] disabled:opacity-50 shadow-none"
          onClick={onBack}
          disabled={loadingData}
        >
          Voltar
        </Button>

        {/* Botão Confirmar e Enviar Carta */}
        <Button
          type="button"
          className="bg-[#8D44AD] text-white rounded-full px-10 py-2 font-semibold shadow-md hover:bg-[#7d379c] transition disabled:opacity-50"
          onClick={handleGeneratePDF}
          disabled={loadingData || loadingPdf || selectedProducts.length === 0 || selectedVanTypes.length === 0}
        >
          {loadingConfirmAndSend ? 'Enviando...' : 'Confirmar e Enviar Carta'}
        </Button>

        <Modal isOpen={isModalOpen} onClose={handleCancel}>
                <Confirmation
                    onConfirm={handleConfirm}
                    onCancel={handleCancel}
                />
            </Modal>
      </div>
    </>
  );
}); 