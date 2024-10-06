// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        custom: "13px", // Custom text size
      },
      colors:{
        navFontColor:"text-slate-700"
      }
    },
  },
<<<<<<< HEAD
  plugins: [],
};
=======
  plugins: [
    require('tailwind-scrollbar'),
  ],
  variants: {
    scrollbar: ['rounded'], // Enables the 'rounded' variant
  },
}
>>>>>>> d22920205e2f8c53036a774cbb039a3e92270d30
