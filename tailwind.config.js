/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        "deep-blue": "#1F2833",
        blue: "#66FCF1",
        red: "#FC4445",
        yellow: "#D79922",
        grey: "#8EE4AF",
        "dark-grey": "#C5C6C7",
        "opaque-black": "#0B0C10",
      },
      backgroundImage: (theme) => ({
        "gradient-rainbow":
          "linear-gradient(81.66deg, #D79922 7.21%, #FC4445 45.05%, #1F2833 78.07%)",

        "gradient-rainblue":
          "linear-gradient(90deg, #D79922 14.53%, #FC4445 69.36%, #1F2833 117.73%)",
      }),
      fontFamily: {
        roboto: ["Roboto", "serif"],
        opensans: ["Open Sans", "sans-serif"],
      },
      content: {
        brush: "url('./assets/brush.png')",
        person1: "url('./assets/person-1.png')",
        person2: "url('./assets/person-2.png')",
        person3: "url('./assets/person-3.png')",
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};