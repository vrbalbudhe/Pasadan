import React, { useRef, useEffect } from 'react';

const Committee = () => {
  const sectionsRef = useRef([]);

  // Adding useEffect to handle opacity and transition when the component loads
  useEffect(() => {
    if (sectionsRef.current[3]) {
      sectionsRef.current[3].classList.remove('opacity-0', 'translate-y-8');
    }
  }, []);

  return (
    <div className="flex flex-col justify-center items-center py-10">
      {/* Heading */}
      <h2 className="text-4xl font-bold text-[#032d60] mb-10">Our Executive Committee</h2>

      {/* Image Cards */}
      <div className="flex justify-center space-x-8 mb-10">
        {/* Card 1 */}
        <div className="w-60 h-80 bg-[#edf6f9]  shadow-md rounded-lg overflow-hidden">
          <img
            src="https://via.placeholder.com/150"
            alt="Committee Member 1"
            className="w-full h-3/4 object-cover"
          />
          <div className="p-4 text-center font-semibold text-[#032d60]">Vilas Khade</div>
        </div>

        {/* Card 2 */}
        <div className="w-60 h-80 bg-[#edf6f9]  shadow-md rounded-lg overflow-hidden">
          <img
            src="https://via.placeholder.com/150"
            alt="Committee Member 2"
            className="w-full h-3/4 object-cover"
          />
          <div className="p-4 text-center font-semibold text-[#032d60]">Rajesh Badre</div>
        </div>

        {/* Card 3 */}
        <div className="w-60 h-80 bg-[#edf6f9] shadow-md rounded-lg overflow-hidden">
          <img
            src="https://via.placeholder.com/150"
            alt="Committee Member 3"
            className="w-full h-3/4 object-cover"
          />
          <div className="p-4 text-center font-semibold text-[#032d60]">Shraddha Borkar</div>
        </div>
      </div>

      {/* Executive Committee */}
      <div
        ref={(el) => (sectionsRef.current[3] = el)}
        className="w-full h-fit flex flex-col justify-center items-center mt-10 section opacity-100 translate-y-0 transition-opacity duration-700 ease-in-out"
      >
    
        <div className="flex flex-wrap justify-center items-center mt-4">
          
          <p className="border border-slate-300 px-4 py-2 shadow-sm text-md hover:bg-[#032d60] hover:text-white font-semibold text-[#032d60] m-4">
            Usha Girish
          </p>
          <p className="border border-slate-300 px-4 py-2 shadow-sm text-md hover:bg-[#032d60] hover:text-white font-semibold text-[#032d60] m-4">
            Sanjay Kamble
          </p>
          <p className="border border-slate-300 px-4 py-2 shadow-sm text-md hover:bg-[#032d60] hover:text-white font-semibold text-[#032d60] m-4">
            Varsha Yelge
          </p>
          <p className="border border-slate-300 px-4 py-2 shadow-sm text-md hover:bg-[#032d60] hover:text-white font-semibold text-[#032d60] m-4">
            Avadhut Joshi
          </p>
        </div>
      </div>
    </div>
  );
};

export default Committee;
