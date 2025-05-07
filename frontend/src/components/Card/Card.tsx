import React from 'react';

const Card: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <div className={`bg-white rounded-xl shadow-lg p-8 w-full max-w-3xl mx-auto ${className}`}>
    {children}
  </div>
);

export default Card; 