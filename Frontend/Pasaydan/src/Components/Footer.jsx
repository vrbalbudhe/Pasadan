import pasaydanLogo from "../assets/pixelcut-export.png";
import { FaInstagram } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io5";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { useEffect, useState } from "react";

function Footer() {
  const [workTitle, setWorkTitle] = useState("");
  const [image, setImage] = useState("");
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
  const titleOurWorkAdvertisement = () => {
    let index = 0;
    setInterval(() => {
      setWorkTitle(() => {
        if (index >= titleOurWorkAdvertisementDirectory.length) {
          index = 0;
        }
        return titleOurWorkAdvertisementDirectory[index++];
      });
    }, 5000);
  };
  const imageOurWorkAdvertisement = () => {
    let index = 0;
    setInterval(() => {
      setImage(() => {
        if (index >= imageOurWorkAdvertisementDirectory.length) {
          index = 0;
        }
        return imageOurWorkAdvertisementDirectory[index++];
      });
    }, 5000);
  };

  useEffect(() => {
    titleOurWorkAdvertisement();
    imageOurWorkAdvertisement();
  }, []);
  return (
    <div className="w-full bg-white h-80 flex flex-col justify-center items-center p-2 border-r border-l border-t shadow-xl">
      <div className="w-full h-[80%] flex justify-center items-center">
        <div className="w-[30%] h-full p-2">
          <div className="w-full h-[50%] flex flex-col justify-center items-center">
            <div className="w-full h-full flex justify-center items-center gap-2">
              <img className="w-10 h-10" src={pasaydanLogo} alt="" />
              <p className="text-slate-900 font-semibold">Pasaydan</p>
            </div>
            <p className="font-semibold text-slate-700 text-sm">
              जो जे वांछिल, तो ते लाहो, प्रणिजात
            </p>
            <p className="font-semibold text-slate-600 text-xs">
              ~ संत ज्ञानेश्वर महाराज ~
            </p>
          </div>
          <div className="w-full h-[50%] flex flex-col justify-center items-center gap-2">
            <p className="font-semibold text-slate-700 text-xs">
              Founded - 10 March 2021
            </p>
          </div>
        </div>
        <div className="w-[10%] h-full flex justify-center items-center p-2">
          <ul className="font-semibold text-slate-700 text-xs flex flex-col gap-1">
            <li className=" cursor-pointer hover:text-slate-800 hover:underline">
              Home
            </li>
            <li className=" cursor-pointer hover:text-slate-800 hover:underline">
              Drive
            </li>
            <li className=" cursor-pointer hover:text-slate-800 hover:underline">
              Resources
            </li>
            <li className=" cursor-pointer hover:text-slate-800 hover:underline">
              Feedback
            </li>
            <li className=" cursor-pointer hover:text-slate-800 hover:underline">
              Contact Us
            </li>
            <li className=" cursor-pointer hover:text-slate-800 hover:underline">
              About
            </li>
          </ul>
        </div>
        <div className="w-[10%] h-full flex justify-center items-center p-2">
          <ul className="font-semibold text-slate-700 text-xs flex flex-col gap-1">
            <li className=" cursor-pointer hover:text-slate-800 hover:underline">
              Register
            </li>
            <li className=" cursor-pointer hover:text-slate-800 hover:underline">
              Login
            </li>
            <li className=" cursor-pointer hover:text-slate-800 hover:underline">
              Founders
            </li>
            <li className=" cursor-pointer hover:text-slate-800 hover:underline">
              Social Media
            </li>
            <li className=" cursor-pointer hover:text-slate-800 hover:underline">
              Privacy-Policy
            </li>
          </ul>
        </div>
        <div className="w-[20%] h-full p-2">
          <div className="w-full h-1/2 flex flex-col justify-center items-center p-2">
            <div className="w-full h-1/2 flex justify-start items-center">
              <p className="font-semibold text-xs text-slate-800">
                Get In Touch
              </p>
            </div>
            <div className="w-full h-1/2 flex justify-start items-center gap-2 text-2xl">
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
                <FaFacebook />
              </div>
              <div className="hover:text-slate-500">
                <MdOutlineMailOutline />
              </div>
            </div>
          </div>

          <div className="w-full h-1/2 flex justify-center items-center"></div>
        </div>
        <div className="w-[30%] h-full p-2">
          <div className="w-full h-[20%] flex flex-col justify-center items-center p-2">
            <div className="w-full h-1/2 flex justify-start items-center">
              <p className="font-semibold text-sm text-slate-800">
                What We Have Done?
              </p>
            </div>
          </div>
          <div className="w-full h-[80%] flex flex-col justify-center items-center">
            <div className="w-full h-1/3 p-1">
              <p className="text-slate-700 text-xl font-semibold">
                {workTitle}
              </p>
            </div>
            <div className="w-full h-2/3 p-1">
              <img className="w-full h-full object-cover" src={image} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[20%] flex justify-center items-center p-2 border-t-2 border-slate-300">
        <p className="font-semibold text-slate-700 text-sm">
          prasaydan@2024 _{" "}
        </p>
        <p className="font-semibold text-slate-700 text-sm">
          All Rights Reserved
        </p>
      </div>
    </div>
  );
}

export default Footer;
