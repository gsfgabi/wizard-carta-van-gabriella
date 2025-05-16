import React from 'react';

export interface ButtonProps {
  label: string;
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export function Button({ label, className = '', type = "button", ...rest }: ButtonProps) {
  return (
    <button
      type={type}
      className={`btn btn-primary ${className}`}
      {...rest}
    >
      {label}
    </button>
  );
}

