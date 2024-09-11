/* eslint-disable no-unused-vars */
import { useState, useEffect, useRef, useContext } from "react";
import { AdvertisementContext } from "../Contexts/AdvertisementContext";

function AdvertisementBar() {
  const { advImages, uploadAdvImage, deleteAdvImage, loading, error } =
    useContext(AdvertisementContext);
  const images = advImages || [];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (images.length > 0) {
      intervalRef.current = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 5000);

      return () => clearInterval(intervalRef.current);
    }
  }, [images.length]);

  if (images.length === 0) {
    return (
      <div className="w-full h-80 bg-gray-200 object-cover flex justify-center items-center">
        No advertisements available
      </div>
    );
  }

  return (
    <div className="w-full md:h-80 py-2 bg-[#f8f9fa] border border-b flex flex-col justify-center items-center relative">
      <img
        src={`http://localhost:8000/uploads/${images[currentImageIndex].filename}`}
        alt="Advertisement"
        className="w-full h-full object-contain transition-all duration-1000 ease-in-out"
      />

      <div className="absolute bottom-4 flex space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-1 rounded-full transition-all duration-300 ${
              index === currentImageIndex ? "bg-slate-800" : "bg-gray-400"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default AdvertisementBar;
