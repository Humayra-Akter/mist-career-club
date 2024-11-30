const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#050a30",
        secondary: "#7083bf",
        accent: "#ffffff",
      },
    },
  },
  plugins: [],
};
