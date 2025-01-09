/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        base: {
          50: '#ffffff',
          100: '#e8e8ed',
          200: '#d2d2db',
          300: '#bbbbc8',
          400: '#a5a5b6',
          500: '#8e8ea4',
          600: '#727283',
          700: '#555562',
          800: '#393942',
          900: '#1c1c21',
        },
        primary: {
          100: '#f1e6ff',
          200: '#e3ccff',
          300: '#d5b3ff',
          400: '#c799ff',
          500: '#b980ff',
          600: '#9466cc',
          700: '#6f4d99',
          800: '#4a3366',
          900: '#251a33',
        },
        secondary: {
          100: '#ccf8e3',
          200: '#99f2c7',
          300: '#66ebab',
          400: '#33e58f',
          500: '#00de73',
          600: '#00b25c',
          700: '#008545',
          800: '#00592e',
          900: '#002c17',
        },
      },
    },
  },
  plugins: [],
};
