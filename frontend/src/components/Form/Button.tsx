import React from 'react';

type ButtonProps = {
  label: string;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
};

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

