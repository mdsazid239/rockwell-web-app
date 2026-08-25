/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        rockwell: {
          blue: "#081B39",
          beige: "#F5F3E8",
        },
      },

      fontFamily: {
        cintarini: ["Cintarini", "cursive"],
        cambria: ["Cambria", "serif"],
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },

  plugins: [],
};