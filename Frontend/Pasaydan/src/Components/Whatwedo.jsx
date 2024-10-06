import React from 'react';

const WhatWeDo = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-16">
      {/* Title */}
      <h1 className="text-5xl font-semibold text-[#032d60] mb-16">
        What We Do
      </h1>

      {/* Cards Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 w-full px-8 lg:px-24">
        
        {/* Card 1 - Kit Donation */}
        <div className="group relative bg-white p-8 rounded-xl shadow-xl transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:bg-gradient-to-r from-blue-50 to-blue-100">
          <div className="flex flex-col items-center justify-center h-full">
            <img
              src="/images/charity.gif"
              alt="Kit Donation"
              className="w-32 h-32 mb-6 transition-transform duration-500 group-hover:rotate-12"
            />
            <h2 className="text-2xl font-semibold text-gray-800 group-hover:text-[#032d60]">
              Kit Donation
            </h2>
            <p className="text-gray-600 mt-4 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              Help donate grocery and essential items to underprivileged.
            </p>
          </div>
        </div>

        {/* Card 2 - Baby Care Donation */}
        <div className="group relative bg-white p-8 rounded-xl shadow-xl transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:bg-gradient-to-r from-blue-50 to-blue-100">
          <div className="flex flex-col items-center justify-center h-full">
            <img
              src="/images/babycare.gif"
              alt="Baby Care Donation"
              className="w-32 h-32 mb-6 transition-transform duration-500 group-hover:rotate-12"
            />
            <h2 className="text-2xl font-semibold text-gray-800 group-hover:text-[#032d60]">
              Baby Care Donation
            </h2>
            <p className="text-gray-600 mt-4 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              Donate baby care items like diapers, formula, and clothing.
            </p>
          </div>
        </div>

        {/* Card 3 - Bicycle Donation */}
        <div className="group relative bg-white p-8 rounded-xl shadow-xl transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:bg-gradient-to-r from-blue-50 to-blue-100">
          <div className="flex flex-col items-center justify-center h-full">
            <img
              src="/images/bicycle.gif"
              alt="Bicycle Donation"
              className="w-32 h-32 mb-6 transition-transform duration-500 group-hover:rotate-12"
            />
            <h2 className="text-2xl font-semibold text-gray-800 group-hover:text-[#032d60]">
              Bicycle Donation
            </h2>
            <p className="text-gray-600 mt-4 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              Help a child go to school by donating a bicycle.
            </p>
          </div>
        </div>

        {/* Card 4 - Medical Help */}
        <div className="group relative bg-white p-8 rounded-xl shadow-xl transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:bg-gradient-to-r from-blue-50 to-blue-100">
          <div className="flex flex-col items-center justify-center h-full">
            <img
              src="/images/medical.gif"
              alt="Medical Help"
              className="w-32 h-32 mb-6 transition-transform duration-500 group-hover:rotate-12"
            />
            <h2 className="text-2xl font-semibold text-gray-800 group-hover:text-[#032d60]">
              Medical Help
            </h2>
            <p className="text-gray-600 mt-4 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              Provide essential medical aid to those in need.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default WhatWeDo;
