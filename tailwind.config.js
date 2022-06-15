/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        magenta: {
          900: '#bb64c8'
        },
        purple: {
          900: '#783183'
        },
        blue: {
          200: '#5acaee'
        }
      }
    }
  },
  plugins: []
}
