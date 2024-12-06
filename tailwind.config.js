/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        orange: {
          DEFAULT: '#FD4F00',
          500: '#FD4F00',
          600: '#E04600', // Slightly darker for hover states
        },
        black: {
          DEFAULT: '#262324',
        },
        gray: {
          DEFAULT: '#4B5054',
          100: '#F3F4F6', // Light gray for backgrounds
          300: '#D1D5DB', // Medium gray for borders
          500: '#4B5054', // Your specified gray
          600: '#4B5054', // Using the same gray for consistency
          700: '#374151', // Darker gray for text
        },
        // New colors
        skyBlue: {
          DEFAULT: '#98D2E1',
          500: '#98D2E1',
        },
        limeGreen: {
          DEFAULT: '#A1CF81',
          500: '#A1CF81',
        },
        paleYellow: {
          DEFAULT: '#EFDEA4',
          500: '#EFDEA4',
        },
        lightGreen: {
          DEFAULT: '#BAD77A',
          500: '#BAD77A',
        },
      },
    },
  },
  plugins: [],
}

