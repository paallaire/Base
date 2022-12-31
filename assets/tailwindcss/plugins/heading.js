const plugin = require('tailwindcss/plugin')
const heading = plugin(
  function ({ addUtilities, theme, e }) {
    const values = theme('heading')
    var utilities = Object.entries(values).map(([key, value]) => {
      return {
        [`.${e(`heading-${key}`)}`]: value,
      }
    })
    addUtilities(utilities)
  },
  {
    theme: {
      heading: {
        2: {
          fontSize: '30px',
          'font-weight': 300,
          'line-height': 1.2
        }
      },
    },
  },
)
module.exports = heading
