import React, { memo } from 'react';
import Button from '../../Button/Button';

interface CompletionStepProps {
  ticketNumber: string; 
  ticketLink: string; 
  onStartOver: () => void; 
}

export const CompletionStep = memo(({
  ticketNumber,
  ticketLink,
  onStartOver,
}: CompletionStepProps) => {
  return (
    <div className="flex flex-col items-center justify-center text-center w-full px-4 sm:px-6 md:px-0 py-8 sm:py-12 md:py-0 md:bg-transparent md:rounded-none md:shadow-none md:max-w-full md:mx-0 bg-white rounded-lg max-w-lg mx-auto">
      <h2 className="text-xl xs:text-2xl sm:text-3xl font-bold text-[#8D44AD] mb-4 sm:mb-6">Parabéns! Sua carta de VAN foi criada com sucesso.</h2>
      <p className="text-sm xs:text-base sm:text-lg text-gray-700 mb-4 sm:mb-6">
        O e-mail foi enviado e o ticket de atendimento foi aberto com sucesso.<br/>
        Você receberá as cartas em anexo diretamente no seu e-mail, conforme o banco selecionado.<br/>
        Se houver qualquer dúvida, acesse nosso <a href="https://tecnospeed.com.br/plugbank/" className="text-[#8D44AD] hover:underline" target="_blank" rel="noopener noreferrer">site aqui</a>.
      </p>
      <Button
        type="button"
        className="bg-[#8D44AD] text-white rounded-full px-8 xs:px-10 py-2 xs:py-3 font-semibold shadow-md hover:bg-[#7d379c] transition disabled:opacity-50 mt-4 w-full max-w-xs"
        onClick={onStartOver}
      >
        Início
      </Button>
    </div>
  );
}); 