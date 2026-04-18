/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backdropBlur: {
        xs: "2px",
      },
      colors: {
        primary: "#06b6d4",
        secondary: "#0f172a",
      },
    },
  },
  plugins: [],
};
