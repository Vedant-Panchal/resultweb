/** @type {import('tailwindcss,flowbite').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a",
          950: "#172554",
        },
        light: '#FAFAFE',
        lightElevate:'#FFFFFF',
        lightElevateHover:'#f7f9f9 ',
        lightNav: '#F5FBFF',
        dark: "#15131D",
        darkElevate: "#312E3F",
        darkElevateHover: "#15141C",
        darkNav: '#1C1A26'
      },
    },
  },
  plugins: [],
  darkMode: "class",
};