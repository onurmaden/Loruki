/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ './*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        'lato': ['"Lato"', 'sans-serif'],
      },
      colors: {
        'primary':'#047aed',
        'secondary': '#1c3fa8',
        'dark':'#002240',
        'light': '#f4f4f4'
      }
    },
  },
  plugins: [],
}
