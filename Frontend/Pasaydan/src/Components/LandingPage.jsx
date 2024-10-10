{/*import React, { useState, useEffect } from 'react';
import pasaydanLogo from "../assets/pixelcut-export.png"; // Replace with the actual logo path

// Array of image data with text for each slide
const slides = [
  {
    image: '/images/lp5.jpg', // Replace with the actual image URLs
  },
  {
    image: '/images/lp2.png',
  },
  {
    image: '/images/lp4.png',
  },
];

const LandingPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Automatically switch slides every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  // Manually switch slides
  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Image Container */}
      {/*<div className="absolute inset-0 w-full h-full">
        <img
          src={slides[currentSlide].image}
          alt="slider"
          className="object-cover w-full h-full transition-opacity duration-1000"
          key={currentSlide}
        />
        {/* Darker Black Overlay */}
       {/* <div className="absolute inset-0 bg-black bg-opacity-70"></div>
      </div>

      {/* Logo and Text Overlay (Left-Aligned and Centered) */}
     {/* <div className="absolute inset-0 flex justify-start items-center text-white p-8">
        <div className="flex flex-col items-center text-center space-y-6">
          {/* Logo at the top */}
        {/*  <div className="flex justify-center mb-4">
            <img
              src={pasaydanLogo}
              alt="Logo"
              className="h-16 w-16 rounded-full"
            />
          </div>

          {/* Marathi Styled Text */}
        {/*  <div>
            <h1
              className="text-4xl lg:text-5xl font-bold italic"
              style={{ fontFamily: 'Marathi Calligraphy' }}
            >
              पसायदान
            </h1>
            <p className="mt-4 text-lg lg:text-2xl font-semibold">
              जो जे वांछिल, तो तें लाहो । प्राणिजात ॥
            </p>
            <p className="text-sm italic mt-2">~ संत ज्ञानेश्वर महाराज ~</p>
          </div>

          {/* Motivational Text */}
        {/*  <div>
            <p className="text-xl">You can make a difference too!</p>
          </div>

          {/* Donate Button */}
        {/*  <div className="flex justify-center">
            <button className="bg-[#F95454] text-white font-semibold py-2 px-8 rounded-full hover:bg-gray-800 transition-all">
              Donate Now
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Buttons on the Right */}
     {/* <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex flex-col gap-4">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-4 h-4 rounded-full ${
              index === currentSlide ? 'bg-white' : 'bg-gray-300'
            } transition-all duration-300`}
            onClick={() => handleSlideChange(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default LandingPage;*/}








import React, { useState, useEffect } from "react";
import pasaydanLogo from "../assets/pixelcut-export.png"; // Add the path to your logo

const images = ["/images/lp4.png", "/images/lp2.png", "/images/lp1.png","/images/lp5.jpg"];

const LandingPage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex flex-col lg:flex-row min-h-screen bg-[#edf6f9]">
      {/* Left Section with solid color and text */}
      <div className="bg-[#edf6f9] text-[#032d60] lg:w-[40%] flex flex-col justify-center p-10 lg:p-20 space-y-6">
        {/* Logo at the top */}
        <div className="flex justify-center">
          <img
            src={pasaydanLogo}
            alt="Logo"
            className="h-16 w-16 rounded-full"
          />
        </div>

        {/* Marathi Styled Text */}
        <div className="text-center">
          <h1
            className="text-4xl lg:text-5xl font-bold italic"
            style={{ fontFamily: "Marathi Calligraphy" }}
          >
            पसायदान
          </h1>
          <p className="mt-4 text-lg lg:text-2xl font-semibold">
            जो जे वांछिल, तो तें लाहो । प्राणिजात ॥
          </p>
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
          <img
            src={images[currentImageIndex]}
            alt="Nature"
            className="object-cover w-full h-full"
          />
        </div>

        {/* Fading effect between solid color and image */}
        <div className="absolute inset-0 w-[60%] bg-gradient-to-r from-[#edf6f9] to-transparent"></div>
      </div>
    </div>
  );
};

export default LandingPage;
