import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, className = '', ...props }) => {
  const base = 'button';
  const variantClass = `button-${variant}`;

  // Mantém o botão 100% da largura em telas pequenas e auto em telas médias pra cima
  const responsiveClass = 'w-full sm:w-auto text-sm xs:text-base py-2 xs:py-3 px-4 xs:px-6';

  return (
    <button className={`${base} ${variantClass} ${responsiveClass} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
