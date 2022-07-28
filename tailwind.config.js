/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: { 
    
    extend: {},
    fontSize: {
      'full': "3rem",
      'hl-full':"2rem",
      'text-xs':'0.75rem',
      'text-base':'1rem',
      'text-xl':'1.25rem'
    },
    width: {
      '128': '92rem',

    },
    height: {
      '128': '74rem',
    },
    
  },
  plugins: [],
}