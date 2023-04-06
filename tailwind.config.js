/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", ...defaultTheme.fontFamily.sans],
        NeutralFaceBold: ["NeutralFace-Bold", ...defaultTheme.fontFamily.sans],
        NeutralFace: ["NeutralFace", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  corePlugins: {
    container: false,
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".container": {
          maxWidth: "100%",
          margin: "auto",
          "@screen sm": {
            maxWidth: "95%",
          },
          "@screen md": {
            maxWidth: "90%",
          },
        },
      });
    },
  ],
};
