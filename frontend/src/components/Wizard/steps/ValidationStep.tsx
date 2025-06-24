import React, { useState, useEffect, memo, useMemo } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import toast from "react-hot-toast";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import Button from "../../Button/Button";
import Modal from "../../Modal/Modal";
import Confirmation from "../../Modal/Confirmation";
import type { VanTypeData, ProductData, CNABData, BankData } from "../../../services/api";
import { FinnetLetterDisplay } from "../letters/FinnetLetterDisplay";
import { NexxeraLetterDisplay } from "../letters/NexxeraLetterDisplay";
import ValidationStepSkeleton from "../../Skeleton/ValidationStepSkeleton";
import { getPDFStatus } from '../../../services/api';

// Configuração do worker do PDF.js
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

// Componente otimizado para visualização de PDF
const PDFViewer = memo(({ blob, filename }: { blob: Blob; filename: string }) => {
  const [url, setUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (blob) {
      const objectUrl = URL.createObjectURL(blob);
      setUrl(objectUrl);
      setLoading(false);

      // Cleanup function
      return () => {
        URL.revokeObjectURL(objectUrl);
      };
    }
  }, [blob]);

  if (loading) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#8D44AD]"></div>
        <span className="ml-2 text-gray-600">Carregando PDF...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center p-8 text-red-600">
        <p>Erro ao carregar PDF: {error}</p>
      </div>
    );
  }

  if (!url) {
    return (
      <div className="text-center p-8 text-gray-600">
        <p>PDF não disponível</p>
      </div>
    );
  }

  return (
    <div className="border border-gray-300 rounded-lg overflow-hidden bg-white">
      <iframe
        src={url}
        className="w-full h-96"
        title={filename}
        onLoad={() => setLoading(false)}
        onError={() => {
          setError('Erro ao carregar PDF');
          setLoading(false);
        }}
      />
    </div>
  );
});

