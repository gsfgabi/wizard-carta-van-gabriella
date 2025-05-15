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
  const responsiveClass = 'w-full sm:w-auto';

  return (
    <div className="form-control mb-4">
      <label className="label">
        <span className="label-text">{label}</span>
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className={`input input-bordered ${responsiveClass} ${className}`}
        {...rest}
      />
    </div>
  );
}
