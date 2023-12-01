/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./css/**/*.css", "./js/**/*.js"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "978px",
      xl: "1440px",
    },
    extend: {
      fontFamily: {
        sans: ["Josefin Sans", "sans-serif"],
        alata: ["Alata"],
      },


      letterSpacing: {
        widest: '.3em',
      }
    },
  },
  plugins: [],
};
