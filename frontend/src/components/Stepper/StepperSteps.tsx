import React from "react";

interface StepperProps {
  currentStep: number;
  steps: string[];
}

const Stepper: React.FC<StepperProps> = ({ currentStep, steps }) => (
  <nav className="w-full flex justify-center items-center py-8 bg-transparent">
    <div className="relative w-full max-w-5xl mx-auto flex flex-col items-center">
      {/* Linha contínua atrás das bolinhas */}
      <div className="absolute top-4 left-0 right-0 h-0.5 bg-white opacity-50 z-0 rounded-full" />
      <ol className="relative flex w-full justify-between z-10">
        {steps.map((step, idx) => (
          <li key={step} className="flex flex-col items-center">
            <div
              className={`flex items-center justify-center w-8 h-8 rounded-full border-2
                ${idx === currentStep
                  ? 'bg-white border-white text-[#8B3DFF]'
                  : 'bg-transparent border-white text-white'
                }
                text-base
              `}
            >
              {idx + 1}
            </div>
            <span
              className={`mt-2 text-xs text-center leading-tight
                ${idx === currentStep
                  ? 'text-white font-bold'
                  : 'text-white opacity-80'
                }
              `}
              style={{ width: 110 }}
            >
              {step}
            </span>
          </li>
        ))}
      </ol>
    </div>
  </nav>
);

export default Stepper;