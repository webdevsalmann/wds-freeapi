/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        mont: ['Montserrat', 'sans-serif'],
        rubikmono: ['Rubik Mono One', 'monospace'],
        gabar: ['Gabarito', 'sans-serif'],
        bungee: ['Bungee', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        lora: ['Lora', 'serif'],
      },
      colors: {
        "danger": "#ed252f",
        "danger-light": "#ff9595",
        "danger-dark": "#920000",
        "primary": "#0365FF",
        "primary-light": "#8F95FF",
        "primary-dark": "#000888",
        "safe": "#24e138",
        "safe-light": "#bbffcc",
        "safe-dark": "#004800",
        "info": "#e6ea0c",
        "info-light": "#feffbf",
        "info-dark": "#656200",
        "focus": "#0e7490",
        "focus-light": "#3edbf7",
        "focus-dark": "#037d93",
      },
    },
  },
  plugins: ['prettier-plugin-tailwindcss'],
}
