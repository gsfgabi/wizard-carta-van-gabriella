import React, { useState } from 'react';
import colors from '../themes/colors';
import InputField from '../components/Form/InputField';
import { Button } from '../components/Form/Button';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';

interface LoginProps {
  onLoginSuccess: () => void;
}

export default function Login({ onLoginSuccess }: LoginProps) {
  const [cnpj, setCnpj] = useState('');
  const [token, setToken] = useState('');
  const [showToken, setShowToken] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (cnpj === '12.345.678/0001-99' && token === 'plugbank123') {
      setError('');
      onLoginSuccess();
    } else {
      setError('CNPJ ou Token inválido.');
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{ background: '#8e44ad' }}
    >
      <div
        className="bg-white px-8 py-10 rounded-2xl shadow-lg w-full max-w-md flex flex-col items-center border border-[#d1b3e0]"
        style={{ boxShadow: '0 4px 24px 0 rgba(52, 0, 92, 0.10)' }}
      >
        <img
          src="/logo.png"
          alt="plugbank"
          className="h-16 mb-7 mt-2"
        />
        <h2 className="text-center font-bold text-xl mb-2 text-black">Seja bem vindo!</h2>
        <p className="text-center text-base mb-7 text-black">
          Acesse para criar uma nova Carta de VAN
        </p>
        <form onSubmit={handleSubmit} className="w-full">
          <div className="mb-4">
            <InputField
              label="CNPJ"
              type="text"
              placeholder="Insira o número de CNPJ"
              value={cnpj}
              onChange={e => setCnpj(e.target.value)}
            />
          </div>
          <div className="relative mb-2">
            <InputField
              label="Token"
              type={showToken ? 'text' : 'password'}
              placeholder="Insira o token de segurança"
              value={token}
              onChange={e => setToken(e.target.value)}
            />
            <span
              className="absolute right-3 top-9 cursor-pointer"
              onClick={() => setShowToken((v) => !v)}
              tabIndex={0}
              role="button"
              aria-label={showToken ? 'Ocultar token' : 'Mostrar token'}
            >
              {showToken ? (
                <EyeSlashIcon className="h-5 w-5 text-gray-500" />
              ) : (
                <EyeIcon className="h-5 w-5 text-gray-500" />
              )}
            </span>
          </div>
          <Button
            label="Acessar"
            type="submit"
            className="mt-7 w-full bg-[#8e44ad] hover:bg-[#7d379c] text-white text-lg font-medium rounded-full py-3 shadow-lg transition-colors duration-200"
          />
          {error && (
            <div className="mt-4 text-center text-red-600 text-sm font-medium">{error}</div>
          )}
        </form>
      </div>
    </div>
  );
}
