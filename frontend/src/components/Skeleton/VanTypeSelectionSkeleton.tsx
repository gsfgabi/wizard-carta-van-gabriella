import React from 'react';

const VanTypeSelectionSkeleton = () => {
  return (
    <div className="w-full h-full">
      <div className="animate-pulse">

        <div className="h-8 bg-gray-300 rounded w-3/4 mb-4"></div>
        <div className="h-5 bg-gray-300 rounded w-1/2 mb-8"></div>

        <div className="space-y-4 mb-8">
          {[...Array(3)].map((_, index) => (
            <div key={index} className="flex items-center p-4 rounded-lg border-2 border-gray-300 bg-gray-100 h-16"></div>
          ))}
        </div>

        <div className="flex justify-between items-center mt-8">
          <div className="h-10 bg-gray-300 rounded-full px-10 py-2 w-full sm:w-auto"></div>
          <div className="h-10 bg-gray-300 rounded-full px-10 py-2 w-full sm:w-auto"></div>
        </div>
      </div>
    </div>
  );
};

export default VanTypeSelectionSkeleton; 