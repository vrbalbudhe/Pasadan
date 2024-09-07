/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import axios from "axios";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { useAuth } from "../Contexts/AuthContext";

const LoginSignupPage = () => {
  const { setUser, setIsAuthenticated } = useAuth();
  const [isLogin, setIsLogin] = useState(true);
  const [password, setPassword] = useState("");
  const [passwordStrength, setPasswordStrength] = useState("");
  const [error, setError] = useState("");
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
    const name = formData.get("name");
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
    } else if (
      password.length >= 6 &&
      /[A-Z]/.test(password) &&
      /\d/.test(password)
    ) {
      strength = "strong";
    } else {
      strength = "medium";
    }
    return strength;
  };

  // Handle password input change
  const handlePasswordChange = (e) => {
    const pass = e.target.value;
    setPassword(pass);
    setPasswordStrength(checkPasswordStrength(pass));
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
        <div
          className={`w-full md:w-1/2 p-8 transition-all duration-700 ease-in-out ${isLogin ? "" : "-translate-x-full"}`}
        >
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
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Password</label>
                  <input
                    name="password"
                    type="password"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your password"
                  />
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
                <button
                  onClick={toggleForm}
                  className="ml-2 text-blue-500 hover:underline"
                >
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
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Password</label>
                  <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={handlePasswordChange}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Enter your password"
                  />
                  {/* Display password strength feedback */}
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
                      {passwordStrength === "medium" &&
                        "Make your password stronger"}
                      {passwordStrength === "strong" && "Password is strong"}
                    </p>
                  )}
                </div>
                <button
                  type="submit"
                  className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition-all duration-200"
                >
                  Sign Up
                </button>
              </form>
              <p className="text-center mt-4 text-gray-500">
                Already have an account?
                <button
                  onClick={toggleForm}
                  className="ml-2 text-green-500 hover:underline"
                >
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
