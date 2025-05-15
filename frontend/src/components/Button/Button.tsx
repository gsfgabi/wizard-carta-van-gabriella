import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, className = '', ...props }) => {
  const base = 'button';
  const variantClass = `button-${variant}`;

  const responsiveClass = 'w-full sm:w-auto';

  return (
    <button className={`${base} ${variantClass} ${responsiveClass} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
