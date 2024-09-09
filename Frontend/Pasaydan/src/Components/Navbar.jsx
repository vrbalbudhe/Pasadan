import { useNavigate } from "react-router-dom";
import pasaydanLogo from "../assets/pixelcut-export.png";
import { useAuth } from "../Contexts/AuthContext";
import axios from "axios";
import { useState } from "react";

function Navbar() {
  const { user, isAuthenticated } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await axios.post(
        "http://localhost:8000/pasaydan/auth/logout/",
        {},
        { withCredentials: true }
      );
      navigate("/auth");
      window.location.reload();
    } catch (error) {
      console.log(error);
      return resizeBy.status(501).json({
        message: "Unable to handle the logout",
        success: false,
      });
    }
  };

  return (
    <>
      <nav className="w-full h-14 border-b border-l border-r shadow-md bg-white text-slate-900 flex justify-between items-center px-8">
        {/* Logo and Title */}
        <div className="md:w-[20%] w-[60%] flex items-center gap-4">
          <img className="w-10 h-10" src={pasaydanLogo} alt="Pasaydan Logo" />
          <h1
            onClick={() => navigate("/")}
            className="text-md text-slate-800 duration-300 cursor-pointer font-semibold"
          >
            पसायदान
          </h1>
        </div>

        {/* Navigation Links for desktop */}
        <ul className="w-[50%] hidden md:flex items-center justify-center space-x-6 text-xs font-semibold">
          <li
            onClick={() => navigate("/")}
            className="relative group cursor-pointer text-gray-800 -tracking-tight hover:text-zinc-700 transition-all duration-300"
          >
            Home
          </li>
          <li
            onClick={() => navigate("/about")}
            className="relative group cursor-pointer text-gray-800 -tracking-tight hover:text-zinc-700 transition-all duration-300"
          >
            About
          </li>
          <li
            className="relative group cursor-pointer text-gray-800 -tracking-tight hover:text-zinc-700 transition-all duration-300"
          >
            Partnerships
          </li>
          <li
            className="relative group cursor-pointer text-gray-800 -tracking-tight hover:text-zinc-700 transition-all duration-300"
          >
            Drives
          </li>
        </ul>

        {/* Action Buttons for desktop */}
        <div className="w-fit md:w-[30%] flex items-center justify-end space-x-4">
          {!isAuthenticated ? (
            <button
              onClick={() => navigate("/auth")}
              className="px-2 py-2 bg-violet-500 text-xs font-semibold hover:bg-blue-500 text-white transition-all duration-300"
            >
              SignIn / SignUp
            </button>
          ) : (
            <>
              <button
                onClick={() => navigate("/dashboard")}
                className="px-2 py-1 bg-gray-200 text-xs font-semibold rounded-md hover:bg-blue-500 hover:text-white transition-all duration-300"
              >
                {user.name}
              </button>
              <button
                onClick={handleLogout}
                className="px-2 py-1 hidden md:block bg-gray-200 text-xs font-semibold rounded-md hover:bg-blue-500 hover:text-white transition-all duration-300"
              >
                Logout
              </button>
            </>
          )}
        </div>

        {/* Burger Icon for small screens */}
        <div className="md:hidden w-[10%] flex justify-center items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-slate-800 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* Sidebar for mobile */}
      <div
        className={`fixed inset-y-0 left-0 w-64 bg-white shadow-md z-50 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <h1 className="text-lg font-semibold">Menu</h1>
          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-800 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <ul className="p-4 space-y-4 text-sm">
          <li
            onClick={() => {
              navigate("/");
              setIsOpen(false);
            }}
            className="cursor-pointer text-gray-800 hover:text-violet-500 transition-all duration-300"
          >
            Home
          </li>
          <li
            onClick={() => {
              navigate("/about");
              setIsOpen(false);
            }}
            className="cursor-pointer text-gray-800 hover:text-violet-500 transition-all duration-300"
          >
            About
          </li>
          <li className="cursor-pointer text-gray-800 hover:text-violet-500 transition-all duration-300">
            Partnerships
          </li>
          <li className="cursor-pointer text-gray-800 hover:text-violet-500 transition-all duration-300">
            Drives
          </li>

          {!isAuthenticated ? (
            <button
              onClick={() => {
                navigate("/auth");
                setIsOpen(false);
              }}
              className="px-4 py-2 bg-violet-500 text-white font-semibold rounded-md hover:bg-blue-500 transition-all duration-300"
            >
              SignIn / SignUp
            </button>
          ) : (
            <>
              <button
                onClick={() => {
                  navigate("/dashboard");
                  setIsOpen(false);
                }}
                className="px-4 py-2 bg-gray-200 text-gray-800 font-semibold rounded-md hover:bg-blue-500 hover:text-white transition-all duration-300"
              >
                {user.name}
              </button>
              <button
                onClick={handleLogout}
                className="mt-4 px-4 py-2 bg-gray-200 text-gray-800 font-semibold rounded-md hover:bg-blue-500 hover:text-white transition-all duration-300"
              >
                Logout
              </button>
            </>
          )}
        </ul>
      </div>

      {/* Overlay to close the sidebar */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black opacity-50 z-40"
        ></div>
      )}
    </>
  );
}

export default Navbar;
