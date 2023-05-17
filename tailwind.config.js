/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    styled: true,
    themes: false,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "dark",
  },
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      screens:{
        "lg":"1220px"
      },
      colors:{
Primary:"#999999",
Green:"#28e98c"
      },
      borderColor:{
        primary:"#565656"
      }
    },
  },
 
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    require("daisyui")
  ],
}