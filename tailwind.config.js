const plugin = require("tailwindcss/plugin");

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Include your file paths here
  ],
  theme: {
    extend: {
      animation: {
        "bounce-delay": "bounce-delay 2s ease-in-out infinite",
        load: "load-bar 2s linear infinite",
      },
      keyframes: {
        "bounce-delay": {
          "0%, 33%, 100%": { transform: "translateY(0)" },
          "16%": { transform: "translateY(-20px)" },
        },
        "load-bar": {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".animate-bounce-delay": {
          display: "inline-block",
          transform: "translateY(0)",
        },
      });
    }),
  ],
};
