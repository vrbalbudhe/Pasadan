import React from 'react';

const WhatWeDo = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center ">
      {/* Title */}
      <h1 className="text-5xl font-bold text-gray-800 mb-12">What We Do</h1>

      {/* Cards Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full px-10">
        
        {/* Card 1 - Kit Donation (GIF) */}
        <div className="relative bg-white p-6 rounded-lg shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl h-64 hover:h-96 overflow-hidden">
          <div className="flex flex-col items-center justify-center h-full">
            <img
              src="/images/charity.gif"  
              alt="Kit Donation"
              className="w-32 h-32 transition-transform duration-300 group-hover:translate-y-[-10px]"
            />
            <h2 className="text-2xl font-bold mt-4">Kit Donation</h2>
            <p className="text-gray-600 mt-6 opacity-0 hover:opacity-100 transition-opacity duration-300">
              Help donate grocery and essential items to underprivileged.
            </p>
          </div>
        </div>

        {/* Card 2 - Baby Care Items Donation (GIF) */}
        <div className="relative bg-white p-6 rounded-lg shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl h-64 hover:h-96 overflow-hidden">
          <div className="flex flex-col items-center justify-center h-full">
            <img
              src="/images/babycare.gif"  
              alt="Baby Care Donation"
              className="w-32 h-32 transition-transform duration-300 group-hover:translate-y-[-10px]"
            />
            <h2 className="text-2xl font-bold mt-4">Baby Care Donation</h2>
            <p className="text-gray-600 mt-6 opacity-0 hover:opacity-100 transition-opacity duration-300">
              Donate baby care items like diapers, formula, and clothing.
            </p>
          </div>
        </div>

        {/* Card 3 - Bicycle Donation (GIF) */}
        <div className="relative bg-white p-6 rounded-lg shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl h-64 hover:h-96 overflow-hidden">
          <div className="flex flex-col items-center justify-center h-full">
            <img
              src="/images/bicycle.gif"  
              alt="Bicycle Donation"
              className="w-32 h-32 transition-transform duration-300 group-hover:translate-y-[-10px]"
            />
            <h2 className="text-2xl font-bold mt-4">Bicycle Donation</h2>
            <p className="text-gray-600 mt-6 opacity-0 hover:opacity-100 transition-opacity duration-300">
              Help a child go to school by donating a bicycle.
            </p>
          </div>
        </div>

        {/* Card 4 - Medical Help to Needy (GIF) */}
        <div className="relative bg-white p-6 rounded-lg shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl h-64 hover:h-96 overflow-hidden">
          <div className="flex flex-col items-center justify-center h-full">
            <img
              src="/images/medical.gif"  
              alt="Medical Help"
              className="w-32 h-32 transition-transform duration-300 group-hover:translate-y-[-10px]"
            />
            <h2 className="text-2xl font-bold mt-4">Medical Help</h2>
            <p className="text-gray-600 mt-6 opacity-0 hover:opacity-100 transition-opacity duration-300">
              Provide essential medical aid to those in need.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default WhatWeDo;
