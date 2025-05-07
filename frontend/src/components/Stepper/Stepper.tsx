import React from 'react';

interface StepperProps {
  currentStep: number;
  steps: string[];
}

const Stepper: React.FC<StepperProps> = ({ currentStep, steps }) => (
  <nav className="w-full flex justify-center items-center py-6 bg-transparent">
    <ol className="flex w-full max-w-5xl mx-auto items-end">
      {steps.map((step, idx) => (
        <React.Fragment key={step}>
          <li className="flex flex-col items-center flex-1 min-w-[48px]">
            <div
              className={`flex items-center justify-center rounded-full font-bold border transition-all
                ${idx === currentStep ? 'bg-[#8B3DFF] text-white border-[#8B3DFF]' : 'bg-white text-[#8B3DFF] border-[#E0E0E0]'}
              `}
              style={{ width: 32, height: 32, fontSize: 14 }}
            >
              {idx + 1}
            </div>
            <span className={`mt-1 text-xs text-center ${idx === currentStep ? 'text-[#8B3DFF] font-semibold' : 'text-[#BDBDBD]'}`}
              style={{ maxWidth: 70, minHeight: 16, lineHeight: '16px' }}>
              {step}
            </span>
          </li>
          {idx < steps.length - 1 && (
            <div className="h-0.5 flex-1 bg-[#E0E0E0] mx-1 rounded-full" style={{ minWidth: 16, alignSelf: 'flex-end' }} />
          )}
        </React.Fragment>
      ))}
    </ol>
  </nav>
);

export default Stepper; 