/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-green": "#051612",
        "dark-medium-green": "#061b16",
        "dark:light-green": "",
        "medium-green": "#34CAA5"
      }
    },
  },
  plugins: [],
}