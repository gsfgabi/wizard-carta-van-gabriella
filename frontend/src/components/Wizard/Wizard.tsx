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
  getProducts,
  getCNABs,
  getVanTypes,
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
  const [banks, setBanks] = useState<BankData[]>([]);
  const [loadingBanks, setLoadingBanks] = useState(true);
  const [errorBanks, setErrorBanks] = useState<string | null>(null);
  const [products, setProducts] = useState<ProductData[]>([]);
  const [cnabs, setCNABs] = useState<CNABData[]>([]);
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
  const MAX_BANK_FETCH_ATTEMPTS = 3;

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

  useEffect(() => {
    if (bankFetchAttempts === 0) {
      fetchBanks();
    }
  }, [bankFetchAttempts]);

  useEffect(() => {
    if (selectedBank) {
      console.log("Iniciando busca de detalhes para o banco:", selectedBank);
      setLoadingProducts(true);
      const startTime = Date.now();
      Promise.all([
        getProducts(selectedBank.toString()),
        getCNABs(selectedBank.toString()),
        getVanTypes(selectedBank.toString()),
      ])
        .then(([productsData, cnabsData, vanTypesData]) => {
          const endTime = Date.now();
          console.log(
            "Detalhes do banco carregados em",
            endTime - startTime,
            "ms"
          );
          setProducts(productsData);
          setCNABs(cnabsData);
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
      setVanTypes([]);
      setLoadingProducts(false);
    }
  }, [selectedBank]);

  const handleNext = (triggeredByStep: WizardStep) => {
    console.log("handleNext triggered by:", triggeredByStep);
    const triggeredStepIndex = stepMap[triggeredByStep];
    const nextStepIndex = triggeredStepIndex + 1;

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
        onBackToIntro();
        break;
      case "products":
        setCurrentStep("bank");
        break;
      case "form":
        setCurrentStep("products");
        break;
      case "van-type":
        setCurrentStep("form");
        break;
      case "validation":
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

  const handleGenerateLetterAndNext = (
    vanTypesSelected: string[],
    triggeredByStep: WizardStep
  ) => {
    setStepBeforeValidation(triggeredByStep);
    console.log(
      "handleGenerateLetterAndNext chamado com vanTypesSelected:",
      vanTypesSelected
    );

    const bankInfo = banks.find((b) => b.id === selectedBank);
    const productInfo = products.filter((p) =>
      selectedProducts.includes(p.id.toString())
    );
    const vanTypeInfo = vanTypes.filter((v) =>
      vanTypesSelected.includes(v.id.toString())
    );

    if (!bankInfo) {
      console.error("Banco selecionado não encontrado!");
      return;
    }

    const lettersWithTypes = productInfo.flatMap((product) =>
      vanTypeInfo.map((van) => ({
        type: van.type,
        content: "",
        formData: formData,
        bankInfo: bankInfo,
        productInfo: [product],
        vanTypeInfo: [van],
        cnabs: cnabs,
        productName: product.name,
      }))
    );

    setGeneratedLetterContents(lettersWithTypes);
    setCurrentStep("validation");
    setExpandedStep(null);
  };

  const handleConfirmAndSend = async () => {
    setLoadingConfirmAndSend(true);
    try {
      // TODO: Implementar chamada à API para criar ticket no Zendesk
      // TODO: Implementar envio de e-mail
      await new Promise((resolve) => setTimeout(resolve, 2000));
      toast.success("Carta enviada com sucesso!");
      setTicketDetails({
        number: "456981",
        link: "https://www.zendesk.com.br/tecnospeed/456981",
      });
      setCurrentStep("completion");
    } catch (error) {
      console.error("Erro ao enviar carta:", error);
      toast.error("Erro ao enviar a carta. Tente novamente.");
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
    setGeneratedLetterContents([]);
    setTicketDetails(null);
    setBankFetchAttempts(0);
    setShowBankFinalErrorModal(false);
    setErrorBanks(null);
    setExpandedStep(null);
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
            onSelect={setSelectedBank}
            selectedBank={selectedBank}
            onNext={() => handleNext(stepName)}
            onBack={() => handleBack()} 
            banks={banks}
            loading={loadingBanks}
            error={errorBanks}
            onRetryFetchBanks={fetchBanks}
            bankFetchAttempts={bankFetchAttempts}
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
            cnabs={cnabs}
            banks={banks}
            products={products}
            selectedProducts={selectedProducts}
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
            onConfirmAndSend={handleConfirmAndSend}
            loadingConfirmAndSend={loadingConfirmAndSend}
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

  return (
    <div className="min-h-screen bg-[#8D44AD] flex flex-col items-center justify-start px-2">
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

      <div className="w-full mt-6">
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
              className="mb-4 w-full max-w-full sm:max-w-2xl md:max-w-3xl"
            >
              <div
                className={`px-2 sm:px-6 md:px-8 py-1 flex items-center justify-between cursor-pointer ${
                  !isCompleted && !isCurrent
                    ? "opacity-50 cursor-not-allowed"
                    : ""
                }`}
                onClick={() => handleStepHeaderClick(stepName)}
              >
                <div className="flex items-center">
                  <div
                    className={`rounded-full border-2 w-6 h-6 flex items-center justify-center mr-4 text-xs font-bold 
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
                      <CheckIcon className="h-4 w-4" strokeWidth={3} />
                    ) : (
                      index + 1
                    )}
                  </div>
                  <h3 className="text-lg font-semibold text-black mr-2">
                    {step.name}
                  </h3>

                  {isCompleted && !isCurrent && !isExpanded && (
                    <span className="text-gray-800 text-lg ml-1">
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
                {(isCompleted || isCurrent) &&
                  (isExpanded ? (
                    <ChevronUpIcon className="h-6 w-6 text-[#8D44AD]" />
                  ) : (
                    <ChevronDownIcon className="h-6 w-6 text-[#8D44AD]" />
                  ))}
              </div>

              {(isCurrent || isExpanded) && (
                <div className="px-2 sm:px-6 md:px-8 py-2 border-t border-gray-200">
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
    </div>
  );
};
