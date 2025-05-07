import React from 'react';

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

const InputField: React.FC<InputFieldProps> = ({ label, error, ...props }) => (
  <div className="mb-4">
    <label className="block text-sm font-medium mb-1">{label}</label>
    <input
      className={`input-field ${error ? 'border-red-500' : ''}`}
      {...props}
    />
    {error && <span className="text-red-500 text-xs">{error}</span>}
  </div>
);

export default InputField; 