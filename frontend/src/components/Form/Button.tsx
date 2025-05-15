import React from 'react';

type ButtonProps = {
  label: string;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
};

export function Button({ label, className = '', type = "button", ...rest }: ButtonProps) {
  const responsiveClass = 'w-full sm:w-auto';

  return (
    <button
      type={type}
      className={`btn btn-primary ${responsiveClass} ${className}`}
      {...rest}
    >
      {label}
    </button>
  );
}

