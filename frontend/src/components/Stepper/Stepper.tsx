import React from "react";

/**
 * Componente apenas visual do stepper
 * @param steps - array com nome de cada etapa
 */
const Stepper: React.FC<{ steps: string[] }> = ({ steps }) => {
  const circleSize = 30; //Controla tamanho do círculo
  const lineTop = 15; // Altura da linha em relação ao topo do container
  const lineLenght = 64; //Comprimento da linha

  return (
    <nav className="w-full flex justify-center py-4 sm:py-6 bg-transparent overflow-x-auto">
      <div className="relative w-full max-w-full sm:max-w-3xl md:max-w-5xl mx-auto flex flex-col items-center">
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
        <ol className="relative flex w-full justify-between z-10 gap-2 sm:gap-0">
          {steps.map((step, idx) => (
            <li
              key={step}
              className="flex flex-col items-center flex-1 min-w-[48px] sm:min-w-[32px]"
            >
              <div
                className="flex items-center justify-center rounded-full transition-all text-white font-medium text-lg sm:text-base"
                style={{
                  width: circleSize,
                  height: circleSize,
                  marginBottom: 8,
                  backgroundColor: "#8D44AD",
                  border: `2px solid #8D44AD`,
                  zIndex: 1,
                }}
              >
                {idx + 1}
              </div>
              <span
                className="mt-1 text-center text-purple-700 font-normal text-[13px] sm:text-sm leading-[16px]"
                style={{ maxWidth: 80 }}
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
