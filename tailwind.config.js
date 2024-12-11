/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background': '#f6fff8',
        'sidebar-bg': '#ffffff',
        'logo-color': '#3c6e71'
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}