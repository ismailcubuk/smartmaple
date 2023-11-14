/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        inter: ['Inter', 'sans-serif'],
      },
      colors:{
        secondWhite:'#C4C3C1',
      }
    },
  },
  plugins: [],
}