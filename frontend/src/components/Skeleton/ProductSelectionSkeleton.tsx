import React from 'react';

const ProductSelectionSkeleton = () => {
  return (
    <div className="w-full h-full px-0 py-0">
      <div className="animate-pulse">

        <div className="h-8 bg-gray-300 rounded w-3/4 mb-4"></div>
        <div className="h-5 bg-gray-300 rounded w-1/2 mb-8"></div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[...Array(4)].map((_, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center rounded-xl border-2 border-gray-300 bg-gray-100 px-4 py-10 transition min-h-[160px] h-full"
            >
              <div className="h-10 w-10 bg-gray-300 rounded-full mb-3"></div>
              <div className="h-6 bg-gray-300 rounded w-3/5 mb-2"></div>
              <div className="h-4 bg-gray-300 rounded w-2/5"></div>
            </div>
          ))}
        </div>

        {/* Botões de navegação */}
        <div className="flex flex-col sm:flex-row justify-between items-center mt-8 gap-4">
          <div className="h-10 bg-gray-300 rounded-full px-10 py-2 w-full sm:w-auto"></div>
          <div className="h-10 bg-gray-300 rounded-full px-10 py-2 w-full sm:w-auto"></div>
        </div>
      </div>
    </div>
  );
};

export default ProductSelectionSkeleton; 