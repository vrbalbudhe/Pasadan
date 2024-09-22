import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa'; // For the double inverted commas icon

const Vision = () => {
  return (
    <div className="flex flex-col justify-center items-center py-10 bg-[#edf6f9]">
      {/* Heading */}
      <h2 className="text-4xl font-bold text-[#032d60] mb-10">Our Vision and Mission</h2>

      <div className="flex justify-center items-center space-x-8">
        {/* Vision Card */}
        <div className="group w-80 h-60 [perspective:1000px]">
          <div className="relative w-full h-full transition-transform duration-1000 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
            {/* Front Side */}
            <div className="absolute inset-0 bg-[#032d60] text-white flex items-center justify-center text-2xl font-semibold [backface-visibility:hidden]">
              VISION
            </div>
            {/* Back Side */}
            <div className="absolute inset-0 bg-[#edf6f9] text-[#032d60] border-2 border-[#032d60] p-6 flex flex-col items-center justify-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
              <FaQuoteLeft className="text-3xl text-[#032d60] mb-2" />
              <p className="text-center">
                To prescribe - by preach or by practice - the remedy to human suffering, whether spiritual, moral, physical, or material.
              </p>
            </div>
          </div>
        </div>

        {/* Mission Card */}
        <div className="group w-80 h-60 [perspective:1000px]">
          <div className="relative w-full h-full transition-transform duration-1000 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
            {/* Front Side */}
            <div className="absolute inset-0 bg-[#032d60] text-white flex items-center justify-center text-2xl font-semibold [backface-visibility:hidden]">
              MISSION
            </div>
            {/* Back Side */}
            <div className="absolute inset-0 bg-[#edf6f9] text-[#032d60] border-2 border-[#032d60] p-6 flex flex-col items-center justify-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
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


