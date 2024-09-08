import { useState } from "react";
import { useNavigate } from "react-router-dom";
import pasaydanLogo from "../assets/pixelcut-export.png";
import { useAuth } from "../Contexts/AuthContext";
import axios from "axios";

function Navbar() {
  const [addPlus, setAddPlus] = useState(false);
  const { user, isAuthenticated } = useAuth();
  const handlePlusSign = () => {
    setAddPlus((prev) => !prev);
  };

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
    <nav className="w-full h-14 border-b border-l border-r shadow-md bg-white text-slate-900 flex justify-between items-center px-8">
      {/* Logo and Title */}
      <div className="w-[20%] flex items-center gap-4">
        <img className="w-10 h-10" src={pasaydanLogo} alt="Pasaydan Logo" />
        <h1
          onClick={handlePlusSign}
          className="text-md text-slate-800 duration-300 cursor-pointer font-semibold"
        >{`पसा${!addPlus ? "य" : " + "}दान`}</h1>
      </div>

      {/* Navigation Links */}
      <ul className="w-[50%] flex items-center justify-center space-x-6 text-xs font-semibold">
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
        <li className="relative group cursor-pointer text-gray-800 -tracking-tight hover:text-zinc-700 transition-all duration-300">
          Partnerships
        </li>
        <li className="relative group cursor-pointer text-gray-800 -tracking-tight hover:text-zinc-700 transition-all duration-300">
          Drives
        </li>
        <li
          onClick={() => navigate("/contact")}
          className="relative group cursor-pointer text-gray-800 -tracking-tight hover:text-zinc-700 transition-all duration-300"
        >
          Other
        </li>
      </ul>

      {/* Action Buttons */}
      <div className="w-[30%] flex items-center justify-center space-x-4">
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
              className="px-2 py-1 bg-gray-200 text-xs font-semibold rounded-md hover:bg-blue-500 hover:text-white transition-all duration-300"
            >
              logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
