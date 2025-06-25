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
    <div className="flex flex-col items-center justify-center text-center">
      <h2 className="text-2xl font-bold text-[#8D44AD] mb-4">Parabéns! Sua carta de VAN foi criada com sucesso.</h2>
      <p className="text-base text-gray-700 mb-4">
        O e-mail foi enviado e o ticket de atendimento foi aberto com sucesso.<br/>
        Você receberá as cartas em anexo diretamente no seu e-mail, conforme o banco selecionado.<br/>
        Se houver qualquer dúvida, acesse nosso <a href="https://tecnospeed.com.br/plugbank/" className="text-[#8D44AD] hover:underline" target="_blank" rel="noopener noreferrer">site aqui</a>.
      </p>
      <Button
        type="button"
        className="bg-[#8D44AD] text-white rounded-full px-10 py-2 font-semibold shadow-md hover:bg-[#7d379c] transition disabled:opacity-50 mt-4"
        onClick={onStartOver}
      >
        Início
      </Button>
    </div>
  );
}); 