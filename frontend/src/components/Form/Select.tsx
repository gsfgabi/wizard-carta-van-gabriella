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
  <div className="mb-3 sm:mb-4 w-full">
    <label className="block text-sm xs:text-base font-medium mb-1">{label}</label>
    <select
      className={`input-field w-full text-sm xs:text-base py-2 xs:py-3 px-3 xs:px-4 ${error ? 'border-red-500' : ''}`}
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
