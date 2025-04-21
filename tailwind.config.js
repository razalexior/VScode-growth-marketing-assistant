/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          primary: "#005c2e",
          accent: "#7ce27c",
          subtleBg: "#f8fdf5",
        },
        fontFamily: {
          sans: ["Inter", "ui-sans-serif", "system-ui"],
        },
      },
    },
    plugins: [],
  };  