// tailwind.config.js

/** @type {import('tailwindcss').Config} */
const tailwindConfig = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT(tailwindConfig);
