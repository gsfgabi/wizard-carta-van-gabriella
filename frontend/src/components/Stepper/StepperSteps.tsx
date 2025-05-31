import React from 'react';
import StepItem from './StepperItem';

interface StepperProps {
  currentStep: number;
  steps: string[];
  onStepClick?: (stepIndex: number) => void;
}

const Stepper: React.FC<StepperProps> = ({ currentStep, steps, onStepClick }) => (
  <nav className="w-full flex justify-center py-4 sm:py-6 md:py-8 overflow-x-auto">
    <div className="relative w-full max-w-full sm:max-w-3xl md:max-w-5xl mx-auto">
      
      {/*Renderização e comportamento entre linha e stepperItem*/}
      <ol className="flex flex-nowrap min-w-[320px] sm:min-w-0 w-full items-start">
        {steps.map((step, idx) => (
          <React.Fragment key={step}>
            
            {idx !== 0 && (
              <div
                className={`self-center flex-1 h-0.5 transition-colors duration-300 ${
                  idx <= currentStep ? 'bg-white opacity-50' : 'bg-white opacity-25'
                }`}
                style={{ marginBottom: 60 }}
              />
            )}

            {/* Etapas */}
            <StepItem
              label={step}
              index={idx}
              currentStep={currentStep}
              onClick={onStepClick} /* Função desativada */
            />
          </React.Fragment>
        ))}
      </ol>
    </div>
  </nav>
);

export default Stepper;
