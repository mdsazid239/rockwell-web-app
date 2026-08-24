/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0A1F3D",
          50: "#EBEEF3",
          100: "#D0D9E4",
          200: "#A6B7CD",
          300: "#7A94B4",
          400: "#4E709A",
          500: "#2E4E77",
          600: "#173A66",
          700: "#132C52",
          800: "#0F2344",
          900: "#0A1F3D",
          950: "#060F20",
        },
        cream: {
          DEFAULT: "#F5F3E8",
          50: "#FDFCF9",
          100: "#F5F3E8",
          200: "#EDE9D6",
        },
        gold: {
          DEFAULT: "#C9A24B",
          light: "#E4C77A",
          dark: "#9A7A2E",
        },
      },
      fontFamily: {
        serif: ["'Playfair Display'", "Georgia", "serif"],
        script: ["'Tangerine'", "'Dancing Script'", "cursive"],
        sans: ["'Jost'", "'Helvetica Neue'", "Arial", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.25em",
      },
    },
  },
  plugins: [],
};
