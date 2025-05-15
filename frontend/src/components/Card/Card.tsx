import React from 'react';

const Card: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <div className={`bg-white rounded-lg shadow-lg py-6 px-10 w-full max-w-5xl mx-auto relative ${className}`}>
    {children}
  </div>
);

export default Card;