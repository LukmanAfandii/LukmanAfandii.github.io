/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        "blob": "blob 6s infinite",
      },
      keyframes: {
        
          "blob": {
            '0%': {
              transform: 'translate(0) scale(1)',
            },
            '33%': {
              transform: 'translate(50px, -50px) scale(1.2)',            
            },
            '66%': {

              transform: 'translate(0, 50px) scale(0.9)',
            },
            '100%': {
              transform: 'translate(0) scale(1)',
            },
          },
        
      },
    },
    plugins: [],
  },
}