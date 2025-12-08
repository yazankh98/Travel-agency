/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#007A8C",
      },
      width: {
        vh50: "50vh"
      },
      screens: {
        mob: { max: "768px" },
      },
      fontFamily: {
  caveat: ['Caveat', 'cursive'],
      },
    },
  },
  plugins: [],
}