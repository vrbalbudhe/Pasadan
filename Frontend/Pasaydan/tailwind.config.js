// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(-50px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 1.5s ease-out forwards',
      },
      fontSize: {
        custom: "13px", // Custom text size
      },
      colors: {
        navFontColor: "#000000", // Correct color value for text-slate-700
        siteBlue: "#4361ee",
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar")({ nocompatible: true }), // Add configuration to enable modern features
  ],
};
