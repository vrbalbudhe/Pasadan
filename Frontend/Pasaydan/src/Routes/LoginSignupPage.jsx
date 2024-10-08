/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import axios from "axios";
import { redirect, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { FaEye, FaEyeSlash, FaCheckCircle } from "react-icons/fa"; // Import icons for eye and checkmark
import { useAuth } from "../Contexts/AuthContext";

const LoginSignupPage = ({ closeLogin }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [password, setPassword] = useState("");
  const { user, isAuthenticated, setIsAuthenticated, setUser } = useAuth();
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordStrength, setPasswordStrength] = useState("");
  const [passwordMatch, setPasswordMatch] = useState(true);
  const [error, setError] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false); // State for OTP verification
  const [emailVerified, setEmailVerified] = useState(false); // State to handle email verification
  const [showPassword, setShowPassword] = useState(false); // Toggle state for password visibility
  const [showConfirmPassword, setShowConfirmPassword] = useState(false); // Toggle state for confirm password visibility
  const [showPopup, setShowPopup] = useState(false);
  const [resendTimeout, setResendTimeout] = useState(15); // Timer for OTP resend
  const [otp, setOtp] = useState("");
  const [email, setEmail] = useState(""); // Store email input
  const navigate = useNavigate();

  useEffect(() => {
    let timer;
    if (otpSent && resendTimeout > 0) {
      timer = setTimeout(() => {
        setResendTimeout(resendTimeout - 1);
      }, 1000);
    }
    return () => clearTimeout(timer);
  }, [otpSent, resendTimeout]);

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
      if (res.data.success) {
        setUser({ email: res.data.email, role: res.data.role });
        setIsAuthenticated(true);

        if (res.data.role === "admin") {
          console.log("admin");
          navigate(`/admin/dashboard`);
        } else {
          handleSubmit();
          navigate(`/`);
        }
      }
    } catch (error) {
      setError(error.message);
    }
  };

  const handleRegistration = async (e) => {
    setError("");
    e.preventDefault();

    const formData = new FormData(e.target);
    const password = formData.get("password");
    const confirmPassword = formData.get("confirmPassword");
    const name = formData.get("name");

    // Use email from state instead of formData
    if (!email) {
      setError("Email is required.");
      return;
    }

    if (password !== confirmPassword) {
      setPasswordMatch(false);
      return;
    } else {
      setPasswordMatch(true);
    }

    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 3000);

    try {
      const res = await axios.post(
        "http://localhost:8000/pasaydan/auth/register",
        {
          email, // Use email from state
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

  const handleOtpSubmit = async () => {
    try {
      const res = await axios.post(
        "http://localhost:8000/pasaydan/auth/register/otpValidate",
        {
          email,
          otp,
        },
        {
          withCredentials: true,
        }
      );
      if (res.data.success) {
        setOtpVerified(true);
        setTimeout(() => {
          setOtpVerified(false);
          setEmailVerified(true);
          setOtpSent(false);
        }, 3000);
      }
    } catch (error) {
      setError(error.message);
    }
  };

  const handleEmailVerification = async () => {
    try {
      const res = await axios.post(
        "http://localhost:8000/pasaydan/auth/register/verifyEmail",
        {
          email,
        },
        {
          withCredentials: true,
        }
      );
      if (res.data.success) {
        setOtpSent(true);
        setResendTimeout(15);
      }
    } catch (error) {
      setError(error.message);
    }
  };

  const handleResendOtp = () => {
    // Resend OTP function
    setResendTimeout(15);
    setOtp("");
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

  const handleSubmit = () => {
    closeLogin();
  };

  return (
    <div className=" fixed inset-0 backdrop-blur-sm z-50 min-h-[100vh] bg-transparent  overflow-y-hidden md:min-h-[200px] flex items-center py-2 pl-2 pr-2 md:pr-2 md:pl-2 justify-center w-full">
      <div className="fixed right-0 top-0 p-10">
        <p
          onClick={handleSubmit}
          className="text-white text-xl bg-black px-3 py-1 cursor-pointer hover:scale-90 duration-300 rounded-full"
        >
          X
        </p>
      </div>
      <div className=" shadow-lg rounded-sm md:flex overflow-hidden max-w-4xl w-full relative bg-transparent">
        {/* Image Section for Login */}
        <div
          className={`w-full md:w-1/2 bg-cover transition-all duration-700 ease-in-out ${isLogin ? "translate-x-0" : "-translate-x-full"}`}
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
          className={`w-full bg-white md:w-1/2  p-8 transition-all duration-700 ease-in-out ${isLogin ? "" : "-translate-x-full"}`}
        >
          {isLogin ? (
            <>
              <h2 className="text-xl font-bold text-left md:text-left mb-6">
                Login
              </h2>
              <form onSubmit={handleLogin}>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-semibold">
                    Email
                  </label>
                  <input
                    name="email"
                    type="email"
                    className="w-full px-4 py-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div className="mb-4 relative">
                  <label className="block text-gray-700 text-sm font-semibold">
                    Password
                  </label>
                  <input
                    name="password"
                    type={showPassword ? "text" : "password"} // Toggle between text and password
                    className="w-full px-4 py-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                  <label className="text-sm">
                    <input type="checkbox" className="mr-2" /> Remember me
                  </label>
                  <a href="#" className="text-blue-500 text-sm">
                    Forgot password?
                  </a>
                </div>
                <div className="w-full h-10 flex justify-center items-center ">
                  {error}
                </div>
                <button
                  type="submit"
                  className="w-full bg-black text-white py-2 rounded-sm hover:bg-gray-800 transition-all duration-200"
                >
                  Log In
                </button>
              </form>
              <p className="text-center mt-4 text-sm text-gray-500">
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
              <h2 className="text-xl font-bold text-left mb-6">Sign Up</h2>
              <form onSubmit={handleRegistration}>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-semibold">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    className="w-full px-4 py-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div className="mb-4 flex">
                  <div className="flex-grow mr-2">
                    <label className="block text-gray-700 text-sm font-semibold">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                      placeholder="Enter your email"
                      required
                      disabled={emailVerified} // Lock the email field after verification
                    />
                  </div>
                  {emailVerified ? (
                    <FaCheckCircle className="text-green-500 text-2xl mt-8" />
                  ) : (
                    <button
                      type="button"
                      onClick={handleEmailVerification}
                      className="bg-blue-500 text-white py-2 px-4 rounded-sm text-sm hover:bg-blue-600 transition-all duration-200 mt-5"
                      disabled={otpSent}
                    >
                      Verify Email
                    </button>
                  )}
                </div>

                {otpSent && !emailVerified && (
                  <>
                    <div className="mb-4 flex">
                      <div className="flex-grow mr-2">
                        <label className="block text-gray-700 text-sm font-semibold">
                          OTP
                        </label>
                        <input
                          type="number"
                          name="otp"
                          value={otp}
                          onChange={(e) => setOtp(e.target.value)}
                          className="w-full px-4 py-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                          placeholder="Enter OTP"
                          disabled={emailVerified}
                        />
                      </div>
                      <button
                        type="button"
                        onClick={handleOtpSubmit}
                        className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-all duration-200 mt-7"
                        disabled={emailVerified}
                      >
                        Submit OTP
                      </button>
                    </div>
                    <div className="mb-4">
                      {resendTimeout > 0 ? (
                        <p className="text-gray-500">
                          Resend OTP in {resendTimeout}s
                        </p>
                      ) : (
                        <button
                          onClick={handleResendOtp}
                          className="text-blue-500 hover:underline"
                          disabled={emailVerified} // Disable resend button after verification
                        >
                          Resend OTP
                        </button>
                      )}
                    </div>
                  </>
                )}

                {otpVerified && (
                  <div className="fixed top-5 right-5 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg">
                    OTP Verified Successfully!
                  </div>
                )}

                <div className="mb-4 relative">
                  <label className="block text-gray-700 text-sm font-semibold">
                    Password
                  </label>
                  <input
                    type={showPassword ? "text" : "password"} // Toggle between text and password
                    name="password"
                    value={password}
                    onChange={handlePasswordChange}
                    className="w-full px-4 py-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
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
                      {passwordStrength === "medium" &&
                        "Make your password stronger"}
                      {passwordStrength === "strong" && "Password is strong"}
                    </p>
                  )}
                </div>

                <div className="mb-4 relative">
                  <label className="block text-gray-700 text-sm font-semibold">
                    Confirm Password
                  </label>
                  <input
                    type={showConfirmPassword ? "text" : "password"} // Toggle between text and password
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={handleConfirmPasswordChange}
                    className="w-full px-4 py-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
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
                    <p className="text-red-500 text-sm mt-2">
                      Passwords do not match.
                    </p>
                  )}
                </div>

                {otpVerified && (
                  <div className="fixed top-5 right-5 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg">
                    OTP Verified Successfully!
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full bg-black text-white py-2 rounded-sm hover:bg-green-600 transition-all duration-200"
                >
                  Sign Up
                </button>
              </form>
              <h1 className="w-full flex justify-center items-center text-red-400">
                {error}
              </h1>

              {showPopup && (
                <div className="fixed top-5 right-5 bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg">
                  OTP has been sent to your email.
                </div>
              )}

              <p className="text-center mt-4 text-sm text-gray-500">
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
          className={`w-full md:w-1/2 bg-cover transition-all duration-700 ease-in-out absolute top-0 right-0 h-full ${isLogin ? "translate-x-full" : "translate-x-0"}`}
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
