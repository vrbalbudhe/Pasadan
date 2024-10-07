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
    <div className="w-full bg-siteBlue md:h-80 h-full md:flex md:flex-col md:justify-center items-center md:p-2 p-0">
      <div className="w-full h-[80%] md:flex justify-center items-center">
        {/* Logo and Title Section */}
        <div className="w-full md:w-[30%] flex flex-col justify-center items-end h-full p-2">
          <div className="w-full md:h-[60%] h-full flex flex-col justify-center items-center">
            <div className="w-full h-full flex justify-center items-center gap-2">
              <img
                className="w-8 h-8 rounded-full"
                src={pasaydanLogo}
                alt="Pasaydan Logo"
              />
              <p className="text-white font-semibold text-xl">Pasaydan</p>
            </div>
            <p className="text-slate-200 font-semibold p-1 mt-5 md:mt-0 text-md -tracking-tighter">
              जो जे वांछिल, तो ते लाहो, प्रणिजात
            </p>
            <p className=" text-slate-300 font-semibold p-1 text-sm -tracking-tighter">
              ~ संत ज्ञानेश्वर महाराज ~
            </p>
          </div>
          <div className="w-full md:h-[20%] h-full flex flex-col justify-center items-center gap-2">
            <p className="text-slate-300 font-semibold text-sm">Founded - 10 March 2021</p>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="w-full md:w-[10%] h-full flex justify-center items-center p-2">
          <ul className="font-normal text-white text-sm flex flex-col gap-1">
            <li
              onClick={() => navigate()}
              className="font-semibold cursor-pointer hover:text-slate-300 hover:underline"
            >
              Home
            </li>
            <li
              onClick={() => navigate()}
              className="font-semibold cursor-pointer hover:text-slate-300 hover:underline"
            >
              Drive
            </li>
            <li
              onClick={() => navigate()}
              className="font-semibold cursor-pointer hover:text-slate-300 hover:underline"
            >
              Resources
            </li>
            <li
              onClick={() => navigate()}
              className="font-semibold cursor-pointer hover:text-slate-300 hover:underline"
            >
              Feedback
            </li>
            <li
              onClick={() => navigate()}
              className="font-semibold cursor-pointer hover:text-slate-300 hover:underline"
            >
              Contact Us
            </li>
            <li
              onClick={() => navigate()}
              className="font-semibold cursor-pointer hover:text-slate-300 hover:underline"
            >
              About
            </li>
          </ul>
        </div>

        {/* Register, Login, etc. */}
        <div className="w-full md:w-[10%] h-full flex justify-center items-center p-2">
          <ul className="font-normal text-white text-sm flex flex-col gap-1">
            <li
              onClick={() => navigate("/auth")}
              className="font-semibold cursor-pointer hover:text-slate-300 hover:underline"
            >
              Register / Login
            </li>
            <li
              onClick={() => navigate()}
              className="font-semibold cursor-pointer hover:text-slate-300 hover:underline"
            >
              Founders
            </li>
            <li
              onClick={() => navigate()}
              className="font-semibold cursor-pointer hover:text-slate-300 hover:underline"
            >
              Social Media
            </li>
            <li
              onClick={() => navigate()}
              className="font-semibold cursor-pointer hover:text-slate-300 hover:underline"
            >
              Privacy-Policy
            </li>
            <li
              onClick={() => navigate()}
              className="font-semibold cursor-pointer hover:text-slate-300 hover:underline"
            >
              Admin Login
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="w-full md:w-[20%] h-full p-4 flex justify-center items-start">
          <div className="w-full h-1/2 flex flex-col justify-center items-center p-2">
            <div className="w-full mb-5 md:mb-0 md:h-1/2 flex md:justify-start justify-center items-center">
              <p className="font-normal text-lg text-white">Get In Touch</p>
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
      </div>

      {/* Footer Bottom */}
      <div className="w-full h-[10%] flex justify-center items-center p-2">
        <p className="text-slate-200 text-md font-semibold -tracking-tighter">
          pasaydan@2024 _{" "}
        </p>
        <p className=" text-slate-200 text-xs -tracking-tighter font-semibold">
          All Rights Reserved
        </p>
      </div>
    </div>
  );
}

export default Footer;
