import React, { useState } from "react";
import { BankSelection } from "./steps/BankSelection";
import { ProductSelection } from "./steps/ProductSelection";
import { FormStep } from "./steps/FormStep";
import { ValidationStep } from "./steps/ValidationStep";
import Card from "../Card/Card";
import WizardIntro from "../../pages/WizardIntro";
import Stepper from "../Stepper/StepperSteps";

export type WizardStep = "bank" | "products" | "form" | "validation";

export const steps = [
  "Banco",
  "Produto",
  "Dados da empresa e conta",
  "Carta Finnet",
  "Carta Nexxera",
  "Encerramento",
];

export const Wizard: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<WizardStep>("bank");
  const [selectedBank, setSelectedBank] = useState<string | null>(null);
  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);
  const [formData, setFormData] = useState<any>({});
  const [showIntro, setShowIntro] = useState(true);

  const handleNext = () => {
    switch (currentStep) {
      case "bank":
        setCurrentStep("products");
        break;
      case "products":
        setCurrentStep("form");
        break;
      case "form":
        setCurrentStep("validation");
        break;
      default:
        break;
    }
  };

  const handleBack = () => {
    switch (currentStep) {
      case "bank":
        setShowIntro(true);
        break;
      case "products":
        setCurrentStep("bank");
        break;
      case "form":
        setCurrentStep("products");
        break;
      case "validation":
        setCurrentStep("form");
        break;
      default:
        break;
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case "bank":
        return (
          <BankSelection
            onSelect={setSelectedBank}
            selectedBank={selectedBank}
            onNext={handleNext}
            onBack={handleBack}
          />
        );
      case "products":
        return (
          <ProductSelection
            selectedProducts={selectedProducts}
            onSelect={setSelectedProducts}
            onNext={handleNext}
            onBack={handleBack}
          />
        );
      case "form":
        return (
          <FormStep
            formData={formData}
            onUpdate={setFormData}
            onNext={handleNext}
            onBack={handleBack}
          />
        );
      case "validation":
        return (
          <ValidationStep
            selectedProducts={selectedProducts}
            onBack={handleBack}
          />
        );
      default:
        return null;
    }
  };

  return showIntro ? (
    <WizardIntro
      onStart={() => {
        setShowIntro(false);
        setCurrentStep("bank");
      }}
    />
  ) : (
    <div className="min-h-screen bg-[#8D44AD] flex flex-col items-center justify-start px-2">
      <Stepper
        currentStep={
          ["bank", "products", "form", "validation"].indexOf(currentStep)
        }
        steps={steps}
      />
      <Card className="w-full max-w-full sm:max-w-2xl md:max-w-3xl mt-4">
        <div className="px-2 sm:px-6 md:px-8 py-6 sm:py-8">{renderStep()}</div>
      </Card>
    </div>
  );
};
