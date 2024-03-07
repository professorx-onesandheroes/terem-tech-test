/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#2f516d",
        secondary: "#899bb2",
        grey: "#e1e1e1",
        caret: "#444444",
      },
    },
  },
  plugins: [],
};
