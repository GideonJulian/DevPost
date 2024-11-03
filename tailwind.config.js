/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main-blue': '#4c49ed',
        'hover': '#282828'
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}