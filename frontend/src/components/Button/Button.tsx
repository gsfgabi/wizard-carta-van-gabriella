import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, className = '', ...props }) => {
  const base = 'button';
  const variantClass = `button-${variant}`;

  // Mantém o botão 100% da largura em telas pequenas e auto em telas médias pra cima
  const responsiveClass = 'w-full md:w-auto';

  return (
    <button className={`${base} ${variantClass} ${responsiveClass} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
