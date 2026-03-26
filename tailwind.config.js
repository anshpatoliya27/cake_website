/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#fff1f5',
        'cream-dark': '#ffe4ed',
        blush: '#ffc2d4',
        rose: {
          50: '#fff1f5',
          100: '#ffe4ed',
          200: '#ffc2d4',
          300: '#ff9dba',
          400: '#ff6b9d',
          500: '#f43f7a',
          600: '#e11d5b',
          700: '#be1248',
          800: '#9d123f',
          900: '#841439',
        },
      },
      fontFamily: {
        display: ['Outfit', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(244, 63, 122, 0.1)',
        'glass-lg': '0 16px 48px 0 rgba(244, 63, 122, 0.15)',
        'cake': '0 20px 60px -10px rgba(244, 63, 122, 0.2)',
        'soft': '0 4px 24px rgba(0, 0, 0, 0.06)',
      },
      backdropBlur: {
        'glass': '20px',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-soft': 'pulse-soft 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.8 },
        },
      },
    },
  },
  plugins: [],
}