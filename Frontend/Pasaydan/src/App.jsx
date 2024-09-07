import axios from "axios";
import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    password: "",
    otp: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post(
        "http://localhost:8000/pasadan/auth/register",
        formData, // Pass formData directly
        {
          withCredentials: true,
        }
      );
  
      const data = response.data;
  
      setSuccess(data.message);
      setError("");
      // Optionally reset the form data
      setFormData({
        email: "",
        name: "",
        password: "",
        otp: "",
      });
    } catch (error) {
      // Check for error response from server
      const errorMessage = error.response?.data?.message || "An error occurred";
      setSuccess("");
      setError(errorMessage);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">User Registration</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        {error && <p className="text-red-500">{error}</p>}
        {success && <p className="text-green-500">{success}</p>}
        <div className="flex flex-col">
          <label htmlFor="email" className="mb-1 font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="border border-gray-300 p-2 rounded"
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="name" className="mb-1 font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="border border-gray-300 p-2 rounded"
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="password" className="mb-1 font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="border border-gray-300 p-2 rounded"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="otp" className="mb-1 font-medium text-gray-700">
            OTP
          </label>
          <input
            type="text"
            id="otp"
            name="otp"
            value={formData.otp}
            onChange={handleChange}
            className="border border-gray-300 p-2 rounded"
          />
        </div>
        <button
          type="submit"
          className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
