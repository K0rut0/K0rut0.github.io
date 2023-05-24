/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx}', './public/index.html'],
  theme: {
    extend: {
      fontFamily: {
        'public' : ['public sans', 'roboto', 'sans-serif']
      },
      colors: {
        'matteBlack': '#191919'
      },
      borderRadius: {
        'pill': '190px'
      }
    },
  },
  plugins: [],
}
