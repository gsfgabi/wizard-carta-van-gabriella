import React, { useState } from 'react';
import { BankSelection } from './steps/BankSelection';
import { ProductSelection } from './steps/ProductSelection';
import { FormStep } from './steps/FormStep';
import { ValidationStep } from './steps/ValidationStep';
import Card from '../Card/Card';

export type WizardStep = 'bank' | 'products' | 'form' | 'validation';

export const steps = [
  'Banco',
  'Produto',
  'Dados da empresa e conta',
  'Validação',
];

export const Wizard: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<WizardStep>('bank');
  const [selectedBank, setSelectedBank] = useState<number | null>(null);
  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);
  const [formData, setFormData] = useState<any>({});

  const handleNext = () => {
    switch (currentStep) {
      case 'bank':
        setCurrentStep('products');
        break;
      case 'products':
        setCurrentStep('form');
        break;
      case 'form':
        setCurrentStep('validation');
        break;
      default:
        break;
    }
  };

  const handleBack = () => {
    switch (currentStep) {
      case 'products':
        setCurrentStep('bank');
        break;
      case 'form':
        setCurrentStep('products');
        break;
      case 'validation':
        setCurrentStep('form');
        break;
      default:
        break;
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 'bank':
        return (
          <BankSelection
            onSelect={setSelectedBank}
            selectedBank={selectedBank}
            onNext={handleNext}
          />
        );
      case 'products':
        return (
          <ProductSelection
            selectedProducts={selectedProducts}
            onSelect={setSelectedProducts}
            onNext={handleNext}
            onBack={handleBack}
          />
        );
      case 'form':
        return (
          <FormStep
            formData={formData}
            onUpdate={setFormData}
            onNext={handleNext}
            onBack={handleBack}
          />
        );
      case 'validation':
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

  return (
    <Card className="w-full max-w-3xl mt-12">
      <div className="px-8 py-8">
        {renderStep()}
      </div>
    </Card>
  );
}; 