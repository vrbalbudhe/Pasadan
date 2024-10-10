import React, { useState, useEffect } from "react";
import pasaydanLogo from "../assets/pixelcut-export.png"; // Add the path to your logo

const images = ["/images/lp4.png", "/images/lp2.png", "/images/lp1.png", "/images/lp5.jpg"];

const LandingPage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTextVisible, setIsTextVisible] = useState(false);

  // Image change logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Trigger text animation when component mounts
  useEffect(() => {
    setTimeout(() => {
      setIsTextVisible(true);
    }, 300); // Delay to simulate animation trigger after render
  }, []);

  return (
    <div className="relative flex flex-col lg:flex-row min-h-screen bg-[#edf6f9]">
      {/* Left Section with text coming from left */}
      <div
        className={`bg-[#edf6f9] text-[#032d60] lg:w-[40%] flex flex-col justify-center p-10 lg:p-20 space-y-6 transform transition-all duration-1000 ${
          isTextVisible ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
        }`}
      >
        {/* Logo at the top */}
        <div className="flex justify-center">
          <img src={pasaydanLogo} alt="Logo" className="h-16 w-16 rounded-full" />
        </div>

        {/* Marathi Styled Text */}
        <div className="text-center">
          <h1 className="text-4xl lg:text-5xl font-bold italic" style={{ fontFamily: "Marathi Calligraphy" }}>
            पसायदान
          </h1>
          <p className="mt-4 text-lg lg:text-2xl font-semibold">जो जे वांछिल, तो तें लाहो । प्राणिजात ॥</p>
          <p className="text-sm italic mt-2">~ संत ज्ञानेश्वर महाराज ~</p>
        </div>

        {/* Motivational Text */}
        <div className="text-center">
          <p className="text-xl">You can make a difference too!</p>
        </div>

        {/* Donate Button */}
        <div className="flex justify-center">
          <button className="bg-[#032d60] text-white font-semibold py-2 px-8 rounded-full hover:bg-gray-800 transition-all">
            Donate Now
          </button>
        </div>
      </div>

      {/* Right Section with changing image and fading effect */}
      <div className="relative lg:w-[60%]">
        {/* Image Fading Effect */}
        <div
          className="absolute inset-0 transition-opacity duration-1000"
          style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
          key={currentImageIndex}
        >
          <img src={images[currentImageIndex]} alt="Nature" className="object-cover w-full h-full" />
        </div>

        {/* Fading effect between solid color and image */}
        <div className="absolute inset-0 w-[60%] bg-gradient-to-r from-[#edf6f9] to-transparent"></div>
      </div>
    </div>
  );
};

export default LandingPage;
