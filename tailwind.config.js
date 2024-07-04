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
        'primary_dark': '#1b1f23',
      },

      textColor: {
        'primary': '#e8e8e9',
        'primary_dark': '#1d2226',
        'primary_light': '#dededf',
      },
    },
  },
  plugins: [],
}