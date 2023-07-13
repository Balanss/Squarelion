/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
<<<<<<< HEAD
      // backgroundImage: {
      //   'hero-pattern': "url('/images/bg/small.jpg')",
      //   'footer-texture': "url('/img/footer-texture.png')",
      // },
=======
      backgroundImage: {
        'hero-pattern': "url('/images/bg/small.jpg')",
        'footer-texture': "url('/img/footer-texture.png')",
      },
>>>>>>> a88b6fb6210fdd3e3709ce7d07f4eb6e3273dd32
      theme: {
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