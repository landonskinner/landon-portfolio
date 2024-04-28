/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": 'url("/images/background.svg")',
      },
      animation: {
        "enter-left": "enterLeft 1s ease forwards",
        "enter-right": "enterRight 1s ease forwards",
      },
      keyframes: {
        enterLeft: {
          "0%": {
            transform: "translateX(-200%)",
          },
          "60%": {
            transform: "translateX(20%) skew(-10deg)",
          },
          "80%": {
            transform: "translateX(-15%) skew(5deg)",
          },
          "100%": {
            transform: "translateX(-5%) skew(0deg)",
          },
        },
        enterRight: {
          "0%": {
            transform: "translateX(200%)",
          },
          "60%": {
            transform: "translateX(-20%) skew(10deg)",
          },
          "80%": {
            transform: "translateX(15%) skew(-5deg)",
          },
          "100%": {
            transform: "translateX(5%) skew(0deg)",
          },
        },
      },
    },
  },
  plugins: [],
};
