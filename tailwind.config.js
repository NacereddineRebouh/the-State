/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
    boxShadow: {
      '3xl': '0px 0px 20px rgba(100, 100, 100, .5)',
    }
  },
    screens: {
      'xs': '440px',
      // => @media (min-width: 440px) { ... }
  
      'sm': '640px',
      // => @media (min-width: 640px) { ... }
  
      'md': '868px',
      // => @media (min-width: 768px) { ... }
  
      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }
  
      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }
  
      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
      
      '3xl': '1654px',
      // => @media (min-width: 1654px) { ... }
  
      '4xl': '1954px',
      // => @media (min-width: 1954px) { ... }

      '5xl': '2200px',
      // => @media (min-width: 2200px) { ... }
    }
  },
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true }),
  ],
}
