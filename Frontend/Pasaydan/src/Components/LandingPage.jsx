import React, { useState, useEffect } from "react";

// Images Array (Make sure the paths are correct)
const images = [
  "/images/login_jpg.jpeg",
  "/images/signup_jpg.jpeg",
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

        {/* Right Side - Carousel of Images with Better Yellow Background */}
        <div className="md:w-1/2 flex justify-center items-center relative">
          {/* Yellow Background Image (Using a URL) */}
          <div
            className="relative w-full h-96 bg-cover bg-center"
            style={{ backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSqbcmGIV8fg_nEsE_uEBwJhPmeMK3P6JS0A&s')" }} // Update this URL with a valid yellow background image URL
          >
            {/* Rotating Images (Rectangular Format) */}
            <div className="absolute inset-0 flex items-center justify-center">
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Rotating ${index}`}
                  className={`absolute object-contain transition-opacity duration-1000 ease-in-out ${
                    currentImageIndex === index ? "opacity-100" : "opacity-0"
                  }`}
                  style={{
                    width: "90%", // Increased size to fit the background better
                    height: "auto", // Maintain aspect ratio
                    boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)", // Subtle shadow for depth
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
