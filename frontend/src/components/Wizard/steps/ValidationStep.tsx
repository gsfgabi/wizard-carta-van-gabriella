import React, { useState, useEffect, memo } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import toast from 'react-hot-toast';
import Button from '../../Button/Button';
import { getVanTypes, type VanTypeData, getProducts, type ProductData } from '../../../services/api';

// Configuração do worker do PDF.js
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

interface ValidationStepProps {
  selectedProducts: string[];
  selectedVanTypes: string[];
  onBack: () => void;
  selectedBank: number | null;
}

export const ValidationStep = memo(({
  selectedProducts,
  selectedVanTypes,
  onBack,
  selectedBank,
}: ValidationStepProps) => {
  const [currentProductIndex, setCurrentProductIndex] = useState(0);
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);
  const [loadingPdf, setLoadingPdf] = useState(false);
  const [loadingData, setLoadingData] = useState(true);
  const [vanTypes, setVanTypes] = useState<VanTypeData[]>([]);
  const [products, setProducts] = useState<ProductData[]>([]);
  const [dataError, setDataError] = useState<string | null>(null);

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

  const handleNextProduct = () => {
    if (currentProductIndex < selectedProducts.length - 1) {
      setCurrentProductIndex(currentProductIndex + 1);
    }
  };

  const handlePreviousProduct = () => {
    if (currentProductIndex > 0) {
      setCurrentProductIndex(currentProductIndex - 1);
    }
  };

  const currentProduct = selectedProducts[currentProductIndex];

  return (
    <>
      <h2 className="text-2xl font-semibold text-black mb-1">
        5. Revisar informações
      </h2>
      <p className="text-base text-gray-700 mb-6">
        Por favor, revise as informações antes de prosseguir.
      </p>

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

      <div className="flex justify-between items-center mt-8">
        <Button
          type="button"
          className="border-2 border-[#8D44AD] text-[#8D44AD] bg-white rounded-full px-10 py-2 font-semibold transition hover:bg-[#f3eaff] hover:text-[#8D44AD] disabled:opacity-50 shadow-none"
          onClick={onBack}
          disabled={loadingData || loadingPdf}
        >
          Voltar
        </Button>
        <Button
          type="button"
          className="bg-[#8D44AD] text-white rounded-full px-10 py-2 font-semibold shadow-md hover:bg-[#7d379c] transition disabled:opacity-50"
          onClick={handleGeneratePDF}
          disabled={loadingData || loadingPdf || selectedProducts.length === 0 || selectedVanTypes.length === 0}
        >
          {loadingPdf ? 'Gerando...' : 'Gerar Cartas'}
        </Button>
      </div>
    </>
  );
}); 