/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background': '#284b63',
        'sidebar-bg': '#212121',
        'logo-color': '#ff8600',
        'postCard-b': '#212121cc',
        'dark': '#212121'
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}