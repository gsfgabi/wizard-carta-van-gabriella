import React from 'react';

const ValidationStepSkeleton = () => {
  return (
    <div className="w-full h-full">
      <div className="animate-pulse">

        <div className="h-8 bg-gray-300 rounded w-3/4 mb-4"></div>
        <div className="h-5 bg-gray-300 rounded w-1/2 mb-8"></div>

        <div className="mb-6">
          <div className="h-6 bg-gray-300 rounded w-1/4 mb-3"></div>
          <div className="flex flex-wrap gap-3">
            {[...Array(2)].map((_, index) => (
              <div key={index} className="h-8 bg-gray-300 rounded-full px-4 py-2 w-24"></div>
            ))}
          </div>
        </div>

        {/* Esqueleto da área da carta/documento */}
        <div className="relative flex items-center justify-center mb-6 bg-gray-100 rounded-lg p-6 h-64">
          <div className="h-4 bg-gray-300 rounded w-1/3 mb-4"></div>
          <div className="h-4 bg-gray-300 rounded w-2/3 mb-2"></div>
          <div className="h-4 bg-gray-300 rounded w-1/2"></div>
        </div>

        {/* Esqueletos das listas de produtos e VANs selecionados */}
        <div className="space-y-6">
          <div>
            <div className="h-6 bg-gray-300 rounded w-1/4 mb-2"></div>
            <div className="space-y-2">
              {[...Array(2)].map((_, index) => (
                <div key={index} className="flex items-center h-6 bg-gray-300 rounded w-full"></div>
              ))}
            </div>
          </div>
          <div>
            <div className="h-6 bg-gray-300 rounded w-1/4 mb-2"></div>
            <div className="space-y-2">
              {[...Array(1)].map((_, index) => (
                <div key={index} className="flex items-center h-6 bg-gray-300 rounded w-full"></div>
              ))}
            </div>
          </div>
        </div>

        {/* Botões de Ação */}
        <div className="flex justify-between items-center mt-8">
          <div className="h-10 bg-gray-300 rounded-full px-10 py-2 w-full sm:w-auto"></div>
          <div className="h-10 bg-gray-300 rounded-full px-10 py-2 w-full sm:w-auto"></div>
        </div>
      </div>
    </div>
  );
};

export default ValidationStepSkeleton; 