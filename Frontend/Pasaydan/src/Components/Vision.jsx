import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa'; // For the double inverted commas icon

const Vision = () => {
  return (
    <div 
      className="flex flex-col justify-center items-center py-14 bg-cover bg-center"
      style={{
        backgroundImage: `url('/images/Mis.png')`, // Replace with the correct path to your image
      }}
    >
      {/* Heading */}
      <h2 className="text-5xl font-bold text-slate-900 mb-20">Our Vision and Mission</h2>

      <div className="flex justify-center items-center space-x-8">
        {/* Vision Card */}
        <div className="group w-96 h-60 [perspective:1000px]">
          <div className="relative w-full h-full transition-transform duration-1000 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
            {/* Front Side */}
            <div className="absolute inset-0 bg-[#032d60] rounded-lg text-white flex items-center justify-center text-2xl font-semibold [backface-visibility:hidden]">
              VISION
            </div>
            {/* Back Side */}
            <div className="absolute inset-0 bg-white text-[#032d60] border-2 shadow-md rounded-lg p-6 flex flex-col items-center justify-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
              <FaQuoteLeft className="text-3xl text-[#032d60] mb-2" />
              <p className="text-center">
                To prescribe - by preach or by practice - the remedy to human suffering, whether spiritual, moral, physical, or material.
              </p>
            </div>
          </div>
        </div>

        {/* Mission Card */}
        <div className="group w-96 h-60 [perspective:1000px]">
          <div className="relative w-full h-full transition-transform duration-1000 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
            {/* Front Side */}
            <div className="absolute inset-0 bg-[#032d60] rounded-lg text-white flex items-center justify-center text-2xl font-semibold [backface-visibility:hidden]">
              MISSION
            </div>
            {/* Back Side */}
            <div className="absolute inset-0 bg-white text-[#032d60] border-2 shadow-md rounded-lg p-6 flex flex-col items-center justify-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
              <FaQuoteLeft className="text-3xl text-[#032d60] mb-2" />
              <p className="text-center">
                To adopt ways and means for the spiritual, moral & material progress of society based on Indian culture and traditions...
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vision;



