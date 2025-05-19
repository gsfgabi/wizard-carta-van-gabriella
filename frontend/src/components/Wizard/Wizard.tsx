import React, { useState } from "react";
import { BankSelection } from "./steps/BankSelection";
import { ProductSelection } from "./steps/ProductSelection";
import { FormStep } from "./steps/FormStep";
import { ValidationStep } from "./steps/ValidationStep";
import { VanTypeSelection } from "./steps/VanTypeSelection";
import Card from "../Card/Card";
// import WizardIntro from "../../pages/WizardIntro";
import Stepper from "../Stepper/StepperSteps";

export type WizardStep = "bank" | "products" | "form" | "van-type" | "validation";

export const steps = [
  "Banco",
  "Produto",
  "Dados da empresa e conta",
  "Tipo de VAN",
  "Revisão",
  "Encerramento",
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

  const handleNext = () => {
    switch (currentStep) {
      case "bank":
        setCurrentStep("products");
        break;
      case "products":
        setCurrentStep("form");
        break;
      case "form":
        setCurrentStep("van-type");
        break;
      case "van-type":
        setCurrentStep("validation");
        break;
      default:
        break;
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
        setCurrentStep("van-type");
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
            selectedBank={selectedBank}
          />
        );
      case "form":
        return (
          <FormStep
            formData={formData}
            onUpdate={setFormData}
            onNext={handleNext}
            onBack={handleBack}
            selectedBank={selectedBank}
          />
        );
      case "van-type":
        return (
          <VanTypeSelection
            selectedBank={selectedBank}
            selectedVanTypes={selectedVanTypes}
            onSelect={setSelectedVanTypes}
            onNext={handleNext}
            onBack={handleBack}
          />
        );
      case "validation":
        return (
          <ValidationStep
            selectedProducts={selectedProducts}
            selectedVanTypes={selectedVanTypes}
            onBack={handleBack}
            selectedBank={selectedBank}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-[#8D44AD] flex flex-col items-center justify-start px-2">
      <Stepper
        currentStep={
          ["bank", "products", "form", "van-type", "validation"].indexOf(currentStep)
        }
        steps={steps}
      />
      <Card className="w-full max-w-full sm:max-w-2xl md:max-w-3xl mt-4">
        <div className="px-2 sm:px-6 md:px-8 py-6 sm:py-8">{renderStep()}</div>
      </Card>
    </div>
  );
};
