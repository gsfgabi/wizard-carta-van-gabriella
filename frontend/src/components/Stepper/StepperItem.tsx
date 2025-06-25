import React from "react";

interface StepItemProps {
  label: string;
  index: number;
  currentStep: number;
  onClick?: (index: number) => void; // Navegação por clique caso reverta para botões
}

//Partes que envolvem a função de clicar convertidas para comentários:
const StepItem: React.FC<StepItemProps> = ({ label, index, currentStep /*, onClick*/ }) => {
  // Condições de estado das etapas
  const isCompleted = index < currentStep;
  const isActive = index === currentStep;
  const isClickable = isCompleted;

  // Classe para botões (largura fixa para igualar tamanho das etapas)
  const buttonClass = [
    "flex flex-col items-center gap-1 sm:gap-2 flex-shrink-0",
    "rounded-md transition-colors duration-200",
    // isClickable ? "cursor-pointer hover:bg-white/20" : "cursor-default",
    "w-full max-w-[80px] xs:max-w-[90px] sm:max-w-[110px] md:max-w-[125px]", // largura fixa responsiva
  ].join(" ");

  // Classe para círculos
  const circleClass = [
    "grid place-items-center w-7 h-7 xs:w-8 xs:h-8 sm:w-10 sm:h-10 rounded-full border-2 font-bold text-sm sm:text-lg",
    "transition-all duration-200",
    isCompleted || isActive ? "bg-white border-[#8D44AD]" : "bg-transparent border-white",
    isActive ? "text-[#8D44AD]" : "text-white",
    // isClickable ? "cursor-pointer" : "cursor-default",
  ].join(" ");

  // Classe para labels
  const labelClass = [
    "text-xs xs:text-sm text-center w-full",
    "line-clamp-2 sm:line-clamp-3",
    isActive ? "text-white font-bold" : "text-white opacity-80",
  ].join(" ");

  return (
    <li className="min-w-[4rem] xs:min-w-[5rem] max-w-[7rem] xs:max-w-[8rem] w-full px-1 flex-shrink-0">
      {/* Para ativar o botão, transforme div para button e restaure os comentários */}
      <div
        /* type="button" */
        /* onClick={() => isClickable && onClick?.(index)} */
        /* disabled={!isClickable} */
        className={buttonClass}
        style={{ userSelect: "none" }}
      >
        {/* Círculo da etapa */}
        <div className={circleClass} style={{ lineHeight: 1 }}>
          {isCompleted ? (
            <span className="text-[#8D44AD] text-sm sm:text-base md:text-lg relative top-[1px]">
              &#10003;
            </span>
          ) : (
            <span className="text-sm sm:text-base md:text-lg relative top-[1px]">{index + 1}</span>
          )}
        </div>

        {/* Label da etapa */}
        <span
          className={labelClass}
          style={{
            minWidth: "100%", // ocupa toda a largura fixa do botão
            maxWidth: "100%",
            display: "inline-block",
            wordBreak: "break-word", // quebra texto longo para evitar overflow
            textAlign: "center",
          }}
        >
          {label}
        </span>
      </div>
    </li>
  );
};

export default StepItem;
