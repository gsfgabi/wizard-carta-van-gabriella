import React from 'react';

const Card: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <div
    className={`
      bg-white rounded-lg shadow-lg
      py-3 px-4
      xs:py-4 xs:px-5
      sm:py-6 sm:px-6
      md:py-8 md:px-8
      lg:py-8 lg:px-10
      w-full
      max-w-xs xs:max-w-sm sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl
      mx-auto
      relative
      ${className}
    `}
  >
    {children}
  </div>
);

export default Card;