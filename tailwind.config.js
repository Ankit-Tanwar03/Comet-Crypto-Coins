/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'mustard-yellow': '#ffdb58',
        'beige': '#FBF7ED',
        'dark-green': '#01805D',
        'light-beige': '#faf3e0',
        'dark-gray': '#333333',
        'dark-mustard-yellow': '#d4af37',
        'green': '#2e8b57',
        'red': '#ff6347',
        'light-gray': '#d3d3d3'
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      },
    },
  },
  plugins: [],
}

