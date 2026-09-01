/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f7f5f0",
          100: "#ebe6d9",
          200: "#d6cdb3",
          300: "#c0b08a",
          400: "#a8946b",
          500: "#8f7a56",
          600: "#746247",
          700: "#5c4e3a",
          800: "#4a4031",
          900: "#3d352a",
        },
        sage: {
          50: "#f4f7f4",
          100: "#e3ebe3",
          200: "#c5d6c6",
          300: "#9bb89d",
          400: "#6f9472",
          500: "#527855",
          600: "#3f5f42",
          700: "#344d36",
          800: "#2c3f2e",
          900: "#253427",
        },
        cream: "#faf8f5",
        charcoal: "#2c2c2c",
      },
      fontFamily: {
        serif: ["Playfair Display", "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
}