import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import toast from 'react-hot-toast';

// Configuração do worker do PDF.js
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

interface BankData {
  id: number;
  name: string;
  code: string;
}

interface CNABData {
  id: number;
  code: string;
  name: string;
  available: boolean;
}

interface ValidationStepProps {
  selectedProducts: string[];
  onBack: () => void;
}

export const ValidationStep: React.FC<ValidationStepProps> = ({
  selectedProducts,
  onBack,
}) => {
  const [currentProductIndex, setCurrentProductIndex] = useState(0);
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleGeneratePDF = async () => {
    setLoading(true);
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
      setLoading(false);
    }
  };

  const handleConfirmAndSend = async () => {
    setLoading(true);
    try {
      // TODO: Implementar chamada à API para criar ticket no Zendesk
      // TODO: Implementar envio de e-mail
      await new Promise((resolve) => setTimeout(resolve, 2000));
      toast.success('Carta enviada com sucesso!');
   
    } catch (error) {
      console.error('Erro ao enviar carta:', error);
      toast.error('Erro ao enviar a carta. Tente novamente.');
    } finally {
      setLoading(false);
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
    <div className="space-y-6">
      <div>
        <h2 className="text-lg font-medium text-gray-900">
          Validação da Carta - {currentProduct}
        </h2>
        <p className="mt-1 text-sm text-gray-500">
          Revise as informações da carta antes de confirmar o envio
        </p>
      </div>

      <div className="bg-white shadow sm:rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          {!pdfUrl ? (
            <div className="text-center">
              <button
                type="button"
                className="btn-primary"
                onClick={handleGeneratePDF}
                disabled={loading}
              >
                {loading ? 'Gerando PDF...' : 'Gerar PDF'}
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="aspect-[3/4] w-full overflow-hidden rounded-lg border border-gray-200">
                <Document file={pdfUrl}>
                  <Page pageNumber={1} width={600} />
                </Document>
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

      {/* Se não estiver carregando e não houver erro, exibe as listas de produtos e VANs
      {!loadingData && !dataError && (
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-black mb-2">Produtos Selecionados</h3>
            <div className="space-y-2">
              {selectedProducts.length === 0 ? (
                <p className="text-gray-600">Nenhum produto selecionado.</p>
              ) : (
                products.length === 0 ? (
                  <p className="text-gray-600">Carregando produtos selecionados...</p>
                ) : (
                  selectedProducts.map((productId) => {
                    const product = products.find(p => p.id.toString() === productId);
                    return product ? (
                      <div key={productId} className="flex items-center">
                        <span className="w-2 h-2 bg-[#8D44AD] rounded-full mr-2"></span>
                        <span className="text-gray-700">{product.name}</span>
                      </div>
                    ) : null;
                  })
                )
              )}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-black mb-2">Tipos de VAN Selecionados</h3>
            <div className="space-y-2">
              {selectedVanTypes.length === 0 ? (
                <p className="text-gray-600">Nenhum tipo de VAN selecionado.</p>
              ) : (
                vanTypes.length === 0 ? (
                   <p className="text-gray-600">Carregando tipos de VAN selecionados...</p>
                ) : (
                  selectedVanTypes.map((vanTypeId) => {
                    const vanType = vanTypes.find(vt => vt.id.toString() === vanTypeId);
                    return vanType ? (
                      <div key={vanTypeId} className="flex items-center">
                        <span className="w-2 h-2 bg-[#8D44AD] rounded-full mr-2"></span>
                        <span className="text-gray-700">{vanType.type}</span>
                      </div>
                    ) : null;
                  })
                )
              )}
            </div>
          </div>
        </div>
      )} */}

      <div className="flex justify-between">
        <button
          type="button"
          className="btn-secondary"
          onClick={onBack}
          disabled={loading}
        >
          Voltar
        </button>
        <button
          type="button"
          className="btn-primary"
          onClick={handleConfirmAndSend}
          disabled={!pdfUrl || loading}
        >
          {loading ? 'Enviando...' : 'Confirmar e Enviar Carta'}
        </button>
      </div>
    </div>
  );
}; 