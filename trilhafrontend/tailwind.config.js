/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        condensed: ["condensed", "sans-serif"],
        condensedItalic: ["condensedItalic", "sans-serif"],
      },
      colors: {
        red: "#E53939",
      },
    },
  },
  plugins: [],
};
