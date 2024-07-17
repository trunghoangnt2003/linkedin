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
        'primary_light': '#38434f',
         'my-blue': '#70b5f9',
      },

      textColor: {
        'primary': '#e8e8e9',
        'primary_dark': '#1d2226',
        'primary_light': '#dededf',
        'my-blue': '#70b5f9',
      },
    },
  },
  plugins: [],
}