interface ValidationStepProps {
  selectedProducts: string[];
  selectedVanTypes: string[];
  onBack: () => void;
  selectedBank: number | null;
  generatedLetterContents: {
    type: string;
    content: string;
    formData: any;
    bankInfo: BankData | undefined;
    productInfo: ProductData[];
    vanTypeInfo: VanTypeData[];
    cnabs: CNABData[];
    productName: string;
  }[];
  pdfData?: Array<{ filename: string; blob: Blob }>;
  onConfirmAndSend: () => Promise<void>;
  loadingConfirmAndSend: boolean;
  loadingPdfs?: boolean;
  products: ProductData[];
  vanTypes: VanTypeData[];
  cnabs: CNABData[];
  banks: BankData[];
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

export const ValidationStep = memo(
  ({
    selectedProducts,
    selectedVanTypes,
    onBack,
    selectedBank,
    generatedLetterContents,
    pdfData = [],
    onConfirmAndSend,
    loadingConfirmAndSend,
    loadingPdfs = false,
    products,
    vanTypes,
    cnabs,
    banks,
  }: ValidationStepProps) => {
    const [currentLetterIndex, setCurrentLetterIndex] = useState(0);
    const [loadingPdf, setLoadingPdf] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [pdfUrl, setPdfUrl] = useState<string | null>(null);
    const [selectedProduct, setSelectedProduct] = useState<string | null>(null);
    const [internalLoadingConfirmAndSend, setInternalLoadingConfirmAndSend] =
      useState(false);
    
    // Novos estados para o fluxo de PDF
    const [pdfGenerationId, setPdfGenerationId] = useState<string | null>(null);
    const [pdfStatus, setPdfStatus] = useState<string>('pending');
    const [pdfBlobs, setPdfBlobs] = useState<Array<{ filename: string; blob: Blob }>>([]);
    const [statusError, setStatusError] = useState<string | null>(null);

    // Recuperar o ID do localStorage e iniciar polling
    useEffect(() => {
      const savedId = localStorage.getItem('pdfGenerationId');
      if (savedId) {
        setPdfGenerationId(savedId);
        checkPDFStatus(savedId);
      }
    }, []);

    // Função para verificar o status dos PDFs
    const checkPDFStatus = async (id: string) => {
      try {
        setLoadingPdf(true);
        setStatusError(null);
        
        console.log('Verificando status para ID:', id);
        const response = await getPDFStatus(id);
        console.log('Resposta do status:', response);
        
        setPdfStatus(response.status);
        
        if ((response.status === 'ready' || response.status === 'done') && response.pdfs && response.pdfs.length > 0) {
          console.log('PDFs prontos:', response.pdfs);
          // Converter base64 para Blob
          const blobs = response.pdfs.map(pdf => {
            try {
              console.log('Processando PDF:', pdf.filename);
              const binaryString = atob(pdf.data);
              const bytes = new Uint8Array(binaryString.length);
              for (let i = 0; i < binaryString.length; i++) {
                bytes[i] = binaryString.charCodeAt(i);
              }
              const blob = new Blob([bytes], { type: 'application/pdf' });
              console.log('Blob criado para:', pdf.filename, 'tamanho:', blob.size);
              return {
                filename: pdf.filename,
                blob: blob
              };
            } catch (error) {
              console.error('Erro ao converter PDF:', pdf.filename, error);
              throw new Error(`Erro ao processar PDF ${pdf.filename}`);
            }
          });
          console.log('Blobs criados:', blobs);
          setPdfBlobs(blobs);
          setLoadingPdf(false);
          toast.success('PDFs prontos para visualização!');
        } else if (response.status === 'pending' || response.status === 'processing') {
          console.log('Status ainda pendente/processando, continuando polling...');
          // Continuar polling
          setTimeout(() => checkPDFStatus(id), 2000);
        } else {
          console.log('Status desconhecido:', response.status);
          setStatusError('Status desconhecido: ' + response.status);
          setLoadingPdf(false);
        }
      } catch (error) {
        console.error('Erro ao verificar status:', error);
        setStatusError('Erro ao verificar status dos PDFs');
        setLoadingPdf(false);
      }
    };

    // Filtrar PDFs baseado no produto selecionado
    const filteredPdfs = pdfBlobs.filter((pdf) => {
      const filename = pdf.filename.toLowerCase();
      if (!selectedProduct) return true;
      
      // Extrair o ID do produto do nome do arquivo
      const productMatch = filename.match(/produto_(\d+)/);
      if (productMatch) {
        const productId = productMatch[1];
        return productId === selectedProduct;
      }
      return true;
    });

    console.log('PDFs filtrados:', filteredPdfs);
    console.log('PDF atual:', filteredPdfs[currentLetterIndex]);
    console.log('Status atual:', pdfStatus);
    console.log('Loading PDF:', loadingPdf);

    const filteredLetters = generatedLetterContents.filter((letter) =>
      letter.productInfo.some((p) => p.id.toString() === selectedProduct)
    );

    const handleCancel = () => {
      setIsModalOpen(false);
    };

    const handleConfirm = async () => {
      setIsModalOpen(false);
      try {
        await onConfirmAndSend(); 
      } catch (error) {
        console.error("Erro ao enviar carta:", error);
        toast.error("Erro ao enviar a carta. Tente novamente.");
      }
    };

    useEffect(() => {
      // Seleciona o primeiro produto por padrão
      if (selectedProducts.length > 0 && products.length > 0) {
        const firstSelectedProduct = products.find(
          (p) => p.id.toString() === selectedProducts[0]
        );
        if (firstSelectedProduct) {
          setSelectedProduct(firstSelectedProduct.id.toString());
        } else if (products.length > 0) {
          setSelectedProduct(products[0].id.toString());
        }
      } else if (products.length > 0) {
        setSelectedProduct(products[0].id.toString());
      }
    }, [selectedProducts, products]);

    const handleGeneratePDF = async () => {
      setLoadingPdf(true);
      try {
        // TODO: Implementar chamada à API para gerar o PDF
        // Simulação temporária
        await new Promise((resolve) => setTimeout(resolve, 2000));
        setPdfUrl("/sample.pdf");
        toast.success("PDF gerado com sucesso!");
      } catch (error) {
        console.error("Erro ao buscar bancos:", error);
        toast.error("Erro ao gerar o PDF. Tente novamente.");
      } finally {
        setLoadingPdf(false);
      }
    };

    const handleConfirmAndSend = async () => {
      setInternalLoadingConfirmAndSend(true);
      try {
        // TODO: Implementar chamada à API para criar ticket no Zendesk
        // TODO: Implementar envio de e-mail
        await new Promise((resolve) => setTimeout(resolve, 2000));
        toast.success("Carta enviada com sucesso!");
      } catch (error) {
        console.error("Erro ao enviar carta:", error);
        toast.error("Erro ao enviar a carta. Tente novamente.");
      } finally {
        setInternalLoadingConfirmAndSend(false);
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
    const currentPdf = filteredPdfs[currentLetterIndex];

    // Renderiza o esqueleto se estiver carregando dados
    if (!products.length && !vanTypes.length) {
      return <ValidationStepSkeleton />;
    }

    // Renderiza mensagem de erro se não houver dados
    if (!products.length && !vanTypes.length) {
      return (
        <div className="w-full h-full flex flex-col items-center justify-center">
          <p className="text-red-600 mb-4">
            Erro ao carregar informações para revisão. Por favor, tente novamente.
          </p>
        </div>
      );
    }

    return (
      <>
        <h2 className="text-2xl font-semibold text-black mb-1">
          5. Revisar e Validar
        </h2>
        <p className="text-base text-gray-700 mb-6">
          Revise os dados preenchidos e o conteúdo da carta gerada antes de
          finalizar.
        </p>

        {/* Status da geração de PDFs */}
        {pdfGenerationId && (
          <div className="mb-6 p-4 bg-gray-100 rounded-lg">
            <h4 className="font-semibold text-black mb-2">Status da Geração:</h4>
            {statusError ? (
              <p className="text-red-600">{statusError}</p>
            ) : pdfStatus === 'pending' ? (
              <div className="flex items-center">
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-[#8D44AD] mr-2"></div>
                <span className="text-gray-700">Gerando PDFs...</span>
              </div>
            ) : pdfStatus === 'ready' ? (
              <p className="text-green-600">PDFs prontos!</p>
            ) : (
              <p className="text-gray-700">Status: {pdfStatus}</p>
            )}
          </div>
        )}

        {/* Seletor de Produto */}
        {selectedProducts.length > 1 && products.length > 0 && (
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-black mb-3">
              Selecione o Produto:
            </h3>
            <div className="flex flex-wrap gap-3">
              {products
                .filter((product) =>
                  selectedProducts.includes(product.id.toString())
                )
                .map((product) => (
                  <button
                    key={product.id}
                    onClick={() => {
                      setSelectedProduct(product.id.toString());
                      setCurrentLetterIndex(0);
                    }}
                    className={`
                  px-4 py-2 rounded-full text-sm font-medium transition-colors
                  ${
                    selectedProduct === product.id.toString()
                      ? "bg-[#8D44AD] text-white"
                      : "bg-white text-[#8D44AD] border-2 border-[#8D44AD] hover:bg-[#f3eaff]"
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
          {(filteredPdfs.length > 1 || filteredLetters.length > 1) && (
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

          {/* Exibir PDF se disponível, senão exibir carta tradicional */}
          <div className="flex-grow max-w-full px-12 py-4">
            {loadingPdf ? (
              <div className="flex items-center justify-center p-8">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#8D44AD]"></div>
                <span className="ml-2 text-gray-600">Verificando status dos PDFs...</span>
              </div>
            ) : currentPdf ? (
              <div>
                <h4 className="font-semibold text-black mb-2">
                  PDF: {currentPdf.filename}
                  {(filteredPdfs.length > 1) &&
                    ` (${currentLetterIndex + 1} de ${filteredPdfs.length})`}
                </h4>
                <PDFViewer blob={currentPdf.blob} filename={currentPdf.filename} />
              </div>
            ) : currentLetter ? (
              <div>
                <h4 className="font-semibold text-black mb-2">
                  Carta: {currentLetter.type} - {currentLetter.productName}
                  {filteredLetters.length > 1 &&
                    ` (${currentLetterIndex + 1} de ${filteredLetters.length})`}
                </h4>
                {currentLetter.type === "Finnet" && (
                  <FinnetLetterDisplay data={currentLetter} />
                )}
                {currentLetter.type === "Nexxera" && (
                  <NexxeraLetterDisplay data={currentLetter} />
                )}
                {!["Finnet", "Nexxera"].includes(currentLetter.type) && (
                  <div className="whitespace-pre-wrap text-sm text-gray-800">
                    {currentLetter.content}
                  </div>
                )}
              </div>
            ) : (
              <div className="text-center p-8 text-gray-600">
                Nenhum documento disponível para visualização.
              </div>
            )}
          </div>

          {/* Botão de Navegação Próximo */}
          {(filteredPdfs.length > 1 || filteredLetters.length > 1) && (
            <Button
              type="button"
              className="absolute right-0 z-10 p-2 bg-white rounded-full shadow-md text-[#8D44AD] hover:bg-[#f3eaff] disabled:opacity-50 transition-colors duration-200 -translate-y-1/2 top-1/2"
              onClick={handleNextLetter}
              disabled={currentLetterIndex === (filteredPdfs.length > 0 ? filteredPdfs.length - 1 : filteredLetters.length - 1)}
              aria-label="Próxima carta"
            >
              <ChevronRightIcon className="h-6 w-6" aria-hidden="true" />
            </Button>
          )}
        </div>

        {/* Botões de Ação */}
        <div className="flex justify-between items-center mt-8">
          <Button
            type="button"
            className="border-2 border-[#8D44AD] text-[#8D44AD] bg-white rounded-full px-10 py-2 font-semibold transition hover:bg-[#f3eaff] hover:text-[#8D44AD] disabled:opacity-50 shadow-none"
            onClick={onBack}
            disabled={loadingPdf || loadingConfirmAndSend || loadingPdfs}
          >
            Voltar
          </Button>

          {/* Botão Confirmar e Enviar Carta */}
          <Button
            type="button"
            className="bg-[#8D44AD] text-white rounded-full px-10 py-2 font-semibold shadow-md hover:bg-[#7d379c] transition disabled:opacity-50"
            onClick={() => setIsModalOpen(true)}
            disabled={
              loadingPdf ||
              loadingConfirmAndSend ||
              loadingPdfs ||
              selectedProducts.length === 0 ||
              selectedVanTypes.length === 0 ||
              (filteredLetters.length === 0 && filteredPdfs.length === 0)
            }
            title={
              selectedProducts.length === 0 || selectedVanTypes.length === 0
                ? "Selecione produtos e tipos de VAN para continuar."
                : (filteredLetters.length === 0 && filteredPdfs.length === 0)
                ? "Nenhuma carta gerada para os produtos e tipos de VAN selecionados."
                : ""
            }
          >
            {loadingConfirmAndSend ? "Enviando..." : "Confirmar e Enviar Carta"}
          </Button>
        </div>

        <Modal isOpen={isModalOpen} onClose={handleCancel}>
          <Confirmation
            title="Confirmar Envio"
            message="Tem certeza que deseja enviar as cartas de VAN?"
            onConfirm={handleConfirm}
            onCancel={handleCancel}
            loading={loadingConfirmAndSend || internalLoadingConfirmAndSend}
          />
        </Modal>
      </>
    );
  }
);
