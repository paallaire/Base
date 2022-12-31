/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./assets/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    autocomplete: ['btn-primary', 'link', 'link-nav', 'link-white', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'wysiwyg-base'],
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#000',
      white: '#fff',
      orange: {
        1: '#F37132',
      },
      blue: {
        1: '#0E193F',
        2: '#BDD6E0'
      },
    },
    fontFamily: {
      arial: ['arial', 'sans-serif'],
      helvetica: ['NeueHelvetica55Roman', 'sans-serif'],
      domaine: ['domaine-display', 'Times', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography')({
      className: 'wysiwyg',
    }),
    require('./assets/tailwindcss/plugins/autocomplete'),
    require('./assets/tailwindcss/plugins/debug-screens'),
    // require('./assets/tailwindcss/plugins/container'),
  ],
}
