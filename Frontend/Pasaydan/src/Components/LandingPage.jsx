import React, { useState, useEffect } from "react";

    const images = [
        "/images/login_jpg.jpeg",
        "/images/signup_jpg.jpeg",// Ensure these paths are correct
      ];
  

const LandingPage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Image carousel logic to change images every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000); // 2 seconds interval

    return () => clearInterval(interval); // Clean up the interval
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 py-12">
        
        {/* Left Side - Text */}
        <div className="md:w-1/2 flex flex-col justify-center items-start">
          <h1 className="text-5xl font-bold text-gray-800 leading-tight">
             Adding <span className="text-yellow-500">colours</span> to Life
          </h1>
          <button className="bg-black text-white py-3 px-6 mt-6 rounded-full shadow-lg hover:bg-gray-900 transition duration-300">
            Donate Now!
          </button>
        </div>

        {/* Right Side - Carousel of Images */}
        <div className="md:w-1/2 flex justify-center items-center relative">
          <div className="relative w-full h-80 bg-gray-200"> {/* Ensures container visibility */}
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Rotating ${index}`}
                className={`absolute inset-0 object-cover w-full h-full transition-opacity duration-1000 ease-in-out ${
                  currentImageIndex === index ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;


