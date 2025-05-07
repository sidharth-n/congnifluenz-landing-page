/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0B3D91',
          light: '#1a4ca0',
          dark: '#082e6e',
          100: '#e6edf8',
          200: '#b3c9ec',
          300: '#80a5e0',
          400: '#4d82d4',
          500: '#1a5ec8',
          600: '#154ba0',
          700: '#0B3D91', // primary
          800: '#082e6e',
          900: '#051f4b',
        },
        secondary: {
          DEFAULT: '#4B0082',
          light: '#5a0091',
          dark: '#3c0073',
          100: '#f0e6f5',
          200: '#d9b3e6',
          300: '#c280d7',
          400: '#ab4dc8',
          500: '#941ab9',
          600: '#761594',
          700: '#4B0082', // secondary
          800: '#3c0073',
          900: '#28004d',
        },
        tertiary: {
          DEFAULT: '#008080',
          light: '#199999',
          dark: '#006666',
          100: '#e6f5f5',
          200: '#b3e6e6',
          300: '#80d7d7',
          400: '#4dc8c8',
          500: '#1ab9b9',
          600: '#159494',
          700: '#008080', // tertiary
          800: '#006666',
          900: '#004d4d',
        },
        accent: {
          DEFAULT: '#00FFFF',
          light: '#33ffff',
          dark: '#00cccc',
        },
        background: '#F8F8FF',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        mono: ['Roboto Mono', 'monospace'],
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #0B3D91 0%, #4B0082 100%)',
        'gradient-secondary': 'linear-gradient(135deg, #4B0082 0%, #008080 100%)',
        'gradient-tertiary': 'linear-gradient(135deg, #008080 0%, #00FFFF 100%)',
      },
      boxShadow: {
        'card': '0 10px 30px rgba(0, 0, 0, 0.1)',
        'card-hover': '0 15px 35px rgba(0, 0, 0, 0.15)',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-3px)' },
        }
      },
    },
  },
  plugins: [],
};