/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'primary': '#1d2226',
      },

      textColor: {
        'primary': '#e8e8e9',
        'primary_dark': '#1d2226',
      },
    },
  },
  plugins: [],
}