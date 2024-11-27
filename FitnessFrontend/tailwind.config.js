/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@material-tailwind/react/**/*.js", // Include Material Tailwind files
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

