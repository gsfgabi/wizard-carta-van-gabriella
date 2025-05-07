import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import toast from 'react-hot-toast';

// Configuração do worker do PDF.js
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

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

              {selectedProducts.length > 1 && (
                <div className="flex justify-between">
                  <button
                    type="button"
                    className="btn-secondary"
                    onClick={handlePreviousProduct}
                    disabled={currentProductIndex === 0}
                  >
                    Anterior
                  </button>
                  <button
                    type="button"
                    className="btn-secondary"
                    onClick={handleNextProduct}
                    disabled={currentProductIndex === selectedProducts.length - 1}
                  >
                    Próximo
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

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