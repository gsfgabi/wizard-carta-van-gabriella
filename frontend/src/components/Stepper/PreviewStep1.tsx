import React, { useState, useEffect } from "react";
import Card from "../Card/Card.tsx";

interface Bank {
  code: string;
  name: string;
}

interface PreviewStep1Props {
  selectedBank?: Bank | null; // prop opcional
}

export const PreviewStep1: React.FC<PreviewStep1Props> = ({ selectedBank }) => {
  const [expanded, setExpanded] = useState(false);
  const [finalBankSelected, setFinalBankSelected] = useState<Bank | null>(null);

  useEffect(() => {
    if (selectedBank) {
      setFinalBankSelected(selectedBank);
    } else {
      const savedBank = localStorage.getItem("selectedBank");
      if (savedBank) {
        try {
          setFinalBankSelected(JSON.parse(savedBank));
        } catch {
          setFinalBankSelected(null);
        }
      } else {
        setFinalBankSelected(null);
      }
    }
  }, [selectedBank]);

  return (
    <Card className="cursor-pointer transition-all duration-300 overflow-hidden">
      <div
        onClick={() => setExpanded(!expanded)}
        className="flex justify-between items-center"
      >
        <h3 className="text-lg font-semibold text-[#8D44AD]">
          1. Seleção do Banco
        </h3>
        <span className="text-[#8D44AD]">{expanded ? "▲" : "▼"}</span>
      </div>

      {expanded && (
        <div className="mt-4 pt-4 border-t border-[#ECECEC] animate-fadeIn">
          {finalBankSelected ? (
            <div className="space-y-2">
              <p className="text-gray-700">
                <span className="font-medium">Banco selecionado:</span>{" "}
                {finalBankSelected.name}
              </p>
              <p className="text-gray-700">
                <span className="font-medium">Código:</span>{" "}
                {finalBankSelected.code}
              </p>
            </div>
          ) : (
            <p className="text-gray-500 italic">Nenhum banco selecionado</p>
          )}
        </div>
      )}
    </Card>
  );
};
