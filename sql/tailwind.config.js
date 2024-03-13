/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
    "./node_modules/tailwind-datepicker-react/dist/**/*.js", // <--- Add this line
  ],
  darkMode:false,
  theme: {
    extend: {
      colors: {
        primary: "#0f172a",
        secondary: "#111d39",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
        'dark-purple': '#5B3E90',
        'dark-blue': '#00008B',
      }, 
      boxShadow: { 
        card: "0px 0px 60px -15px #2C5282",
        card2: "0px 0px 60px -15px #000000",
      },
  
      // backgroundImage: {
        'logo': "url('/images/logo.png')",
        
      //   'hero-pattern': "url('/images/bg/small.jpg')",
      //   'footer-texture': "url('/img/footer-texture.png')",
      // },
        screens: {
          'tablet': '640px',
          // => @media (min-width: 640px) { ... }
           'laptop':'800px',
           'laptopL':"1024px",
           'cal':'1000px',
           'phones':{'max':'639px'},

          'desktop': '810px',
          // => @media (min-width: 1280px) { ... }
          

        },
      
    },
  },

  plugins: [
    require('flowbite/plugin')({
      charts: true,
  }),
  require('tailwindcss-animated'),
  
  ],
  
}