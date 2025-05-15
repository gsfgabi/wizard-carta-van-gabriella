import React from "react";

interface StepperProps {
  currentStep: number;
  steps: string[];
}

const Stepper: React.FC<StepperProps> = ({ currentStep, steps }) => (
  <nav className="w-full flex justify-center items-center py-4 sm:py-6 bg-transparent overflow-x-auto">
    <div className="relative w-full max-w-full sm:max-w-3xl md:max-w-5xl mx-auto flex flex-col items-center">
      <div className="absolute top-5 left-0 right-0 h-0.5 bg-[#8D44AD] z-0 rounded-full" />
      <ol className="relative flex w-full justify-between z-10 gap-2 sm:gap-0">
        {steps.map((step, idx) => (
          <li
            key={step}
            className="flex flex-col items-center flex-1 min-w-[60px] sm:min-w-[32px]"
          >
            <div
              className={`flex items-center justify-center rounded-full transition-all
                bg-[#8D44AD]
              `}
              style={{
                width: 32,
                height: 32,
                marginBottom: 8,
                fontWeight: 500,
                fontSize: 18,
                color: "#fff",
                border: "2px solid #8D44AD",
                zIndex: 1,
              }}
            >
              {idx + 1}
            </div>
            <span
              className="mt-1 text-xs sm:text-sm text-center"
              style={{
                color: "#8D44AD",
                fontWeight: 400,
                maxWidth: 80,
                lineHeight: "16px",
                fontSize: 13,
              }}
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
