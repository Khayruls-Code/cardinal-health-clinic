module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      primary: "#b01842",
      secondary: "#6F00FF",
      white: "white",
      transparent: "transparent",
      text_primary: "#48D1CC",
      text_dark: "#002244",
      text_gray: "#777"
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
