import React, { useState } from 'react';
import colors from '../themes/colors';
import InputField from '../components/Form/InputField';
import { Button } from '../components/Form/Button';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';
import { isValidCNPJ, isValidToken } from '../utils/validation'; 
import { maskCNPJ } from '../utils/mask';
import { api } from '../services/api';

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

    try {
      const response = await api.post('/auth/login', {
        cnpj: cnpj.replace(/\D/g, ''),
        token
      });
      const jwtToken = response.data.access_token;
      if (jwtToken) {
        localStorage.setItem('token', jwtToken);
        localStorage.setItem('cnpj', cnpj.replace(/\D/g, ''));
        setLoading(false);
        onLoginSuccess();
      } else {
        setLoading(false);
        setError('Resposta inválida do servidor.');
      }
    } catch (err: any) {
      setLoading(false);
      if (err.response && err.response.data && err.response.data.message) {
        setError(err.response.data.message);
      } else {
        setError('CNPJ ou Token inválido.');
      }
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 xs:px-6 sm:px-12"
      style={{ background: '#8e44ad' }}
    >
      <div
        className="bg-white px-4 xs:px-6 sm:px-8 py-6 xs:py-8 sm:py-10 rounded-2xl shadow-lg w-full max-w-sm xs:max-w-md flex flex-col items-center border border-[#d1b3e0]"
        style={{ boxShadow: '0 4px 24px 0 rgba(52, 0, 92, 0.10)' }}
      >
        <img
          src="/logo.png"
          alt="plugbank"
          width={120}
          height={48}
          className="h-12 xs:h-14 sm:h-16 mb-5 xs:mb-6 sm:mb-7 mt-2 w-auto"
        />
        <h2 className="text-center font-bold text-lg xs:text-xl mb-2 text-black">Seja bem vindo!</h2>
        <p className="text-center text-sm xs:text-base mb-5 xs:mb-6 sm:mb-7 text-black">
          Acesse para criar uma nova Carta de VAN
        </p>
        <form onSubmit={handleSubmit} className="w-full">
          <div className="mb-3 xs:mb-4">
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
            <button
              type="button"
              className="absolute right-3 inset-y-0 my-auto min-w-[44px] min-h-[44px] flex items-center justify-center bg-transparent border-none p-0 m-0 rounded cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#8D44AD]"
              style={{ boxShadow: 'none' }}
              onClick={() => setShowToken((v) => !v)}
              aria-label={showToken ? 'Ocultar token' : 'Mostrar token'}
            >
              {showToken ? (
                <EyeSlashIcon className="h-4 w-4 xs:h-5 xs:w-5 text-gray-500" />
              ) : (
                <EyeIcon className="h-4 w-4 xs:h-5 xs:w-5 text-gray-500" />
              )}
            </button>
            {!tokenValid && token.length > 0 && (
              <div className="text-red-600 text-xs mt-1">O token deve ter pelo menos 6 caracteres.</div>
            )}
          </div>
          <Button
            label={loading ? "Acessando..." : "Acessar"}
            type="submit"
            className={`mt-5 xs:mt-6 sm:mt-7 w-full bg-[#8e44ad] hover:bg-[#7d379c] text-white text-base xs:text-lg font-medium rounded-full py-2 xs:py-3 shadow-lg transition-colors duration-200 ${(!formValid || loading) ? 'opacity-60 cursor-not-allowed' : ''}`}
            disabled={!formValid || loading}
          />
          {error && (
            <div className="mt-3 xs:mt-4 text-center text-red-600 text-xs xs:text-sm font-medium">{error}</div>
          )}
        </form>
      </div>
    </div>
  );
}


