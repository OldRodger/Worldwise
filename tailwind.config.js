/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        header: ["codystar", "segoe ui"]
      },
      colors: {
        "brand--1": "#ffb545",
        "brand--2": "#00c46a",

        "dark--0": " #242a2e",
        "dark--1": " #2d3439",
        "dark--2": " #42484d",

        "light--1": "#aaa",
        "light--2": "#ececec",
        "light--3": "#d6dee0",
      },
      backgroundImage: {
        hero: "linear-gradient(to right, rgba(0,0,0,.7), rgba(0,0,0,.7)),url('/bg.jpg')"
      }
    },
  },
  plugins: [],
}

