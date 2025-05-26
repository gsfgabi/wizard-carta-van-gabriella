import React from 'react';
import Button from "../Button/Button";

interface ErrorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ErrorModal: React.FC<ErrorModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleLoginRedirect = () => {
    window.location.href = '/login';
  };

  return (
    <div className="flex flex-col items-center text-center">
      <h1 className="text-2xl font-bold mb-4 text-black">
        Ocorreu um erro ao carregar os bancos
      </h1>
      <p className="text-gray-700 mb-6">
        Não foi possível carregar as informações dos bancos após várias tentativas. Por favor, volte para a página de login.
      </p>
      <div className="w-full flex justify-center mt-6">
        <Button
            type="button"
            className="bg-[#8D44AD] text-white rounded-full px-10 py-2 font-semibold shadow-none hover:bg-[#7d379c] transition disabled:opacity-50"
            onClick={handleLoginRedirect}
        >
            Voltar para o Login
        </Button>
      </div>
    </div>
  );
}; 