import { useState, useEffect, useRef } from "react";
// import trialImage from "../assets/image.png";
function AdvertisementBar() {
  const images = [];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(intervalRef.current);
  }, [images.length]);

  return (
    <div className="w-full h-80 flex flex-col justify-center items-center relative">
      {/* Image Slide */}
      <img
        src={images[currentImageIndex]}
        alt="Advertisement"
        className="w-full h-full object-cover transition-all duration-1000 ease-in-out"
      />

      {/* Dots */}
      <div className="absolute bottom-4 flex space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentImageIndex ? "bg-slate-800" : "bg-gray-400"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default AdvertisementBar;
