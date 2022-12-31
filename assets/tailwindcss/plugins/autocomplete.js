const plugin = require('tailwindcss/plugin')
const autocomplete = plugin(
  function ({ addUtilities, theme, e }) {
    const values = theme('autocomplete')
    var utilities = Object.entries(values).map(([key, value]) => {
      console.log('value:', value)
      console.log('key:', key)
      return {
        [`.${e(`${value}`)}`]: {},
      }
    })
    addUtilities(utilities)
  },
  {
    theme: {
      autocomplete: ['default']
    },
  },
)
module.exports = autocomplete
