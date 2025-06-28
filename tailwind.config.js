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
      animation: {
        "gradient-slow": "gradientShift 4s ease infinite",
      },
      keyframes: {
        gradientShift: {
          "0%, 100%": {
            backgroundPosition: "0% 50%",
          },
          "50%": {
            backgroundPosition: "100% 50%",
          },
        },
      },
      backgroundSize: {
        200: "200% 200%",
      },
    },
  },
  plugins: [],
};
