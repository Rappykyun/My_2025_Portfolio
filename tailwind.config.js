/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        incognito: ['Incognito', 'sans-serif'],
        'incognito-condensed': ['Incognito Condensed', 'sans-serif'],
        mono: ['Gitlab Mono', 'monospace'],
      },
      backgroundColor: {
        'dark': "#1a1a1a",
      },
      colors: {
        'dark': "#1a1a1a",
        'dark-100': "#2b2b2b",
        'dark-200': "#3c3c3c",
        'dark-300': "#4d4d4d",
        'dark-400': "#5e5e5e",
        'dark-500': "#6f6f6f",
        'dark-600': "#808080",
        'dark-700': "#919191",
        'dark-800': "#a2a2a2",
        'dark-900': "#b3b3b3",
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        gradient: 'gradient 6s linear infinite',
        blob: 'blob 7s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          }
        },
        blob: {
          '0%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
          '33%': {
            transform: 'translate(30px, -50px) scale(1.1)',
          },
          '66%': {
            transform: 'translate(-20px, 20px) scale(0.9)',
          },
          '100%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
        },
      },
    },
  },
  plugins: [],
};
