import React, { useState, useEffect, memo, useMemo, useRef } from "react";
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
import { getPDFStatus, submitReport } from '../../../services/api';
import pdfWorker from 'pdfjs-dist/build/pdf.worker.min?url';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import Card from "../../Card/Card";

// Configuração do worker do PDF.js
pdfjs.GlobalWorkerOptions.workerSrc = pdfWorker;

// Componente otimizado para visualização de PDF
const PDFViewer = memo(({ blob, filename }: { blob: Blob; filename: string }) => {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(320);

  useEffect(() => {
    function updateWidth() {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    }
    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  return (
    <div className="flex flex-col items-center w-full">
      <div
        ref={containerRef}
        className="w-full flex justify-center bg-[#f8f7fa] rounded-lg p-2 sm:p-4 mb-4 overflow-x-auto"
        style={{ minHeight: 320 }}
      >
        <Document
          file={blob}
          onLoadSuccess={({ numPages }) => setNumPages(numPages)}
          loading={<div className="p-8 text-gray-600">Carregando PDF...</div>}
          error={<div className="p-8 text-red-600">Erro ao carregar PDF</div>}
          className="w-full flex justify-center"
        >
          <Page
            pageNumber={pageNumber}
            width={Math.min(800, containerWidth - 16)}
          />
        </Document>
      </div>
      {numPages && numPages > 1 && (
        <div className="flex items-center justify-center gap-4 mt-2 mb-4">
          <button
            onClick={() => setPageNumber((p) => Math.max(p - 1, 1))}
            disabled={pageNumber <= 1}
            className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50 font-medium"
          >
            Anterior
          </button>
          <span className="text-base text-gray-700 font-semibold">
            Página {pageNumber} de {numPages}
          </span>
          <button
            onClick={() => setPageNumber((p) => Math.min(p + 1, numPages))}
            disabled={pageNumber >= numPages}
            className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50 font-medium"
          >
            Próxima
          </button>
        </div>
      )}
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
  formData: any;
  pdfGenerationId: string | null;
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
    formData,
    pdfGenerationId,
  }: ValidationStepProps) => {
    const [currentLetterIndex, setCurrentLetterIndex] = useState(0);
    const [loadingPdf, setLoadingPdf] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [pdfUrl, setPdfUrl] = useState<string | null>(null);
    const [selectedProduct, setSelectedProduct] = useState<string | null>(null);
    const [internalLoadingConfirmAndSend, setInternalLoadingConfirmAndSend] =
      useState(false);
    
    // Novos estados para o fluxo de PDF
    const [pdfStatus, setPdfStatus] = useState<string>('pending');
    const [pdfBlobs, setPdfBlobs] = useState<Array<{ filename: string; blob: Blob }>>([]);
    const [statusError, setStatusError] = useState<string | null>(null);

    // Recuperar o ID do localStorage e iniciar polling
    useEffect(() => {
      if (pdfGenerationId) {
        checkPDFStatus(pdfGenerationId);
      }
    }, [pdfGenerationId]);

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
      
      // Se não há produto selecionado, mostrar todos os PDFs
      if (!selectedProduct) return true;
      
      // Extrair o ID do produto do nome do arquivo
      const productMatch = filename.match(/produto_(\d+)/);
      if (productMatch) {
        const productId = productMatch[1];
        return productId === selectedProduct;
      }
      
      // Se não conseguir extrair o ID do produto, incluir o PDF
      // (pode ser um PDF geral ou com formato diferente)
      return true;
    });

    console.log('Todos os PDFs:', pdfBlobs);
    console.log('PDFs filtrados para produto', selectedProduct, ':', filteredPdfs);

    const filteredLetters = generatedLetterContents.filter((letter) =>
      letter.productInfo.some((p) => p.id.toString() === selectedProduct)
    );

    // Determinar se deve mostrar navegação
    const shouldShowNavigation = filteredPdfs.length > 1 || filteredLetters.length > 1;
    const totalDocuments = filteredPdfs.length > 0 ? filteredPdfs.length : filteredLetters.length;

    // Resetar o índice quando o produto muda ou quando há PDFs disponíveis
    useEffect(() => {
      setCurrentLetterIndex(0);
    }, [selectedProduct, filteredPdfs.length]);

    // Resetar o índice quando não há documentos disponíveis
    useEffect(() => {
      if (currentLetterIndex >= totalDocuments && totalDocuments > 0) {
        setCurrentLetterIndex(0);
      }
    }, [filteredPdfs.length, filteredLetters.length, currentLetterIndex, totalDocuments]);

    // Garantir que o índice não exceda o número de documentos
    const safeCurrentLetterIndex = Math.min(currentLetterIndex, totalDocuments - 1);
    const currentLetter = filteredLetters[safeCurrentLetterIndex];
    const currentPdf = filteredPdfs[safeCurrentLetterIndex];

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

    const handleNextLetter = () => {
      // Determinar qual array usar para navegação (PDFs têm prioridade)
      const maxIndex = filteredPdfs.length > 0 ? filteredPdfs.length - 1 : filteredLetters.length - 1;
      if (currentLetterIndex < maxIndex) {
        setCurrentLetterIndex(currentLetterIndex + 1);
      }
    };

    const handlePreviousLetter = () => {
      if (currentLetterIndex > 0) {
        setCurrentLetterIndex(currentLetterIndex - 1);
      }
    };

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
        {/* <h2 className="text-2xl font-semibold text-black mb-1">
          5. Revisar e Validar
        </h2> */}
        <p className="text-sm xs:text-base text-gray-700 mb-4 xs:mb-6">
          Revise os dados preenchidos e o conteúdo da carta gerada antes de
          finalizar.
        </p>

        {/* Status da geração de PDFs */}
        {pdfGenerationId && (
          <div className="mb-4 xs:mb-6 p-3 xs:p-4 bg-gray-100 rounded-lg">
            <h4 className="font-semibold text-black mb-1 xs:mb-2 text-sm xs:text-base">Status da Geração:</h4>
            {statusError ? (
              <p className="text-red-600 text-sm xs:text-base">{statusError}</p>
            ) : pdfStatus === 'pending' ? (
              <div className="flex items-center">
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-[#8D44AD] mr-2"></div>
                <span className="text-gray-700 text-sm xs:text-base">Gerando PDFs...</span>
              </div>
            ) : pdfStatus === 'done' ? (
              <p className="text-green-600 text-sm xs:text-base">PDFs prontos!</p>
            ) : (
              <p className="text-gray-700 text-sm xs:text-base">Status: {pdfStatus}</p>
            )}
          </div>
        )}

        {/* Seletor de Produto */}
        {selectedProducts.length > 1 && products.length > 0 && (
          <div className="mb-4 xs:mb-6">
            <h3 className="text-base xs:text-lg font-semibold text-black mb-2 xs:mb-3">
              Selecione o Produto:
            </h3>
            <div className="flex flex-wrap gap-2 xs:gap-3">
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
                  px-3 xs:px-4 py-1.5 xs:py-2 rounded-full text-xs xs:text-sm font-medium transition-colors
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
        <div className="relative flex flex-col sm:flex-row items-center justify-center mb-4 xs:mb-6 gap-2 xs:gap-4">
          {/* Botão de Navegação Anterior */}
          {shouldShowNavigation && (
            <Button
              type="button"
              className="sm:absolute left-0 z-10 p-2 min-h-[44px] min-w-[44px] flex items-center justify-center bg-white rounded-full shadow-md text-[#8D44AD] hover:bg-[#f3eaff] hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8D44AD] disabled:opacity-50 transition-all duration-200 sm:-translate-y-1/2 sm:top-1/2"
              onClick={handlePreviousLetter}
              disabled={safeCurrentLetterIndex === 0}
              aria-label="Carta anterior"
            >
              <ChevronLeftIcon className="h-5 w-5 xs:h-6 xs:w-6" aria-hidden="true" />
            </Button>
          )}

          {/* Exibir PDF se disponível, senão exibir carta tradicional */}
          <div className="flex-grow max-w-full px-2 xs:px-4 py-2 xs:py-4">
            {loadingPdf ? (
              <div className="flex items-center justify-center p-6 xs:p-8">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#8D44AD]"></div>
                <span className="ml-2 text-gray-600 text-sm xs:text-base">Verificando status dos PDFs...</span>
              </div>
            ) : currentPdf ? (
              <div>
                <h4 className="font-semibold text-black mb-1 xs:mb-2 text-sm xs:text-base">
                  PDF: {currentPdf.filename}
                  {(filteredPdfs.length > 1) &&
                    ` (${safeCurrentLetterIndex + 1} de ${filteredPdfs.length})`}
                </h4>
                <PDFViewer blob={currentPdf.blob} filename={currentPdf.filename} />
              </div>
            ) : currentLetter ? (
              <div>
                <h4 className="font-semibold text-black mb-1 xs:mb-2 text-sm xs:text-base">
                  Carta: {currentLetter.type} - {currentLetter.productName}
                  {filteredLetters.length > 1 &&
                    ` (${safeCurrentLetterIndex + 1} de ${filteredLetters.length})`}
                </h4>
                {currentLetter.type === "Finnet" && (
                  <FinnetLetterDisplay data={currentLetter} />
                )}
                {currentLetter.type === "Nexxera" && (
                  <NexxeraLetterDisplay data={currentLetter} />
                )}
                {!["Finnet", "Nexxera"].includes(currentLetter.type) && (
                  <div className="whitespace-pre-wrap text-xs xs:text-sm text-gray-800">
                    {currentLetter.content}
                  </div>
                )}
              </div>
            ) : (
              <div className="text-center p-6 xs:p-8 text-gray-600 text-sm xs:text-base">
                Nenhum documento disponível para visualização.
              </div>
            )}
          </div>

          {/* Botão de Navegação Próximo */}
          {shouldShowNavigation && (
            <Button
              type="button"
              className="sm:absolute right-0 z-10 p-2 min-h-[44px] min-w-[44px] flex items-center justify-center bg-white rounded-full shadow-md text-[#8D44AD] hover:bg-[#f3eaff] hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8D44AD] disabled:opacity-50 transition-all duration-200 sm:-translate-y-1/2 sm:top-1/2"
              onClick={handleNextLetter}
              disabled={safeCurrentLetterIndex >= totalDocuments - 1}
              aria-label="Próxima carta"
            >
              <ChevronRightIcon className="h-5 w-5 xs:h-6 xs:w-6" aria-hidden="true" />
            </Button>
          )}
        </div>

        {/* Botões de Ação */}
        <div className="flex flex-row justify-between items-center mt-6 xs:mt-8 gap-3 xs:gap-4">
          <Button
            type="button"
            className="border-2 border-[#8D44AD] text-[#8D44AD] bg-white rounded-full px-6 xs:px-10 py-2 min-h-[44px] font-semibold text-base xs:text-lg transition hover:bg-[#f3eaff] hover:text-[#8D44AD] hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8D44AD] disabled:opacity-50 shadow-none flex-1"
            onClick={onBack}
            disabled={loadingPdf || loadingConfirmAndSend || loadingPdfs}
          >
            Voltar
          </Button>

          {/* Botão Confirmar e Enviar Carta */}
          <Button
            type="button"
            className="bg-[#8D44AD] text-white rounded-full px-6 xs:px-10 py-2 min-h-[44px] font-semibold text-base xs:text-lg shadow-md hover:bg-[#7d379c] hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8D44AD] transition disabled:opacity-50 flex-1"
            onClick={() => setIsModalOpen(true)}
            disabled={
              loadingPdf ||
              loadingConfirmAndSend ||
              loadingPdfs ||
              selectedProducts.length === 0 ||
              selectedVanTypes.length === 0 ||
              (filteredLetters.length === 0 && filteredPdfs.length === 0) ||
              pdfStatus !== 'done' // Só habilita se PDFs estiverem prontos
            }
            title={
              pdfStatus !== 'done'
                ? "Aguarde a geração dos PDFs antes de enviar."
                : selectedProducts.length === 0 || selectedVanTypes.length === 0
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
