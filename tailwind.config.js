/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:false,
  theme: {
    extend: {
      // backgroundImage: {
        'logo': "url('/images/logo.png')",
        
      //   'hero-pattern': "url('/images/bg/small.jpg')",
      //   'footer-texture': "url('/img/footer-texture.png')",
      // },
        screens: {
          'tablet': '640px',
          // => @media (min-width: 640px) { ... }
           'laptop':'800px',
           'cal':'1000px',

          'desktop': '810px',
          // => @media (min-width: 1280px) { ... }
          

        },
      
    },
  },

  plugins: [],
}