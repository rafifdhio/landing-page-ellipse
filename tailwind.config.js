/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['"Monserrat"', "sans-serif"],
        poppins: ['"Poppins"', "sans-serif"],
      },
      colors: {
        brand: "#FF6525",
      },
    },
  },
  plugins: [],
};
