import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
}

const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, ...props }) => {
  const base = 'px-6 py-2 rounded font-semibold transition-colors';
  const variants = {
    primary: 'bg-primary text-white hover:bg-primaryDark',
    secondary: 'bg-white border border-primary text-primary hover:bg-primary/10',
  };
  return (
    <button className={`${base} ${variants[variant]}`} {...props}>
      {children}
    </button>
  );
};

export default Button; 