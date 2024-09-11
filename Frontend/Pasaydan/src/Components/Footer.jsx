import pasaydanLogo from "../assets/pixelcut-export.png";
import { FaInstagram } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io5";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { MdOutlineMailOutline } from "react-icons/md";
import { useEffect, useState, useRef } from "react";

function Footer() {
  const titleOurWorkAdvertisementDirectory = [
    "Baby Care Items Donations",
    "GROCERY KIT DONATION",
    "Cycles Donation Drive",
    "Medical Help To Needy",
  ];

  const imageOurWorkAdvertisementDirectory = [
    "https://i.pinimg.com/564x/18/7d/cb/187dcb647d4ef8066bdbede8254ecfe0.jpg",
    "https://i.pinimg.com/564x/01/29/dc/0129dcb6e5e6eebe41df08512a06fa6e.jpg",
    "https://i.pinimg.com/564x/11/24/dc/1124dc4920f0bd18381cbcb88c3adbbf.jpg",
    "https://i.pinimg.com/564x/ab/d9/8d/abd98df87cffc6e9e1252e01d83b6947.jpg",
  ];

  const navigate = useNavigate();
  const [workTitle, setWorkTitle] = useState(
    titleOurWorkAdvertisementDirectory[0]
  );
  const [image, setImage] = useState(imageOurWorkAdvertisementDirectory[0]);

  const intervalRef = useRef(null);

  const cycleAdvertisements = () => {
    let index = 0;
    intervalRef.current = setInterval(() => {
      index = (index + 1) % titleOurWorkAdvertisementDirectory.length;

      setWorkTitle(titleOurWorkAdvertisementDirectory[index]);
      setImage(imageOurWorkAdvertisementDirectory[index]);
    }, 5000);
  };

  useEffect(() => {
    cycleAdvertisements();

    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <div className="w-full bg-[#1f2421] md:h-80 h-full md:flex md:flex-col md:justify-center items-center p-2 border-r border-l border-t shadow-xl">
      <div className="w-full h-[80%] md:flex justify-center items-center">
        {/* Logo and Title Section */}
        <div className="w-full md:w-[20%] h-full p-2">
          <div className="w-full md:h-[50%] h-full flex flex-col justify-center items-center">
            <div className="w-full h-full flex justify-center items-center gap-2">
              <img
                className="w-10 h-10 rounded-full"
                src={pasaydanLogo}
                alt="Pasaydan Logo"
              />
              <p className="text-white text-2xl">Pasaydan</p>
            </div>
            <p className="font-semibold text-slate-300 p-1 mt-5 md:mt-0 text-md -tracking-tighter">
              जो जे वांछिल, तो ते लाहो, प्रणिजात
            </p>
            <p className=" text-slate-300 p-1 text-sm -tracking-tighter">
              ~ संत ज्ञानेश्वर महाराज ~
            </p>
          </div>
          <div className="w-full md:h-[50%] h-full flex flex-col justify-center items-center gap-2">
            <p className="text-slate-300 text-md">Founded - 10 March 2021</p>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="w-full md:w-[10%] h-full flex justify-center items-center p-2">
          <ul className="font-semibold text-white text-sm flex flex-col gap-1">
            <li
              onClick={() => navigate()}
              className="cursor-pointer hover:text-slate-500 hover:underline"
            >
              Home
            </li>
            <li
              onClick={() => navigate()}
              className="cursor-pointer hover:text-slate-500 hover:underline"
            >
              Drive
            </li>
            <li
              onClick={() => navigate()}
              className="cursor-pointer hover:text-slate-500 hover:underline"
            >
              Resources
            </li>
            <li
              onClick={() => navigate()}
              className="cursor-pointer hover:text-slate-500 hover:underline"
            >
              Feedback
            </li>
            <li
              onClick={() => navigate()}
              className="cursor-pointer hover:text-slate-500 hover:underline"
            >
              Contact Us
            </li>
            <li
              onClick={() => navigate()}
              className="cursor-pointer hover:text-slate-500 hover:underline"
            >
              About
            </li>
          </ul>
        </div>

        {/* Register, Login, etc. */}
        <div className="w-full md:w-[10%] h-full flex justify-center items-center p-2">
          <ul className="font-semibold text-white text-sm flex flex-col gap-1">
            <li
              onClick={() => navigate("/auth")}
              className="cursor-pointer hover:text-slate-500 hover:underline"
            >
              Register / Login
            </li>
            <li
              onClick={() => navigate()}
              className="cursor-pointer hover:text-slate-500 hover:underline"
            >
              Founders
            </li>
            <li
              onClick={() => navigate()}
              className="cursor-pointer hover:text-slate-500 hover:underline"
            >
              Social Media
            </li>
            <li
              onClick={() => navigate()}
              className="cursor-pointer hover:text-slate-500 hover:underline"
            >
              Privacy-Policy
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="w-full md:w-[15%] h-full p-2">
          <div className="w-full h-1/2 flex flex-col justify-center items-center p-2">
            <div className="w-full mb-5 md:mb-0 md:h-1/2 flex md:justify-start justify-center items-center">
              <p className="font-semibold text-lg text-white">Get In Touch</p>
            </div>
            <div className="w-full h-1/2 text-white flex md:justify-start justify-center items-center gap-2 text-2xl">
              <div className="hover:text-slate-500">
                <FaInstagram />
              </div>
              <div className="hover:text-slate-500">
                <IoLogoWhatsapp />
              </div>
              <div className="hover:text-slate-500">
                <BsTwitterX />
              </div>
              <div className="hover:text-slate-500">
                <MdOutlineMailOutline />
              </div>
            </div>
          </div>
        </div>

        {/* Advertisement Section */}
        <div className="w-full md:w-[20%] h-full p-2">
          <div className="w-full h-[20%] flex flex-col justify-center items-center p-2">
            <div className="w-full h-1/2 flex justify-center md:justify-start items-center">
              <p className="font-bold text-lg md:text-xl text-white">
                What We Have Done?
              </p>
            </div>
          </div>
          <div className="w-full h-[80%] flex flex-col justify-center items-center">
            <div className="w-full h-1/3 p-1">
              <p className="text-white text-sm md:text-sm pl-5 text-center md:text-left font-semibold">
                {workTitle}
              </p>
            </div>
            <div className="w-full h-2/3 p-1">
              <img
                className="w-full h-full object-cover"
                src={image}
                alt="Advertisement"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="w-full h-[20%] flex justify-center items-center p-2">
        <p className="font-semibold text-slate-200 text-md -tracking-tighter">prasaydan@2024 _ </p>
        <p className="font-semibold text-slate-200 text-md -tracking-tighter">All Rights Reserved</p>
      </div>
    </div>
  );
}

export default Footer;
