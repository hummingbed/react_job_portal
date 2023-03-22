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
