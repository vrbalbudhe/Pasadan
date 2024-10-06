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
  plugins: [],
};
