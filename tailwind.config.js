/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors:{
        'green': '#00A194',
        'light-green': '#E5F6F4',
        'blue': '#0096D7',
        'light-blue': '#E6F5FB',
        'purple': '#471E6D',
        'light-purple': '#EDE8F0',
      }
    },
  },
  plugins: [],
}

