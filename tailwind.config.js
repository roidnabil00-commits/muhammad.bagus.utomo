/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: "#c9a84c",
        "gold-light": "#e8c97a",
        "site-black": "#0a0a0a",
      },
      fontFamily: {
        serif: ["Playfair Display", "serif"],
        sans: ["DM Sans", "sans-serif"],
        bebas: ["Bebas Neue", "sans-serif"],
      },
    },
  },
  plugins: [],
};
