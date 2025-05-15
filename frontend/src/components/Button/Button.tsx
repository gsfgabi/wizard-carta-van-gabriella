import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
}

const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, ...props }) => {
  const base = 'button'; // usa os estilos globais definidos para <button>
  const variantClass = `button-${variant}`;

  return (
    <button className={`${base} ${variantClass}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
