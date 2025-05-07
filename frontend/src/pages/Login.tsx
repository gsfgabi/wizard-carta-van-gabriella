import React from 'react';
import { Input } from '../components/Form/Input';
import { Button } from '../components/Form/Button';

interface LoginProps {
  onLoginSuccess: () => void;
}

export default function Login({ onLoginSuccess }: LoginProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    onLoginSuccess();
  };

  return (
    <div className="min-h-screen bg-primary flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h1 className="text-center font-bold text-xl mb-6">
          Acesse para emitir cartas de VAN
        </h1>
        <form onSubmit={handleSubmit}>
          <Input label="Email" type="email" placeholder="email@exemplo.com" />
          <Input label="Senha" type="password" placeholder="*********" />
          <Button label="Entrar" className="mt-4 w-full" />
        </form>
      </div>
    </div>
  );
}
