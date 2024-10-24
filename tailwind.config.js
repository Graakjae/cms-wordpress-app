/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        custom: "0px 3px 6px rgba(0, 0, 0, 0.16)", // #00000029 is rgba(0, 0, 0, 0.16)
      },

      colors: {
        Beige: "#E6DAC7",
        PrimaryGreen: "#005E61",
        PrimaryGreenHover: "#004C4E",
        PrimaryGold: "#E6B14F",
        SecondaryGreen: "#83C4AE",
      },
      keyframes: {
        dropIn: {
          "0%": { transform: "translateY(-150%)" },
          "100%": { transform: "translateY(0)" },
        },
        dropOut: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(150%)" },
        },
      },
      animation: {
        dropIn: "dropIn 0.5s ease-in-out forwards",
        dropOut: "dropOut 0.5s ease-in-out forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
