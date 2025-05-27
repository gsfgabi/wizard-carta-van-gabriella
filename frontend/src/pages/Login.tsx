import React, { useState } from 'react';
import colors from '../themes/colors';
import InputField from '../components/Form/InputField';
import { Button } from '../components/Form/Button';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';
import { isValidCNPJ, isValidToken } from '../utils/validation'; 
import { maskCNPJ } from '../utils/mask';

interface LoginProps {
  onLoginSuccess: () => void;
}

export default function Login({ onLoginSuccess }: LoginProps) {
  const [cnpj, setCnpj] = useState('');
  const [token, setToken] = useState('');
  const [showToken, setShowToken] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // Validações reais
  // const cnpjValid = isValidCNPJ(cnpj.replace(/\D/g, ''));
  const cnpjValid = true; 
  const tokenValid = isValidToken(token);
  const formValid = cnpjValid && tokenValid;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formValid) {
      setError(
        !cnpjValid
          ? 'CNPJ inválido.'
          : !tokenValid
          ? 'O token deve ter pelo menos 6 caracteres.'
          : 'Preencha todos os campos corretamente.'
      );
      return;
    }
    setError('');
    setLoading(true);

    // Simula uma requisição 
    setTimeout(() => {
      setLoading(false);
      // Simulação de resposta da API
      if (cnpj === '1' && token === '111111') {
        onLoginSuccess();
      } else {
        setError('CNPJ ou Token inválido.');
      }
    }, 1200);
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center px-6 sm:px-12"
      style={{ background: '#8e44ad' }}
    >
      <div
        className="bg-white px-4 sm:px-8 py-8 sm:py-10 rounded-2xl shadow-lg w-full max-w-md flex flex-col items-center border border-[#d1b3e0]"
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
              value={maskCNPJ(cnpj)}
              onChange={e => setCnpj(e.target.value)}
              maxLength={18}
              autoComplete="off"
            />
            {!cnpjValid && cnpj.length > 0 && (
              <div className="text-red-600 text-xs mt-1">CNPJ inválido.</div>
            )}
          </div>
          <div className="relative mb-2">
            <InputField
              label="Token"
              type={showToken ? 'text' : 'password'}
              placeholder="Insira o token de segurança"
              value={token}
              onChange={e => setToken(e.target.value)}
              maxLength={32}
              autoComplete="off"
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
            {!tokenValid && token.length > 0 && (
              <div className="text-red-600 text-xs mt-1">O token deve ter pelo menos 6 caracteres.</div>
            )}
          </div>
          <Button
            label={loading ? "Acessando..." : "Acessar"}
            type="submit"
            className={`mt-7 w-full bg-[#8e44ad] hover:bg-[#7d379c] text-white text-lg font-medium rounded-full py-3 shadow-lg transition-colors duration-200 ${(!formValid || loading) ? 'opacity-60 cursor-not-allowed' : ''}`}
            disabled={!formValid || loading}
          />
          {error && (
            <div className="mt-4 text-center text-red-600 text-sm font-medium">{error}</div>
          )}
        </form>
      </div>
    </div>
  );
}


