import { useNavigate } from "react-router-dom";
import pasaydanLogo from "../assets/pixelcut-export.png";
import { useAuth } from "../Contexts/AuthContext";
import { MdOutlinePerson4 } from "react-icons/md";
import { AiOutlineLogout } from "react-icons/ai";
import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import axios from "axios";

function Navbar({ sendRequest }) {
  const { user, isAuthenticated } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [loginClick, setLoginClick] = useState(false);
  const navigate = useNavigate();

  const handleOperation = async() => {
    await setLoginClick((prev) => !prev);
    await sendRequest(loginClick);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = async () => {
    try {
      await axios.post(
        "http://localhost:8000/pasaydan/auth/logout/",
        {},
        { withCredentials: true }
      );
      navigate("/");
      window.location.reload();
    } catch (error) {
      console.log(error);
      return res.status(501).json({
        message: "Unable to handle the logout",
        success: false,
      });
    }
  };

  return (
    <>
      {/* Navbar */}
      <nav
        className={`w-full sticky top-0 z-50 transition-all duration-300 ${
          scrolled ? " shadow-md bg-white" : "bg-white text-custom"
        }`}
      >
        <div className="w-[100%] h-[52px] mx-auto flex justify-between items-center px-8">
          {/* Logo and Title */}
          <div className="flex w-[80%] items-center gap-2 justify-start cursor-pointer">
            <img
              onClick={() => navigate("/")}
              className="w-8 h-8 rounded-full object-cover"
              src={pasaydanLogo}
              alt="Pasaydan Logo"
            />
            <h1 className="text-sm font-semibold hover:text-blue-200 transition-all duration-300">
              पसायदान
            </h1>

            <ul className="md:ml-10 hidden w-[50%] md:flex items-center gap-3 text-custom text-navFontColor font-semibold">
              <li
                onClick={() => navigate("/")}
                className="cursor-pointer -tracking-tighter hover:text-blue-300 transition-all duration-300"
              >
                Home
              </li>
              <li
                onClick={() => navigate("/drive")}
                className="cursor-pointer hover:text-blue-300 transition-all duration-300"
              >
                Drives
              </li>
              <li
                onClick={() => navigate("/partnerships")}
                className="cursor-pointer hover:text-blue-300 transition-all duration-300"
              >
                Partnerships
              </li>
            </ul>
          </div>

          {/* Desktop Navigation */}

          {/* Action Buttons */}
          <div className="w-[20%] h-fit justify-end flex items-center space-x-4">
            {!isAuthenticated ? (
              <button
                onClick={handleOperation}
                className={`px-3 py-1 text-custom border-2 border-slate-300 font-semibold flex justify-center items-center rounded-md transition-all duration-300 ${
                  scrolled
                    ? "bg-white hover:bg-siteBlue hover:text-white hover:border-siteBlue"
                    : "text-navFontColor hover:bg-siteBlue hover:text-white hover:border-siteBlue"
                }`}
              >
                Join Us
              </button>
            ) : (
              <>
                <button
                  onClick={() =>
                    navigate(
                      user.role === "admin" ? "/admin/dashboard" : "/dashboard"
                    )
                  }
                  className="text-2xl hover:text-blue-300 transition-all duration-300"
                >
                  <MdOutlinePerson4 />
                </button>
                <button
                  onClick={handleLogout}
                  className="hidden md:block text-2xl hover:text-blue-300 transition-all duration-300"
                >
                  <AiOutlineLogout />
                </button>
              </>
            )}
          </div>

          {/* Mobile Hamburger Icon */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-2xl focus:outline-none"
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </nav>

      {/* Partial-Screen mobile menu */}
      <div
        className={`fixed top-0 right-0 h-full w-[70%] bg-[#032d60] z-50 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300`}
      >
        <div className="flex justify-between items-center p-4">
          <h1 className="text-xl text-white">Menu</h1>
          <button
            onClick={() => setIsOpen(false)}
            className="text-white text-3xl focus:outline-none"
          >
            <FaTimes />
          </button>
        </div>
        <ul className="p-4 space-y-6 text-white text-lg">
          <li
            onClick={() => {
              navigate("/");
              setIsOpen(false);
            }}
            className="cursor-pointer hover:text-siteBlue transition-all duration-300"
          >
            Home
          </li>
          <li
            onClick={() => {
              navigate("/partnerships");
              setIsOpen(false);
            }}
            className="cursor-pointer hover:text-siteBlue transition-all duration-300"
          >
            Partnerships
          </li>
          <li
            onClick={() => {
              navigate("/drive");
              setIsOpen(false);
            }}
            className="cursor-pointer hover:text-siteBlue transition-all duration-300"
          >
            Drives
          </li>
          {!isAuthenticated ? (
            <button
              onClick={() => {
                navigate("/auth");
                setIsOpen(false);
              }}
              className="px-4 py-2 bg-white text-[#032d60] font-semibold rounded-full hover:bg-blue-700 hover:text-white transition-all duration-300"
            >
              Sign In / Sign Up
            </button>
          ) : (
            <>
              <button
                onClick={() => {
                  navigate("/dashboard");
                  setIsOpen(false);
                }}
                className="px-4 py-2 bg-white text-[#032d60] font-semibold rounded-full hover:bg-blue-700 hover:text-white transition-all duration-300"
              >
                {user.name}
              </button>
              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-white text-[#032d60] font-semibold rounded-full hover:bg-blue-700 hover:text-white transition-all duration-300"
              >
                Logout
              </button>
            </>
          )}
        </ul>
      </div>
    </>
  );
}

export default Navbar;
