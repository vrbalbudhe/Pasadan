import React from "react";

const WhatWeDo = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-16">
      <div className="w-[90%] bg-[#032d60] flex justify-between items-center flex-col lg:flex-row p-10 rounded-[30px]">
        
        {/* Left Side: Title and Subheading */}
        <div className="w-full lg:w-1/3 text-left flex flex-col justify-center items-start p-5">
          <h1 className="text-5xl font-bold text-white font-serif">What We Stand For</h1>
          <h2 className="text-lg font-semibold text-white mt-4">
            Empowering Change, One Step at a Time.
          </h2>
        </div>
        
        {/* Right Side: Cards Container */}
        <div className="w-full lg:w-2/3 flex flex-wrap justify-center items-center gap-5">
          {/* Card 1 - Kit Donation */}
          <div className="w-[280px] h-[250px] group relative bg-white p-6 rounded-sm shadow-sm transition-all duration-500 hover:scale-105 hover:shadow-xl">
            <div className="flex flex-col items-center justify-center h-full">
              <img
                src="/images/charity.gif"
                alt="Kit Donation"
                className="w-24 h-24 mb-4 transition-transform duration-500 group-hover:rotate-12"
              />
              <h2 className="text-xl font-semibold text-gray-800 group-hover:text-[#032d60]">
                Kit Donation
              </h2>
              <p className="text-gray-700 font-semibold mt-2 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                Help donate grocery and essential items to the underprivileged.
              </p>
            </div>
          </div>

          {/* Card 2 - Baby Care Donation */}
          <div className="w-[280px] h-[250px] group relative bg-white p-6 rounded-sm shadow-sm transition-all duration-500 hover:scale-105 hover:shadow-xl ">
            <div className="flex flex-col items-center justify-center h-full">
              <img
                src="/images/babycare.gif"
                alt="Baby Care Donation"
                className="w-24 h-24 mb-4 transition-transform duration-500 group-hover:rotate-12"
              />
              <h2 className="text-xl font-semibold text-gray-800 group-hover:text-[#032d60]">
                Baby Care Donation
              </h2>
              <p className="text-gray-700 font-semibold mt-2 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                Donate baby care items like diapers, formula, and clothing.
              </p>
            </div>
          </div>

          {/* Card 3 - Bicycle Donation */}
          <div className="w-[280px] h-[250px] group relative bg-white p-6 rounded-sm shadow-sm transition-all duration-500 hover:scale-105 hover:shadow-xl">
            <div className="flex flex-col items-center justify-center h-full">
              <img
                src="/images/bicycle.gif"
                alt="Bicycle Donation"
                className="w-24 h-24 mb-4 transition-transform duration-500 group-hover:rotate-12"
              />
              <h2 className="text-xl font-semibold text-gray-800 group-hover:text-[#032d60]">
                Bicycle Donation
              </h2>
              <p className="text-gray-700 font-semibold mt-2 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                Help a child go to school by donating a bicycle.
              </p>
            </div>
          </div>

          {/* Card 4 - Medical Help */}
          <div className="w-[280px] h-[250px] group relative bg-white p-6 rounded-sm shadow-sm transition-all duration-500 hover:scale-105 hover:shadow-xl">
            <div className="flex flex-col items-center justify-center h-full">
              <img
                src="/images/medical.gif"
                alt="Medical Help"
                className="w-24 h-24 mb-4 transition-transform duration-500 group-hover:rotate-12"
              />
              <h2 className="text-xl font-semibold text-gray-800 group-hover:text-[#032d60]">
                Medical Help
              </h2>
              <p className="text-gray-700 font-semibold mt-2 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                Provide essential medical aid to those in need.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
