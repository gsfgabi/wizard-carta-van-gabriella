/**
 * Valida se um CNPJ é válido.
 * @param cnpj CNPJ em string
 * @returns boolean
 */
export function isValidCNPJ(cnpj: string): boolean {
  const cleaned = cnpj.replace(/[^\d]+/g, '');
  if (cleaned.length !== 14) return false;
  if (/^(\d)\1+$/.test(cleaned)) return false; 

  const calcDV = (base: string, pesoInicial: number): number => {
    let soma = 0;
    let peso = pesoInicial;
    for (let i = 0; i < base.length; i++) {
      soma += parseInt(base[i]) * peso--;
      if (peso < 2) peso = 9;
    }
    const resto = soma % 11;
    return resto < 2 ? 0 : 11 - resto;
  };

  const base = cleaned.slice(0, 12);
  const dv1 = calcDV(base, 5);
  const dv2 = calcDV(base + dv1, 6);

  return cleaned === base + dv1.toString() + dv2.toString();
}

/**
 * Valida se o token é válido.
 * @param token Token em string
 * @returns boolean
 */
export function isValidToken(token: string): boolean {
  return typeof token === 'string' && token.length >= 6;
}

