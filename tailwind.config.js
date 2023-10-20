/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.vue'],
  theme: {
    extend: {
      screens: {
        'custom': '915px',
      },
      textColor: {
        'primary': 'rgb(160, 200, 255)',  
      },
      fontSize: {
        'base': '1.6rem',
        'sm': '1.4rem'
      }
    },
  },
  plugins: [],
}

