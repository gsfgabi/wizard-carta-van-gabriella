import React from "react";

//Componente apenas visual do stepper para página de introdução 
const Stepper: React.FC<{ steps: string[] }> = ({ steps }) => {
  const circleSize = 30; //Controla tamanho do círculo
  const lineTop = 15; // Altura da linha em relação ao topo do container
  const lineLenght = 80; //Comprimento da linha

  return (
    <nav className="w-full flex justify-center py-3 sm:py-4 md:py-6 bg-transparent overflow-x-auto">
      <div className="relative w-full max-w-full sm:max-w-3xl md:max-w-5xl mx-auto flex flex-col items-center px-2 sm:px-4">
        {/* Linha horizontal */}
        <div
          className="absolute h-0.5 z-0 rounded-full bg-purple-700"
          style={{
            top: lineTop,
            left: lineLenght,
            right: lineLenght,
            backgroundColor: "#8D44AD",
          }}
        />

        {/* Etapas */}
        <ol className="relative flex w-full justify-between z-10 gap-1 xs:gap-2 sm:gap-0">
          {steps.map((step, idx) => (
            <li
              key={step}
              className="flex flex-col items-center flex-1 min-w-[40px] xs:min-w-[48px] sm:min-w-[32px]"
            >
              <div
                className="flex items-center justify-center rounded-full transition-all text-white font-medium text-base xs:text-lg sm:text-base"
                style={{
                  width: circleSize,
                  height: circleSize,
                  marginBottom: 6,
                  backgroundColor: "#8D44AD",
                  border: `2px solid #8D44AD`,
                  zIndex: 1,
                }}
              >
                {idx + 1}
              </div>
              <span
                className="mt-1 text-center text-purple-700 font-normal text-xs xs:text-[13px] sm:text-sm leading-[14px] xs:leading-[16px]"
                style={{ maxWidth: 70 }}
              >
                {step}
              </span>
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
};

export default Stepper;
