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
      fontFamily: {
        wonder: ["Wonder", "sans-serif"],
      },
      fontSize: {
        sm: "var(--final-font-size)",
        md: "10vw",
        lg: "15vw",
        xl: "var(--initial-font-size)",
      },
      colors: {
        primary: "#5F63AA",
        secondary: "#FAF2E6",
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
