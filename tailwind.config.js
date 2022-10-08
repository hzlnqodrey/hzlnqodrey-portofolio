/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    colors: {
      'white': "#fff", 
      'black': '#000',
      'grey': '#686868',
      'light-grey': '#F5F5F5',
      'blue1': '#007EDA',
      'blue2': '#0162A8',
      'blue3': '#DBF0FF',
      'yellow1': '#F7BD4A',
      'yellow2': '#B27E15',
    },
    fontFamily: {
      'plus-jakarta': ['"Plus Jakarta Sans"', 'sans-serif'],
    },
  },
  plugins: [],
}
