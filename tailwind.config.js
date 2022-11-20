/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'monteserrat': ['Montserrat', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif']
      },
      screens: {
        mobileSM: '320px',
        mobileMD: '375px',
        mobileLG: '425px',
        tablet: '768px',
        laptop: '1024px',
        desktop: '1440px'
      },
    },
  },
  plugins: [],
}
