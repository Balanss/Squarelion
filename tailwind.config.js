/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // backgroundImage: {
        'logo': "url('/images/logo.png')",
      //   'hero-pattern': "url('/images/bg/small.jpg')",
      //   'footer-texture': "url('/img/footer-texture.png')",
      // },
      theme: {
        maxWidth: {
          '1/2': '50%',
        },
        screens: {
          'tablet': '640px',
          // => @media (min-width: 640px) { ... }
    
          'laptop': '1024px',
          // => @media (min-width: 1024px) { ... }
    
          'desktop': '1280px',
          // => @media (min-width: 1280px) { ... }
        },
      }
    },
  },
  plugins: [],
}