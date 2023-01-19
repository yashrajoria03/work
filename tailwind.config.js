/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      lx: "1440px",
    },
    extend: {
      colors: {
        backgroundColor: "rgba(17,17,17,1)",
        backgroundColorNav: "rgba(17,17,17,0.7)",
        brightRed: "#f91942",
        brightRedLight: "hsl(12, 88%, 69%)",
        brightRedSupLight: "hsl(12, 88%, 95%)",
        medBlue: "#00033D",
        darkBlue: "#424df8",
        lightBlue: "#2600fe",
        darkGrayishBlue: "hsl(227, 12%, 61%)",
        veryDarkBlue: "hsl(233, 12%, 13%)",
        veryPaleRed: "hsl(13, 100%, 96%)",
        veryLightGray: "hsl(0, 0%, 98%)",
        overlay: "#f2f3f6",
        cardColor: "#121212",
        cc: "#2f2f2f",
        test: "#8695fa",
      },
      fontFamily: {
        interF: ["Inter"],
        body: ["Merriweather"],
      },
      backgroundImage: {
        "desktop-pattern": "url('/images/desk-pattern.svg')",
      },
    },
  },
  plugins: [],
};
