import React from 'react';

const BankSelectionSkeleton = () => {
  return (
    <div className="w-full max-w-5xl mx-auto px-2">
      <div className="animate-pulse">
        <div className="h-8 bg-gray-300 rounded w-3/4 mb-4"></div>
        <div className="h-5 bg-gray-300 rounded w-1/2 mb-6"></div>

        <div className="h-12 bg-gray-300 rounded-lg mb-12"></div>

        <div className="flex flex-col sm:flex-row gap-4 justify-end">
          <div className="h-10 bg-gray-300 rounded-full px-10 py-2 w-full sm:w-auto"></div>
          <div className="h-10 bg-gray-300 rounded-full px-10 py-2 w-full sm:w-auto"></div>
        </div>
      </div>
    </div>
  );
};

export default BankSelectionSkeleton; 