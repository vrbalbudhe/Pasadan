import React from "react";

const LandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-between px-8  relative overflow-hidden">
      {/* Left Side - Text and Button */}
      <div className="md:w-1/2 flex flex-col justify-center items-start z-20">
        <h1 className="text-5xl font-bold text-gray-800 leading-tight">
          Let's gift{" "}
          <span className="text-yellow-500 font-style: italic">
            brighter days
          </span>{" "}
          to people in shadows
        </h1>
        <button className="mt-6 bg-yellow-500 text-white py-3 px-6 rounded-full shadow-lg hover:bg-yellow-600 transition duration-300">
          Donate Now
        </button>
      </div>

      {/* Right Side - Main Circle and Smaller Circles */}
      <div className="md:w-1/2 flex justify-center relative z-10">
        {/* Main Big Circle */}
        <div className="relative">
          <div
            className="w-64 h-64 rounded-full bg-cover bg-center relative z-10 transition-transform duration-500 hover:scale-110 shadow-[0_0_30px_10px_rgba(255,215,0,0.6)]"
            style={{ backgroundImage: `url('/images/lp4.png')` }}
          ></div>
          <div className="absolute top-0 left-0 w-full h-full rounded-full bg-gradient-to-br from-yellow-300 to-yellow-600 blur-xl opacity-50"></div>
        </div>

        <div
          className="absolute w-40 h-40 bg-cover bg-center rounded-full transition-transform duration-500 hover:scale-110 shadow-[0_0_20px_5px_rgba(255,215,0,0.6)]"
          style={{
            backgroundImage: `url('/images/lp3.png')`,
            top: "-110px",
            left: "40px",
          }}
        ></div>
        <div
          className="absolute w-32 h-32 bg-cover bg-center rounded-full transition-transform duration-500 hover:scale-110 shadow-[0_0_20px_5px_rgba(255,215,0,0.6)]"
          style={{
            backgroundImage: `url('/images/lp2.png')`,
            bottom: "-40px",
            left: "-50px",
          }}
        ></div>
        <div
          className="absolute w-36 h-36 bg-cover bg-center rounded-full transition-transform duration-500 hover:scale-110 shadow-[0_0_20px_5px_rgba(255,215,0,0.6)]"
          style={{
            backgroundImage: `url('/images/lp1.png')`,
            top: "160px",
            right: "-30px",
          }}
        ></div>

        {/* Additional Circles for a more dynamic layout */}
        <div
          className="absolute w-20 h-20 bg-cover bg-center rounded-full transition-transform duration-500 hover:scale-110 shadow-[0_0_20px_5px_rgba(255,215,0,0.6)]"
          style={{
            backgroundImage: `url('/images/small5.jpg')`,
            bottom: "300px",
            right: "500px",
          }}
        ></div>
        <div
          className="absolute w-24 h-24 bg-cover bg-center rounded-full transition-transform duration-500 hover:scale-110 shadow-[0_0_20px_5px_rgba(255,215,0,0.6)]"
          style={{
            backgroundImage: `url('/images/small6.jpg')`,
            bottom: "200px",
            right: "20px",
          }}
        ></div>
      </div>

      {/* More Circles spread throughout the page */}
      <div
        className="absolute w-20 h-20 bg-cover bg-center rounded-full transition-transform duration-500 hover:scale-110 shadow-[0_0_20px_5px_rgba(255,215,0,0.6)]"
        style={{
          backgroundImage: `url('/images/small7.jpg')`,
          top: "80px",
          left: "100px",
        }}
      ></div>
      <div
        className="absolute w-24 h-24 bg-cover bg-center rounded-full transition-transform duration-500 hover:scale-110 shadow-[0_0_20px_5px_rgba(255,215,0,0.6)]"
        style={{
          backgroundImage: `url('/images/small8.jpg')`,
          bottom: "150px",
          left: "200px",
        }}
      ></div>
      <div
        className="absolute w-28 h-28 bg-cover bg-center rounded-full transition-transform duration-500 hover:scale-110 shadow-[0_0_20px_5px_rgba(255,215,0,0.6)]"
        style={{
          backgroundImage: `url('/images/small9.jpg')`,
          top: "450px",
          right: "300px",
        }}
      ></div>
    </div>
  );
};

export default LandingPage;
