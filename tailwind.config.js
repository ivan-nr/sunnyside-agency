/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        barlow: ["barlow", "sans-serif"],
        fraunces: ["fraunces", "serif"],
      },
    },
  },
  plugins: [],
};
