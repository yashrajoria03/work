/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./pages/*.html"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      lx: "1440px",
    },
    extend: {
      colors: {
        accent: "#01d3af",
        textBlue: "#011145",
        medBlue: "#00033D",
        darkBlue: "#01104c",
        lightBlue: "#2600fe",
        veryDarkBlue: "hsl(233, 12%, 13%)",
        hoverBlue: "#8695fa",
        darkGreen: "#063638",
        orange: "#f57456",
        overlay: "#f2f3f6",
      },
      fontFamily: {
        interF: ["Inter"],
        body: ["Merriweather"],
      },
    },
  },
  plugins: [],
};
