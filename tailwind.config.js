/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/**/*.{html,ejs}", "./views/partials/**/*.ejs"],
  theme: {
    extend: {
      fontFamily: {
        glitch: ["Rubik Glitch", "cursive"],
        bytesized: ['Bytesized', 'sans-serif'],
        sixtyfour: ["Sixtyfour", 'sans-serif']
      },
    },
  },
  plugins: [],
}