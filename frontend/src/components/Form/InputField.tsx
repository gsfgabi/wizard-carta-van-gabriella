import React from 'react';

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  className?: string;
}

const InputField: React.FC<InputFieldProps> = ({ label, error, className = '', ...props }) => (
  <div className="mb-4 w-full">
    <label className="block text-sm font-semibold mb-1 text-black">{label}</label>
    <input
      className={`
        w-full
        rounded-lg
        border
        border-gray-300
        bg-white
        px-4
        py-3
        text-base
        focus:outline-none
        focus:ring-2
        focus:ring-[#8e44ad]
        focus:border-[#8e44ad]
        transition
        placeholder-gray-400
        ${error ? 'border-red-500' : ''}
        ${className}
      `}
      aria-invalid={!!error}
      aria-describedby={error ? `${props.id || label}-error` : undefined}
      {...props}
    />
    <span
      id={`${props.id || label}-error`}
      className={`block text-xs h-4 ${error ? 'text-red-500' : 'text-transparent'}`}
      aria-live="polite"
      style={{ minHeight: '1rem', display: 'block' }}
    >
      {error || '\u00A0'}
    </span>
  </div>
);

export default InputField;