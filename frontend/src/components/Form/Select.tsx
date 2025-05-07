import React from 'react';

interface Option {
  label: string;
  value: string;
}

interface SelectProps {
  label: string;
  options: Option[];
  value?: string;
  onChange: (value: string) => void;
  error?: string;
}

const Select: React.FC<SelectProps> = ({ label, options, value, onChange, error }) => (
  <div className="mb-4">
    <label className="block text-sm font-medium mb-1">{label}</label>
    <select
      className={`input-field ${error ? 'border-red-500' : ''}`}
      value={value}
      onChange={e => onChange(e.target.value)}
    >
      <option value="">Selecione...</option>
      {options.map(opt => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
    {error && <span className="text-red-500 text-xs">{error}</span>}
  </div>
);

export default Select;
