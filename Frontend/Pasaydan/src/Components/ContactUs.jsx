/* eslint-disable no-unused-vars */
import { useState } from "react";
import axios from "axios";

function ContactUs() {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    message: "",
  });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleContactUs = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    try {
      const res = await axios.post(
        "http://localhost:8000/pasaydan/contact/makeRequest",
        formData,
        { withCredentials: true }
      );

      if (res.status === 200 && res.data.success) {
        setSuccess(true);
        setFormData({ fullname: "", email: "", message: "" });
        setTimeout(() => {
          setSuccess(false);
        }, 5000);
      } else {
        setError("Failed to send message. Please try again later.");
      }
    } catch (error) {
      setError("Failed to send message. Please try again later.");
    }
  };

  return (
    <div className="w-full h-fit flex flex-col justify-center items-center py-1">
      <div className="w-[100%] bg-white border-r border-l border-t-2 border-b-2 p-6 shadow-sm">
        <div className="w-full flex justify-between items-center mb-6">
          <h2 className="w-1/2 text-xl font-bold tracking-tight text-gray-800">
            Contact Us
          </h2>
        </div>

        <form onSubmit={handleContactUs} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="fullname"
                className="block text-sm font-medium text-gray-700"
              >
                Full Name
              </label>
              <input
                type="text"
                name="fullname"
                id="fullname"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Your full name"
                value={formData.fullname}
                onChange={handleChange}
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Your email address"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Message Field */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Write your message here..."
              rows="5"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="w-full flex justify-start items-start h-full">
            {" "}
            <button
              type="submit"
              className="group relative w-full md:w-1/2 lg:w-1/3 py-2 px-4 border border-transparent text-sm font-medium rounded-sm text-white bg-violet-400 hover:bg-violet-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Send Message
            </button>
          </div>

          {success && (
            <p className="text-green-600 text-center text-sm mt-4">
              Thank you for reaching out! We will get back to you shortly.
            </p>
          )}
          {error && (
            <p className="text-red-600 text-center text-sm mt-4">{error}</p>
          )}
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
