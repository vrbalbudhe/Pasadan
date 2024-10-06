// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        custom: "13px", // Custom text size
      },
      colors: {
        navFontColor: "#000000", // Correct color value for text-slate-700
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true }), // Add configuration to enable modern features
  ],
};
