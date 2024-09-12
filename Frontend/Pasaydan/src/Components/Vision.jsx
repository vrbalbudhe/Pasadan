import React from 'react';

const Vision = () => {
  return (
    <div className="flex justify-center items-center space-x-8 py-10">
      {/* Vision Card */}
      <div className="group w-80 h-60 perspective">
        <div className="relative w-full h-full transition-transform duration-1000 transform-style-3d group-hover:rotate-y-180">
          {/* Front Side */}
          <div className="absolute inset-0 bg-[#032d60] text-white flex items-center justify-center text-2xl font-semibold backface-hidden">
            VISION
          </div>
          {/* Back Side */}
          <div className="absolute inset-0 bg-[#edf6f9] text-[#032d60] border-2 border-[#032d60] p-6 flex flex-col items-center justify-center rotate-y-180 backface-hidden">
            <span className="text-3xl text-[#032d60] mb-2">“</span>
            <p className="text-center">
              To prescribe - by preach or by practice - the remedy to human
              suffering, whether spiritual, moral, physical, or material.
            </p>
          </div>
        </div>
      </div>

      {/* Mission Card */}
      <div className="group w-80 h-60 perspective">
        <div className="relative w-full h-full transition-transform duration-1000 transform-style-3d group-hover:rotate-y-180">
          {/* Front Side */}
          <div className="absolute inset-0 bg-[#032d60] text-white flex items-center justify-center text-2xl font-semibold backface-hidden">
            MISSION
          </div>
          {/* Back Side */}
          <div className="absolute inset-0 bg-[#edf6f9] text-[#032d60] border-2 border-[#032d60] p-6 flex flex-col items-center justify-center rotate-y-180 backface-hidden">
            <span className="text-3xl text-[#032d60] mb-2">“</span>
            <p className="text-center">
              To adopt ways and means for the spiritual, moral & material progress of society based on Indian culture and traditions...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vision;
