/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        orange: {
          500: "#F28524",
          600: "#E67E22",
        },
      },
    },
  },
  plugins: [],
};
