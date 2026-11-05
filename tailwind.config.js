/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        base: "#1e1b18",
        ink: "#d3cbbf",
        muted: "#968c80",
        accent: "#de8b60",
      },
      fontFamily: {
        display: ["Fraunces", "ui-serif", "Georgia", "serif"],
        body: ["Newsreader", "ui-serif", "Georgia", "serif"],
      },
      keyframes: {
        morph: {
          "0%, 100%": { borderRadius: "28% 72% 74% 26% / 7% 35% 65% 93%" },
          "25%": { borderRadius: "86% 14% 28% 72% / 66% 12% 88% 34%" },
          "50%": { borderRadius: "78% 22% 46% 54% / 90% 78% 22% 10%" },
          "75%": { borderRadius: "37% 63% 51% 49% / 11% 26% 74% 89%" },
        },
      },
      animation: {
        morph: "morph 32s ease-in-out infinite",
      },
    },
  },
  plugins: [],
}
