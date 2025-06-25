import React from 'react';
import StepItem from './StepperItem';

interface StepperProps {
  currentStep: number;
  steps: string[];
  onStepClick?: (stepIndex: number) => void;
}

const Stepper: React.FC<StepperProps> = ({ currentStep, steps, onStepClick }) => (
  <>
    {/* Stepper completo só em sm+ */}
    <nav className="hidden sm:flex w-full justify-center py-3 sm:py-4 md:py-6 lg:py-8 overflow-x-auto">
      <div className="relative w-full max-w-full sm:max-w-3xl md:max-w-5xl mx-auto px-2 sm:px-4">
        <ol className="flex flex-nowrap min-w-[280px] sm:min-w-0 w-full items-start">
          {steps.map((step, idx) => (
            <React.Fragment key={step}>
              {idx !== 0 && (
                <div
                  className={`self-center flex-1 h-0.5 transition-colors duration-300 ${
                    idx <= currentStep ? 'bg-white opacity-50' : 'bg-white opacity-25'
                  }`}
                  style={{ marginBottom: 40 }}
                />
              )}
              <StepItem
                label={step}
                index={idx}
                currentStep={currentStep}
                onClick={onStepClick}
              />
            </React.Fragment>
          ))}
        </ol>
      </div>
    </nav>
    {/* Stepper alternativo para mobile */}
    <div className="flex sm:hidden items-center justify-center py-2 w-full">
      <span className="text-xs font-semibold bg-[#8D44AD] text-white rounded-full px-3 py-1">
        Passo {currentStep + 1} de {steps.length}
      </span>
      <span className="ml-2 text-xs text-gray-200 truncate max-w-[60vw]">
        {steps[currentStep]}
      </span>
    </div>
  </>
);

export default Stepper;
