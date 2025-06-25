import React, { useState, useEffect } from "react";
import { BankSelection } from "./steps/BankSelection";
import { ProductSelection } from "./steps/ProductSelection";
import { FormStep } from "./steps/FormStep";
import { ValidationStep } from "./steps/ValidationStep";
import { VanTypeSelection } from "./steps/VanTypeSelection";
import { CompletionStep } from "./steps/CompletionStep";
import Card from "../Card/Card";
import Stepper from "../Stepper/StepperSteps";
import {
  getBanks,
  getAllBankData,
  generatePDFs,
  getPDFStatus,
  submitReport,
  type BankData,
  type ProductData,
  type CNABData,
  type VanTypeData,
} from "../../services/api";
import toast from "react-hot-toast";
import { ErrorModal } from "../Modal/ErrorModal";
import Modal from "../Modal/Modal";
import {
  ChevronDownIcon,
  ChevronUpIcon,
  CheckIcon,
} from "@heroicons/react/24/outline";
import ProductSelectionSkeleton from "../Skeleton/ProductSelectionSkeleton";
import Button from "../Button/Button";
import Confirmation from "../Modal/Confirmation";

export type WizardStep =
  | "bank"
  | "products"
  | "form"
  | "van-type"
  | "validation"
  | "completion";

export const steps = [
  "Banco",
  "Produto",
  "Dados da empresa e conta",
  "Tipo de VAN",
  "Revisão",
  "Encerramento",
];

const stepMap: Record<WizardStep, number> = {
  bank: 0,
  products: 1,
  form: 2,
  "van-type": 3,
  validation: 4,
  completion: 5,
};

// Definir a ordem e o nome dos passos para renderização
const orderedSteps: { name: string; key: WizardStep }[] = [
  { name: "1. Selecionar um Banco (Instituição Bancária): ", key: "bank" },
  { name: "2. Selecionar um ou mais produtos: ", key: "products" },
  { name: "3. Dados da empresa e conta", key: "form" },
  { name: "4. Tipo de VAN: ", key: "van-type" },
  { name: "5. Revisão", key: "validation" },
  { name: "6. Encerramento", key: "completion" },
];

interface WizardProps {
  onBackToIntro: () => void;
}

