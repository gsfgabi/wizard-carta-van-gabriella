import React from "react";
import { CheckIcon } from '@heroicons/react/24/outline';

interface StepperProps {
  currentStep: number;
  steps: string[];
}

const Stepper: React.FC<StepperProps> = ({ currentStep, steps }) => (
  <nav className="w-full flex justify-center items-center py-4 sm:py-6 md:py-8 bg-transparent overflow-x-auto">
    <div className="relative w-full max-w-full sm:max-w-3xl md:max-w-5xl mx-auto flex flex-col items-center min-w-0">
      <ol className="relative flex w-full items-center z-10 gap-0 sm:gap-2 md:gap-4 min-w-[340px] xs:min-w-[400px] sm:min-w-0">
        {steps.map((step, idx) => (
          <React.Fragment key={step}>
            {idx !== 0 && (
              <div
                className="flex-1 h-0.5 bg-white opacity-50"
                style={{ minWidth: 8 }}
              />
            )}
            <li className="flex flex-col items-center relative">
              <div
                className={`flex items-center justify-center w-10 h-10 rounded-full border-2 z-10 transition-all duration-200
                  ${
                    idx < currentStep
                      ? 'bg-white border-[#8D44AD]'
                      : idx === currentStep
                        ? 'bg-white border-[#8D44AD]'
                        : 'bg-transparent border-white'
                  }
                  text-lg font-bold
                `}
              >
                {idx < currentStep ? (
                  <CheckIcon className="h-6 w-6 text-[#8D44AD]" strokeWidth={2.5} />
                ) : (
                  <span className={idx === currentStep ? 'text-[#8D44AD]' : 'text-white'}>{idx + 1}</span>
                )}
              </div>
              <span
                className={`mt-2 text-[10px] xs:text-xs sm:text-sm text-center leading-tight transition-all duration-200
                  ${idx === currentStep ? 'text-white font-bold' : 'text-white font-normal opacity-80'}
                `}
                style={{ width: 60, maxWidth: 110 }}
              >
                {step}
              </span>
            </li>
          </React.Fragment>
        ))}
      </ol>
    </div>
  </nav>
);

export default Stepper;