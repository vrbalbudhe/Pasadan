import React from "react";

const WhatWeDo = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-16">
      <div className="w-[90%] bg-[#4361ee] flex justify-center items-center flex-col p-10 rounded-[30px]">
        {/* Title */}
        <h1 className="text-5xl font-semibold text-white">What We Stand For</h1>
        <h1 className="text-lg font-semibold text-white mb-16">
          Empowering Change, One Step at a Time.
        </h1>

        {/* Cards Container */}
        <div className="w-[80%] h-fit flex justify-center items-center flex-wrap gap-5">
          {/* Card 1 - Kit Donation */}
          <div className="w-[400px] h-[300px] group relative bg-white p-8 rounded-sm shadow-sm transition-all duration-500 hover:scale-105 hover:shadow-xl">
            <div className="flex flex-col items-center justify-center h-full">
              <img
                src="/images/charity.gif"
                alt="Kit Donation"
                className="w-32 h-32 mb-6 transition-transform duration-500 group-hover:rotate-12"
              />
              <h2 className="text-2xl font-semibold text-gray-800 group-hover:text-[#032d60]">
                Kit Donation
              </h2>
              <p className="text-gray-700  font-semibold mt-4 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                Help donate grocery and essential items to underprivileged.
              </p>
            </div>
          </div>

          {/* Card 2 - Baby Care Donation */}
          <div className="w-[400px] h-[300px] group relative bg-white p-8 rounded-sm shadow-sm transition-all duration-500 hover:scale-105 hover:shadow-xl ">
            <div className="flex flex-col items-center justify-center h-full">
              <img
                src="/images/babycare.gif"
                alt="Baby Care Donation"
                className="w-32 h-32 mb-6 transition-transform duration-500 group-hover:rotate-12"
              />
              <h2 className="text-2xl font-semibold text-gray-800 group-hover:text-[#032d60]">
                Baby Care Donation
              </h2>
              <p className="text-gray-700 font-semibold mt-4 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                Donate baby care items like diapers, formula, and clothing.
              </p>
            </div>
          </div>

          {/* Card 3 - Bicycle Donation */}
          <div className=" w-[400px] h-[300px] group relative bg-white p-8 rounded-sm shadow-sm transition-all duration-500 hover:scale-105 hover:shadow-xl">
            <div className="flex flex-col items-center justify-center h-full">
              <img
                src="/images/bicycle.gif"
                alt="Bicycle Donation"
                className="w-32 h-32 mb-6 transition-transform duration-500 group-hover:rotate-12"
              />
              <h2 className="text-2xl font-semibold text-gray-800 group-hover:text-[#032d60]">
                Bicycle Donation
              </h2>
              <p className="text-gray-700 font-semibold mt-4 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                Help a child go to school by donating a bicycle.
              </p>
            </div>
          </div>

          {/* Card 4 - Medical Help */}
          <div className=" w-[400px] h-[300px] group relative bg-white p-8 rounded-sm shadow-sm transition-all duration-500 hover:scale-105 hover:shadow-xl">
            <div className="flex flex-col items-center justify-center h-full">
              <img
                src="/images/medical.gif"
                alt="Medical Help"
                className="w-32 h-32 mb-6 transition-transform duration-500 group-hover:rotate-12"
              />
              <h2 className="text-2xl font-semibold text-gray-800 group-hover:text-[#032d60]">
                Medical Help
              </h2>
              <p className="text-gray-700 font-semibold mt-4 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
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
