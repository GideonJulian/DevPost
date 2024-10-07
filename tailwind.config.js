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
        'light-gray': '#f6f6f6'
      }
    },
  },
  plugins: [],
}