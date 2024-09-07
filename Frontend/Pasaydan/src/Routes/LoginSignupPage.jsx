/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import axios from "axios";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
<<<<<<< HEAD
import { useAuth } from "../Contexts/AuthContext";
=======
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Import icons for eye
>>>>>>> ed78ecc3151a89fb972e65d12b08e6419cccc441

const LoginSignupPage = () => {
  const { setUser, setIsAuthenticated } = useAuth();
  const [isLogin, setIsLogin] = useState(true);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordStrength, setPasswordStrength] = useState("");
  const [passwordMatch, setPasswordMatch] = useState(true);
  const [error, setError] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [showPassword, setShowPassword] = useState(false); // Toggle state for password visibility
  const [showConfirmPassword, setShowConfirmPassword] = useState(false); // Toggle state for confirm password visibility
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    setError("");
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");
    try {
      const res = await axios.post(
        "http://localhost:8000/pasaydan/auth/login",
        {
          email,
          password,
        },
        {
          withCredentials: true,
        }
      );
      if (res.status === 200 && res.data.success) {
        setUser({ email: res.data.email });
        setIsAuthenticated(true);
        navigate("/");
      }
    } catch (error) {
      setError(error.message);
    }
  };

  const handleRegistration = async (e) => {
    setError("");
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");
    const confirmPassword = formData.get("confirmPassword");
    const name = formData.get("name");

    if (password !== confirmPassword) {
      setPasswordMatch(false);
      return;
    } else {
      setPasswordMatch(true);
    }

    setOtpSent(true);
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 3000);

    try {
      const res = await axios.post(
        "http://localhost:8000/pasaydan/auth/register",
        {
          email,
          password,
          name,
        },
        {
          withCredentials: true,
        }
      );
      if (res.data.success) {
        navigate(`/`);
      }
    } catch (error) {
      setError(error.message);
    }
  };

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  const checkPasswordStrength = (password) => {
    let strength = "";
    if (password.length < 6) {
      strength = "weak";
    } else if (password.length >= 6 && /[A-Z]/.test(password) && /\d/.test(password)) {
      strength = "strong";
    } else {
      strength = "medium";
    }
    return strength;
  };

  const handlePasswordChange = (e) => {
    const pass = e.target.value;
    setPassword(pass);
    setPasswordStrength(checkPasswordStrength(pass));
  };

  const handleConfirmPasswordChange = (e) => {
    const confirmPass = e.target.value;
    setConfirmPassword(confirmPass);
    setPasswordMatch(confirmPass === password);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword); // Toggle password visibility
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword); // Toggle confirm password visibility
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg flex overflow-hidden max-w-4xl w-full relative">
        {/* Image Section for Login */}
        <div
          className={`hidden md:block w-1/2 bg-cover transition-all duration-700 ease-in-out ${isLogin ? "translate-x-0" : "-translate-x-full"}`}
          style={{ backgroundImage: `url('/images/signup_jpg.jpeg')` }}
        >
          <div className="h-full flex flex-col justify-center p-8">
            <h2 className="text-4xl font-bold text-white">Welcome Back!</h2>
            <p className="text-white mt-4">
              Make your contributions and see one more face lighting up.
            </p>
          </div>
        </div>

        {/* Form Section */}
        <div className={`w-full md:w-1/2 p-8 transition-all duration-700 ease-in-out ${isLogin ? "" : "-translate-x-full"}`}>
          {isLogin ? (
            <>
              <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
              <form onSubmit={handleLogin}>
                <div className="mb-4">
                  <label className="block text-gray-700">Email</label>
                  <input
                    name="email"
                    type="email"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div className="mb-4 relative">
                  <label className="block text-gray-700">Password</label>
                  <input
                    name="password"
                    type={showPassword ? "text" : "password"} // Toggle between text and password
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your password"
                    required
                  />
                  <span
                    onClick={togglePasswordVisibility}
                    className="absolute right-3 top-10 cursor-pointer text-gray-500"
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </span>
                </div>
                <div className="mb-4 flex justify-between">
                  <label>
                    <input type="checkbox" className="mr-2" /> Remember me
                  </label>
                  <a href="#" className="text-blue-500">
                    Forgot password?
                  </a>
                </div>
                <div className="w-full h-10 flex justify-center items-center ">
                  {error}
                </div>
                <button
                  type="submit"
                  className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition-all duration-200"
                >
                  Log In
                </button>
              </form>
              <p className="text-center mt-4 text-gray-500">
                Don't have an account?
                <button onClick={toggleForm} className="ml-2 text-blue-500 hover:underline">
                  Sign Up
                </button>
              </p>
            </>
          ) : (
            <>
              <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>
              <form onSubmit={handleRegistration}>
                <div className="mb-4">
                  <label className="block text-gray-700">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div className="mb-4 relative">
                  <label className="block text-gray-700">Password</label>
                  <input
                    type={showPassword ? "text" : "password"} // Toggle between text and password
                    name="password"
                    value={password}
                    onChange={handlePasswordChange}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Enter your password"
                    required
                  />
                  <span
                    onClick={togglePasswordVisibility}
                    className="absolute right-3 top-10 cursor-pointer text-gray-500"
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </span>
                  {password && (
                    <p
                      className={`text-sm mt-2 ${
                        passwordStrength === "weak"
                          ? "text-red-500"
                          : passwordStrength === "medium"
                          ? "text-yellow-500"
                          : "text-green-500"
                      }`}
                    >
                      {passwordStrength === "weak" && "Password is too weak"}
                      {passwordStrength === "medium" && "Make your password stronger"}
                      {passwordStrength === "strong" && "Password is strong"}
                    </p>
                  )}
                </div>
                <div className="mb-4 relative">
                  <label className="block text-gray-700">Confirm Password</label>
                  <input
                    type={showConfirmPassword ? "text" : "password"} // Toggle between text and password
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={handleConfirmPasswordChange}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Confirm your password"
                    required
                  />
                  <span
                    onClick={toggleConfirmPasswordVisibility}
                    className="absolute right-3 top-10 cursor-pointer text-gray-500"
                  >
                    {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                  </span>
                  {!passwordMatch && (
                    <p className="text-red-500 text-sm mt-2">Passwords do not match.</p>
                  )}
                </div>

                {otpSent && (
                  <div className="mb-4">
                    <label className="block text-gray-700">OTP</label>
                    <input
                      type="text"
                      name="otp"
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                      placeholder="Enter the OTP sent to your email"
                    />
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full bg-black text-white py-2 rounded-lg hover:bg-green-600 transition-all duration-200"
                >
                  Sign Up
                </button>
              </form>

              {showPopup && (
                <div className="fixed top-5 right-5 bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg">
                  OTP has been sent to your email.
                </div>
              )}

              <p className="text-center mt-4 text-gray-500">
                Already have an account?
                <button onClick={toggleForm} className="ml-2 text-green-500 hover:underline">
                  Login
                </button>
              </p>
            </>
          )}
        </div>

        <div
          className={`hidden md:block w-1/2 bg-cover transition-all duration-700 ease-in-out absolute top-0 right-0 h-full ${isLogin ? "translate-x-full" : "translate-x-0"}`}
          style={{ backgroundImage: `url('/images/login_jpg.jpeg')` }}
        >
          <div className="h-full flex flex-col justify-center p-8">
            <h2 className="text-4xl font-bold text-white">Join us today!</h2>
            <p className="text-white mt-4">
              Create an account and make a difference in someone's life.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSignupPage;
