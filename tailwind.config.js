/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "xion-dark": "#0A1F44", // logo ka gehra neela
        "xion-blue": "#1A73E8", // logo ka chamakta neela
        "xion-orange": "#F9AB00", // logo ka orange
      },
    },
  },
  plugins: [],
};