export const Wizard: React.FC<WizardProps> = ({ onBackToIntro }) => {
  const [currentStep, setCurrentStep] = useState<WizardStep>("bank");
  const [selectedBank, setSelectedBank] = useState<number | null>(null);
  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);
  const [selectedVanTypes, setSelectedVanTypes] = useState<string[]>([]);
  const [formData, setFormData] = useState<any>({});
  const [authorizationId, setAuthorizationId] = useState<number | null>(null);
  const [banks, setBanks] = useState<BankData[]>([]);
  const [loadingBanks, setLoadingBanks] = useState(true);
  const [errorBanks, setErrorBanks] = useState<string | null>(null);
  const [products, setProducts] = useState<ProductData[]>([]);
  const [cnabs, setCNABs] = useState<CNABData[]>([]);
  const [allCNABs, setAllCNABs] = useState<CNABData[]>([]);
  const [vanTypes, setVanTypes] = useState<VanTypeData[]>([]);
  const [loadingProducts, setLoadingProducts] = useState(false);
  const [generatedLetterContents, setGeneratedLetterContents] = useState<
    {
      type: string;
      content: string;
      formData: any;
      bankInfo: BankData | undefined;
      productInfo: ProductData[];
      vanTypeInfo: VanTypeData[];
      cnabs: CNABData[];
      productName: string;
    }[]
  >([]);
  const [pdfData, setPdfData] = useState<Array<{ filename: string; blob: Blob }>>([]);
  const [loadingPdfs, setLoadingPdfs] = useState(false);
  const [ticketDetails, setTicketDetails] = useState<{
    number: string;
    link: string;
  } | null>(null);
  const [loadingConfirmAndSend, setLoadingConfirmAndSend] = useState(false);
  const [expandedStep, setExpandedStep] = useState<WizardStep | null>(null);
  const [stepBeforeValidation, setStepBeforeValidation] =
    useState<WizardStep | null>(null);

  const [bankFetchAttempts, setBankFetchAttempts] = useState(0);
  const [showBankFinalErrorModal, setShowBankFinalErrorModal] = useState(false);
  const [showBankChangeConfirmation, setShowBankChangeConfirmation] = useState(false);
  const [pendingBankSelection, setPendingBankSelection] = useState<number | null>(null);
  const MAX_BANK_FETCH_ATTEMPTS = 3;

  const [pdfGenerationId, setPdfGenerationId] = useState<string | null>(null);

  const [showFormBackConfirm, setShowFormBackConfirm] = useState(false);
  const [loadingFormBack, setLoadingFormBack] = useState(false);

  const [blockStepExpansion, setBlockStepExpansion] = useState(false);

  // Carregar bancos automaticamente quando o componente montar
  useEffect(() => {
    fetchBanks();
  }, []);

  const fetchBanks = async () => {
    try {
      setLoadingBanks(true);
      setErrorBanks(null);
      const data = await getBanks();
      setBanks(data);
      setBankFetchAttempts(0);
    } catch (error) {
      console.error("Erro ao buscar bancos:", error);
      setBankFetchAttempts((prevAttempts) => prevAttempts + 1);
      if (bankFetchAttempts + 1 >= MAX_BANK_FETCH_ATTEMPTS) {
        setErrorBanks(
          "Não foi possível carregar a lista de bancos após várias tentativas."
        );
        setShowBankFinalErrorModal(true);
      } else {
        setErrorBanks(
          "Erro ao carregar a lista de bancos. Tentativa " +
            (bankFetchAttempts + 1) +
            " de " +
            MAX_BANK_FETCH_ATTEMPTS +
            "."
        );
      }
    } finally {
      if (bankFetchAttempts >= MAX_BANK_FETCH_ATTEMPTS || errorBanks === null) {
        setLoadingBanks(false);
      }
    }
  };

  // Buscar dados do banco quando selecionado
  useEffect(() => {
    if (selectedBank) {
      console.log("Iniciando busca de detalhes para o banco:", selectedBank);
      setLoadingProducts(true);
      const startTime = Date.now();
      
      getAllBankData(selectedBank.toString())
        .then(({ products: productsData, cnabs: cnabsData, vanTypes: vanTypesData, allCNABs: allCNABsData }) => {
          const endTime = Date.now();
          console.log(
            "Detalhes do banco carregados em",
            endTime - startTime,
            "ms"
          );
          setProducts(productsData);
          setCNABs(cnabsData);
          setAllCNABs(allCNABsData || []);
          setVanTypes(vanTypesData);
        })
        .catch((error) => {
          const endTime = Date.now();
          console.log(
            "Erro ao carregar detalhes do banco em",
            endTime - startTime,
            "ms",
            error
          );
          console.error("Erro ao carregar detalhes do banco:", error);
        })
        .finally(() => {
          setLoadingProducts(false);
        });
    } else {
      setProducts([]);
      setCNABs([]);
      setAllCNABs([]);
      setVanTypes([]);
      setLoadingProducts(false);
    }
  }, [selectedBank]);

  const handleNext = (triggeredByStep: WizardStep) => {
    console.log("handleNext triggered by:", triggeredByStep);
    const triggeredStepIndex = stepMap[triggeredByStep];
    const nextStepIndex = triggeredStepIndex + 1;

    // Validação específica para o passo de seleção de banco
    if (triggeredByStep === "bank") {
      // Verificar se há produtos disponíveis para o banco selecionado
      const availableProducts = products.filter(product => product.available !== false);
      const availableVanTypes = vanTypes.filter(vanType => vanType.available !== false);
      
      if (availableProducts.length === 0) {
        // toast.error("Este banco não possui produtos disponíveis. Selecione outro banco.");
        return;
      }
      
      if (availableVanTypes.length === 0) {
        // toast.error("Este banco não possui tipos de VAN disponíveis. Selecione outro banco.");
        return;
      }
      
      console.log(`Banco validado: ${availableProducts.length} produtos e ${availableVanTypes.length} tipos de VAN disponíveis`);
    }

    if (triggeredByStep === "form") {
      console.log("Checking VAN types for form step...");
      const availableVanTypes = vanTypes.filter((vanType) => vanType.available);
      console.log("Available VAN types:", availableVanTypes);
      console.log("Number of available VAN types:", availableVanTypes.length);

      if (availableVanTypes.length === 1) {
        console.log(
          "Exactly one available VAN type found, skipping VAN type selection."
        );
        setSelectedVanTypes([availableVanTypes[0].id.toString()]);
        handleGenerateLetterAndNext(
          [availableVanTypes[0].id.toString()],
          triggeredByStep
        );
        return;
      } else {
        console.log(
          "Zero or more than one available VAN types found, proceeding to VAN type selection."
        );
        const nextStepName = Object.keys(stepMap).find(
          (key) => stepMap[key as WizardStep] === nextStepIndex
        ) as WizardStep;
        setCurrentStep(nextStepName);
        setExpandedStep(nextStepName);
      }
    } else {
      if (nextStepIndex < Object.keys(stepMap).length) {
        const nextStepName = Object.keys(stepMap).find(
          (key) => stepMap[key as WizardStep] === nextStepIndex
        ) as WizardStep;
        setCurrentStep(nextStepName);
        setExpandedStep(nextStepName);
      }
    }
  };

  const handleBack = () => {
    switch (currentStep) {
      case "bank":
        handleStartOver();
        onBackToIntro();
        break;
      case "products":
        setSelectedProducts([]);
        setCurrentStep("bank");
        break;
      case "form":
        setShowFormBackConfirm(true);
        break;
      case "van-type":
        setSelectedVanTypes([]);
        setCurrentStep("form");
        break;
      case "validation":
        setGeneratedLetterContents([]);
        const availableVanTypes = vanTypes.filter(
          (vanType) => vanType.available
        );
        if (availableVanTypes.length === 1) {
          setCurrentStep("form");
        } else {
          setCurrentStep("van-type");
        }
        break;
      default:
        break;
    }
  };

  const handleAuthorizationCreated = (id: number) => {
    setAuthorizationId(id);
    console.log('ID da autorização criada:', id);
  };

  const handleGenerateLetterAndNext = async (
    vanTypesSelected: string[],
    triggeredByStep: WizardStep
  ) => {
    setStepBeforeValidation(triggeredByStep);
    setLoadingPdfs(true);
    setSelectedVanTypes(vanTypesSelected);
    try {
      // Montar payload completo
      const payload = {
        ...formData,
        id_van_types: vanTypesSelected.map((id) => parseInt(id)),
        id_products: selectedProducts.map((id) => parseInt(id)),
      };
      
      // 1. Chamar endpoint de geração
      const { id_request } = await generatePDFs(payload);
      console.log('ID gerado:', id_request);
      
      // 2. Salvar o id no localStorage
      setPdfGenerationId(id_request);
      localStorage.setItem('pdfGenerationId', id_request);
      
      // 3. Avançar para o passo de revisão 
      setCurrentStep("validation");
      setExpandedStep(null);
    } catch (error) {
    } finally {
      setLoadingPdfs(false);
    }
  };

  const handleConfirmAndSend = async () => {
    setLoadingConfirmAndSend(true);
    setBlockStepExpansion(true);
    try {
      // Encontrar o banco e CNAB selecionados
      const selectedBankData = banks.find(bank => bank.id === selectedBank);
      const selectedCNAB = cnabs.find(cnab => cnab.name === formData.cnab);
      
      if (!selectedBankData || !selectedCNAB) {
        throw new Error('Dados do banco ou CNAB não encontrados');
      }

      // Montar os dados do formulário para enviar no formato correto
      const formDataToSend = {
        cnpj: formData.cnpj?.replace(/\D/g, '') || '',
        id_request: pdfGenerationId || '',
        corporate_name: formData.corporate_name || '',
        responsible_person_name: formData.responsible_person_name || '',
        responsible_person_title: formData.responsible_person_title || '',
        responsible_person_cellphone: formData.responsible_person_cellphone?.replace(/\D/g, '') || '',
        responsible_person_email: formData.responsible_person_email || '',
        manager_name: formData.manager_name || '',
        manager_cellphone: formData.manager_cellphone?.replace(/\D/g, '') || '',
        manager_email: formData.manager_email || '',
        branch_number: formData.branch_number?.replace(/\D/g, '') || '',
        branch_dv: formData.branch_dv || '',
        account_number: formData.account_number?.replace(/\D/g, '') || '',
        account_dv: formData.account_dv || '',
        agreement_number: formData.agreement_number?.replace(/\D/g, '') || '',
        id_banks: selectedBankData.id.toString(),
        id_cnabs: selectedCNAB.id.toString(),
        id_products: selectedProducts.map(id => parseInt(id)),
        id_van_types: selectedVanTypes.map(id => parseInt(id)),
      };
      
      // Debug: log dos dados sendo enviados
      console.log('Dados sendo enviados para /report-submissions:', formDataToSend);
      console.log('ID da requisição (pdfGenerationId):', pdfGenerationId);
      
      await submitReport(formDataToSend);
      setTicketDetails({
        number: "456981",
        link: "https://www.zendesk.com.br/tecnospeed/456981",
      });
      setCurrentStep("completion");
    } catch (error) {
    } finally {
      setLoadingConfirmAndSend(false);
    }
  };

  const handleStartOver = () => {
    setCurrentStep("bank");
    setSelectedBank(null);
    setSelectedProducts([]);
    setSelectedVanTypes([]);
    setFormData({});
    setPdfGenerationId(null);
    setGeneratedLetterContents([]);
    setPdfData([]);
    setTicketDetails(null);
    setBankFetchAttempts(0);
    setShowBankFinalErrorModal(false);
    setErrorBanks(null);
    setExpandedStep(null);
    localStorage.removeItem('pdfGenerationId');
  };

  const handleCloseBankFinalErrorModal = () => {
    setShowBankFinalErrorModal(false);
    handleStartOver();
  };

  const isStepCompleted = (stepName: WizardStep) => {
    const currentStepIndex = stepMap[currentStep];
    const stepIndex = stepMap[stepName];
    return stepIndex < currentStepIndex;
  };

  const handleStepHeaderClick = (stepName: WizardStep) => {
    if (blockStepExpansion) {
      toast("A navegação entre etapas está bloqueada após o envio das cartas para evitar envios duplicados. Caso precise reiniciar, clique em 'Início'.", { icon: "🔒" });
      return;
    }
    if (isStepCompleted(stepName) || stepName === currentStep) {
      setExpandedStep(expandedStep === stepName ? null : stepName);
    }
  };

  const renderStepContent = (stepName: WizardStep) => {
    if (expandedStep !== stepName && isStepCompleted(stepName)) {
      console.log(`Attempting to render summary for step: ${stepName}`);
      if (stepName === "bank") {
        const bank = banks.find((b) => b.id === selectedBank);
        console.log("Rendering bank summary:");
        console.log("selectedBank:", selectedBank);
        console.log("banks:", banks);
        console.log("Found bank:", bank);
        return (
          <div className="text-black">
            Banco selecionado:{" "}
            <span className="font-semibold text-gray-800">
              {bank ? bank.name : "Nenhum"}
            </span>
          </div>
        );
      } else if (stepName === "products") {
        const selectedProductNames = products
          .filter((p) => selectedProducts.includes(p.id.toString()))
          .map((p) => p.name)
          .join(", ");
        return (
          <div className="text-black">
            Produtos selecionados:{" "}
            <span className="font-semibold text-gray-800">
              {selectedProductNames || "Nenhum"}
            </span>
          </div>
        );
      } else if (stepName === "form") {
        return (
          <div className="text-black">
            Dados da empresa e conta:{" "}
            <span className="font-semibold text-gray-800">Preenchidos</span>
          </div>
        );
      } else if (stepName === "van-type") {
        const selectedVanTypeNames = vanTypes
          .filter((v) => selectedVanTypes.includes(v.id.toString()))
          .map((v) => v.type)
          .join(", ");
        return (
          <div className="text-black">
            Tipo de VAN:{" "}
            <span className="font-semibold text-gray-800">
              {selectedVanTypeNames || "Nenhum"}
            </span>
          </div>
        );
      }
      return (
        <div className="text-gray-600 italic">
          Visualizar resumo (Não implementado)
        </div>
      );
    }

    switch (stepName) {
      case "bank":
        return (
          <BankSelection
            onSelect={handleBankSelection}
            selectedBank={selectedBank}
            onNext={() => handleNext(stepName)}
            onBack={() => handleBack()}
            banks={banks}
            loading={loadingBanks}
            error={errorBanks}
            onRetryFetchBanks={fetchBanks}
            bankFetchAttempts={bankFetchAttempts}
            products={products}
            vanTypes={vanTypes}
            loadingProducts={loadingProducts}
          />
        );
      case "products":
        return loadingProducts ? (
          <ProductSelectionSkeleton />
        ) : (
          <ProductSelection
            selectedProducts={selectedProducts}
            onSelect={setSelectedProducts}
            onNext={() => handleNext(stepName)}
            onBack={() => handleBack()}
            selectedBank={selectedBank}
            products={products}
          />
        );
      case "form":
        return (
          <FormStep
            formData={formData}
            onUpdate={setFormData}
            onNext={() => handleNext(stepName)}
            onBack={() => handleBack()}
            selectedBank={selectedBank}
            cnabs={allCNABs}
            banks={banks}
            products={products}
            selectedProducts={selectedProducts}
            onAuthorizationCreated={handleAuthorizationCreated}
          />
        );
      case "van-type":
        return (
          <VanTypeSelection
            selectedBank={selectedBank}
            selectedVanTypes={selectedVanTypes}
            onSelect={setSelectedVanTypes}
            onNext={(vanTypesSelected) =>
              handleGenerateLetterAndNext(vanTypesSelected, stepName)
            }
            onBack={() => handleBack()}
            vanTypes={vanTypes}
            loading={loadingProducts || loadingPdfs}
          />
        );
      case "validation":
        return (
          <ValidationStep
            selectedProducts={selectedProducts}
            selectedVanTypes={selectedVanTypes}
            onBack={() => handleBack()}
            selectedBank={selectedBank}
            generatedLetterContents={generatedLetterContents}
            pdfData={pdfData}
            onConfirmAndSend={handleConfirmAndSend}
            loadingConfirmAndSend={loadingConfirmAndSend}
            loadingPdfs={loadingPdfs}
            products={products}
            vanTypes={vanTypes}
            cnabs={cnabs}
            banks={banks}
            formData={formData}
            pdfGenerationId={pdfGenerationId}
          />
        );
      case "completion":
        return (
          <CompletionStep
            ticketNumber={ticketDetails?.number || ""}
            ticketLink={ticketDetails?.link || ""}
            onStartOver={handleStartOver}
          />
        );
      default:
        return null;
    }
  };

  const currentStepIndex = stepMap[currentStep];

  // Função para limpar todas as seleções
  const clearAllSelections = () => {
    setSelectedProducts([]);
    setSelectedVanTypes([]);
    setFormData({});
    setGeneratedLetterContents([]);
    setTicketDetails(null);
    setExpandedStep(null);
  };

  // Função para confirmar mudança de banco
  const confirmBankChange = (newBankId: number | null) => {
    setSelectedBank(newBankId);
    clearAllSelections();
    setCurrentStep("bank");
    setShowBankChangeConfirmation(false);
    setPendingBankSelection(null);
  };

  // Função para cancelar mudança de banco
  const cancelBankChange = () => {
    setShowBankChangeConfirmation(false);
    setPendingBankSelection(null);
  };

  // Função para verificar se deve mostrar confirmação
  const handleBankSelection = (bankId: number | null) => {
    // Se não há banco selecionado ou é o mesmo banco, não precisa de confirmação
    if (!selectedBank || bankId === selectedBank) {
      setSelectedBank(bankId);
      return;
    }

    // Se há seleções feitas, mostrar confirmação
    if (selectedProducts.length > 0 || selectedVanTypes.length > 0 || Object.keys(formData).length > 0) {
      setPendingBankSelection(bankId);
      setShowBankChangeConfirmation(true);
    } else {
      // Se não há seleções, pode mudar diretamente
      setSelectedBank(bankId);
    }
  };

  const handleConfirmFormBack = () => {
    setLoadingFormBack(true);
    setTimeout(() => {
      setFormData({});
      setCurrentStep("products");
      setShowFormBackConfirm(false);
      setLoadingFormBack(false);
    }, 300); // Simula carregamento
  };

  const handleCancelFormBack = () => {
    setShowFormBackConfirm(false);
  };

  return (
    <div className="min-h-screen bg-[#8D44AD] flex flex-col items-center justify-start px-2 sm:px-4">
      <Stepper
        currentStep={currentStepIndex}
        steps={steps}
        onStepClick={(index) => {
          const stepName = Object.keys(stepMap).find(
            (key) => stepMap[key as WizardStep] === index
          ) as WizardStep;
          if (isStepCompleted(stepName) || stepName === currentStep) {
            setCurrentStep(stepName);
            setExpandedStep(stepName);
          }
        }}
      />

      <div className="w-full mt-4 sm:mt-6">
        {orderedSteps.map((step, index) => {
          const stepName = step.key;
          const isCurrent = stepName === currentStep;
          const isCompleted = isStepCompleted(stepName);
          const isExpanded = expandedStep === stepName;

          if (!isCompleted && !isCurrent && currentStepIndex < index)
            return null; 

          return (
            <Card
              key={stepName}
              className={`mb-3 sm:mb-4 w-full max-w-full sm:max-w-2xl md:max-w-3xl lg:max-w-4xl transition-all duration-300 ${
                isCompleted && !isCurrent && !isExpanded ? "opacity-80 bg-gray-50" : ""
              }`}
            >
              <div
                className={`px-2 sm:px-4 md:px-6 lg:px-8 py-2 sm:py-3 flex items-center justify-between ${
                  blockStepExpansion
                    ? "cursor-default"
                    : "cursor-pointer"
                } ${
                  !isCompleted && !isCurrent
                    ? "opacity-50 cursor-not-allowed"
                    : ""
                }`}
                onClick={() => handleStepHeaderClick(stepName)}
              >
                <div className="flex items-center flex-1 min-w-0">
                  <div
                    className={`rounded-full border-2 w-5 h-5 xs:w-6 xs:h-6 flex items-center justify-center mr-2 sm:mr-4 text-xs font-bold flex-shrink-0
                          ${
                            isCompleted
                              ? "bg-white border-[#8D44AD] text-[#8D44AD]"
                              : isCurrent
                              ? "bg-white border-[#8D44AD] text-[#8D44AD]"
                              : "bg-transparent border-white text-white"
                          }
                        `}
                  >
                    {isCompleted ? (
                      <CheckIcon className="h-3 w-3 xs:h-4 xs:w-4" strokeWidth={3} />
                    ) : (
                      index + 1
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className={`text-sm xs:text-base sm:text-lg font-semibold mr-2 transition-colors duration-300 truncate ${
                      isCompleted && !isCurrent && !isExpanded ? "text-gray-600" : "text-black"
                    }`}>
                      {step.name}
                    </h3>

                    {isCompleted && !isCurrent && !isExpanded && (
                      <span className={`text-xs xs:text-sm sm:text-base ml-1 transition-colors duration-300 truncate block ${
                        isCompleted && !isCurrent && !isExpanded ? "text-gray-500" : "text-gray-800"
                      }`}>
                        {stepName === "bank" &&
                          selectedBank &&
                          `${
                            banks.find((b) => b.id === selectedBank)?.name ||
                            "Nenhum"
                          }`}
                        {stepName === "products" &&
                          selectedProducts.length > 0 &&
                          `${
                            products
                              .filter((p) =>
                                selectedProducts.includes(p.id.toString())
                              )
                              .map((p) => p.name)
                              .join(", ") || "Nenhum"
                          }`}
                        {stepName === "van-type" &&
                          selectedVanTypes.length > 0 &&
                          `${
                            vanTypes
                              .filter((v) =>
                                selectedVanTypes.includes(v.id.toString())
                              )
                              .map((v) => v.type)
                              .join(", ") || "Nenhum"
                          }`}
                      </span>
                    )}
                  </div>
                </div>
                {(isCompleted || isCurrent) &&
                  (isExpanded ? (
                    <ChevronUpIcon className={`h-5 w-5 xs:h-6 xs:w-6 transition-colors duration-300 flex-shrink-0 ${
                      isCompleted && !isCurrent && !isExpanded ? "text-gray-400" : "text-[#8D44AD]"
                    }`} />
                  ) : (
                    <ChevronDownIcon className={`h-5 w-5 xs:h-6 xs:w-6 transition-colors duration-300 flex-shrink-0 ${
                      isCompleted && !isCurrent && !isExpanded ? "text-gray-400" : "text-[#8D44AD]"
                    }`} />
                  ))}
              </div>

              {(isCurrent || isExpanded) && (
                <div className="px-2 sm:px-4 md:px-6 lg:px-8 py-2 sm:py-3 border-t border-gray-200">
                  {renderStepContent(stepName)}
                </div>
              )}
            </Card>
          );
        })}
      </div>

      <Modal
        isOpen={showBankFinalErrorModal}
        onClose={handleCloseBankFinalErrorModal}
      >
        <ErrorModal
          isOpen={showBankFinalErrorModal}
          onClose={handleCloseBankFinalErrorModal}
        />
      </Modal>

      {/* Modal de confirmação de mudança de banco */}
      <Modal
        isOpen={showBankChangeConfirmation}
        onClose={cancelBankChange}
      >
        <div className="flex flex-col items-center text-center">
          <h1 className="text-2xl font-bold mb-4 text-black">
            Alterar banco selecionado?
          </h1>
          <p className="text-gray-700 mb-6">
            Ao alterar o banco, todas as seleções feitas (produtos, tipos de VAN e dados do formulário) serão perdidas.
          </p>
          <div className="w-full flex justify-between mt-6">
            <Button
              type="button"
              className="border-2 border-[#8D44AD] text-[#8D44AD] bg-white rounded-full px-10 py-2 font-semibold transition hover:bg-[#f3eaff] hover:text-[#8D44AD] disabled:opacity-50 shadow-none"
              onClick={cancelBankChange}
            >
              Cancelar
            </Button>
            <Button
              type="button"
              className="bg-[#8D44AD] text-white rounded-full px-10 py-2 font-semibold shadow-none hover:bg-[#7d379c] transition disabled:opacity-50"
              onClick={() => confirmBankChange(pendingBankSelection)}
            >
              Confirmar
            </Button>
          </div>
        </div>
      </Modal>

      <Modal isOpen={showFormBackConfirm} onClose={handleCancelFormBack}>
        <Confirmation
          onConfirm={handleConfirmFormBack}
          onCancel={handleCancelFormBack}
          loading={loadingFormBack}
          title="Tem certeza que deseja voltar?"
          message="Ao voltar, todos os dados preenchidos no formulário serão perdidos. Deseja continuar?"
          confirmButtonText="Continuar"
        />
      </Modal>
    </div>
  );
};
