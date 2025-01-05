/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "nexcent-primary": "#4CAF4F",
        "nexcent-secondary": "#263238",
        "nexcent-info": "#2194f3",
        "nexcent-primary-thin": "#a6d8a8",
        "nexcent-primary-bold": "#2f6a31",
        "nexcent-silver": "#F5F7FA",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
