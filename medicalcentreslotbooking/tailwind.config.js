/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'black': '#000000',
      'bermuda': '#78dcca',
      'sky': '#2AA8FF',
      'navy': '#1B3C74',
      'light-grey': '#5C6169',
      'light-grey2': "#ABB6C7",
      'offWhite': 'linear-gradient(81deg, #E7F0FF 9.01%, rgba(232, 241, 255, 0.47) 89.11%)',
      'searchColor':'#F0F0F0',
      'white-off':'#FAFBFE',

    },
  },
  plugins: [],
}