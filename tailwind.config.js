/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'noto': ['Noto+Sans+Hebrew'],
        'poppins': ['Poppins']
      },
      colors: {
        success: {
          100: '#338573',
          200: '#F6F7FA',
          300: 'rgba(51, 133, 115, 0.32)'
        },
      },
      screens: {
        'xxm': '250px',
        'xm': '425px',
      },
    },
  },
  plugins: [],
}
