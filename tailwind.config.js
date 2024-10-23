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
      colors: {},
      keyframes: {
        dropInOut: {
          "0%": { transform: "translateY(-150%)" },
          "10%": { transform: "translateY(0)" },
          "90%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(100%)" },
        },
        dropOut: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(150%)" },
        },
      },
      animation: {
        dropInOut: "dropInOut 4s ease-in-out 1",
        dropOut: "dropOut 0.5s ease-in-out 1",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
