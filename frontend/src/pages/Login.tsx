import React, { useState } from 'react';
import InputField from '../components/Form/InputField';
import { Button } from '../components/Form/Button';

interface LoginProps {
  onLoginSuccess: () => void;
}

export default function Login({ onLoginSuccess }: LoginProps) {
  const [cnpj, setCnpj] = useState('12.345.678/0001-99'); // Usuário teste
  const [token, setToken] = useState('plugank123');      // Token teste

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLoginSuccess();
  };

  return (
    <div className="min-h-screen bg-[#8e44ad] flex items-center justify-center">
      <div className="bg-white p-8 rounded-xl shadow-lg w-96 flex flex-col items-center">
        {/* Logo */}
        <img
          src="src\assets\logo.png"
          alt="plugbank"
          className="h-21 mb-6"
        />
        <h2 className="text-center font-bold text-lg mb-1">Seja bem vindo!</h2>
        <p className="text-center text-base mb-6 text-black">
          Acesse para criar uma nova Carta de VAN
        </p>
        <form onSubmit={handleSubmit} className="w-full">
          <InputField
            label="CNPJ"
            type="text"
            placeholder="Insira o número de CNPJ"
            value={cnpj}
            onChange={e => setCnpj(e.target.value)}
          />
          <InputField
            label="Token"
            type="password"
            placeholder="Insira o token de segurança"
            className="mt-2"
            value={token}
            onChange={e => setToken(e.target.value)}
          />
          <Button
            label="Acessar"
            type="submit"
            className="mt-6 w-full bg-[#8e44ad] hover:bg-[#7d379c] text-white text-lg font-medium rounded-full py-3"
          />
        </form>
      </div>
    </div>
  );
}
