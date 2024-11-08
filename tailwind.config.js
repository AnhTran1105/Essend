/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        admin: {
          background: "#0a0a0a",
          primary: "#C244FB",
          secondary: "#b4b4b4",
        },
        user: {},
      },
      fontFamily: {
        admin: ["Nunito", "sans-serif"],
      },
    },
  },
  plugins: [],
};
