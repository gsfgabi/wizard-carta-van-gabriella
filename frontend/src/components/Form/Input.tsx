import React from 'react';

type InputProps = {
  label: string;
  type?: string;
  placeholder?: string;
  name?: string;
  value?: string;
  className?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export function Input({ label, type = "text", placeholder, className = '', ...rest }: InputProps) {
  // Responsivo: ocupa toda a largura em telas pequenas, auto em md+
  const responsiveClass = 'w-full';

  return (
    <div className="form-control mb-3 sm:mb-4">
      <label className="label">
        <span className="label-text text-sm xs:text-base">{label}</span>
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className={`input input-bordered ${responsiveClass} ${className} text-sm xs:text-base py-2 xs:py-3 px-3 xs:px-4`}
        {...rest}
      />
    </div>
  );
}
