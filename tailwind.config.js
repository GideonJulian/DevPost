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
        'hover': '#282828',
        'grey-blue': '#0e1217',
        'icon-col': '#181f27',
        'white-blue': '#d7d7e5'
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}