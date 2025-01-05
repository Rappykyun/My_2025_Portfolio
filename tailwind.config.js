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
      }
    },
  },
  plugins: [],
};
