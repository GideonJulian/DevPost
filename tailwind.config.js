/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background': '#171717',
        'sidebar-bg': '#212121',
        'logo-color': '#ff8600',
        'postCard-b': '#212121cc',
        'dark': '#292929',
        'light-grey': '#9ca3af',
        'high-light': '#2b3035',
        'border': '#e5e7eb',
        'dark-500': '#292929',
        'dark-300': '#353535'
        
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}