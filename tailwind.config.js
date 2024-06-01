/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        offWhite: "#f9f9f9",
        darkGray: "#2d2e32",
        lightGray: "#555555"
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      boxShadow: {
        'navBarShadow': '0 0 10px rgba(0, 0, 0, .09)',
      }
    },
  },
  plugins: [],
}

