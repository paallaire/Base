// tailwind.config.js
const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

const spacingUnits = require('./assets/tailwindcss/units/generateUnitByMultiplicator')(5, 200);
const fontSizeUnit = require('./assets/tailwindcss/units/generateUnitByMultiplicator')(2, 75);

module.exports = {
  mode: 'jit',
  purge: [
    './assets/**/*.js',
    './assets/**/*.jsx',
    './assets/**/*.ts',
    './assets/**/*.vue',
    './modules/**/*.php',
    './modules/**/*.twig',
    './templates/**/*.twig',
    './templates/**/*.html',
    './styleguide/**/*.twig',
    './styleguide/**/*.html'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      orange: {
        1: '#ff4000',
        2: '#ff7200'
      },
      gray: {
        1: '#46414d',
        2: '#f5f2f0',
        3: '#E5E5E5'
      },
      red: {
        1: '#ff0000'
      }
    },
    borderRadius: {
      'none': '0',
      "xs": "12px",
      "sm": "14px",
      "s": "15px",
      DEFAULT: '20px',
      "md": "18px",
      "lg": "20px",
      "xl": "28px",
      "2xl": "40px",
      "3xl": "68px",
      'full': '9999px',
    },
    boxShadow: {
      none: 'none',
      DEFAULT: "0px 4px 25px 0px rgba(0,0,0,0.15)",
      btn: '0px 4px 10px rgba(0, 0, 0, 0.15)',
      inner: "inset 0px 4px 4px 0px rgba(0,0,0,0.25)",
      input: "0px 2px 24px 2px rgba(0, 0, 0, 0.15)"
    },
    container: {
      '500': '500px',
      '600': '600px',
      '750': '750px',
      '800': '800px',
      '1100': '1100px',
      '1440': '1440px',
    },
    screens: {
      xs: '500px',
      md: '768px',
      lg: '1024px',
      xl: '1440px',
      '2xl': '1920px',
    },
    spacing: {
      0: '0',
      '1px': '1px',
      '2px': '2px',
      '3px': '3px',
      '4px': '4px',
      '6px': '6px',
      '7px': '7px',
      '8px': '8px',
      '9px': '9px',
      '1/2': '50%',
      '1/3': '33.333333%',
      '2/3': '66.666667%',
      '1/4': '25%',
      '2/4': '50%',
      '3/4': '75%',
      '1/5': '20%',
      '2/5': '40%',
      '3/5': '60%',
      '4/5': '80%',
      '1/6': '16.666667%',
      '2/6': '33.333333%',
      '3/6': '50%',
      '4/6': '66.666667%',
      '5/6': '83.333333%',
      '1/12': '8.333333%',
      '2/12': '16.666667%',
      '3/12': '25%',
      '4/12': '33.333333%',
      '5/12': '41.666667%',
      '6/12': '50%',
      '7/12': '58.333333%',
      '8/12': '66.666667%',
      '9/12': '75%',
      '10/12': '83.333333%',
      '11/12': '91.666667%',
      ...spacingUnits,
      ...defaultTheme.width,
    },
    fontSize: {
      "xs": "12px",
      "sm": "14px",
      "s": "15px",
      "base": "16px",
      "md": "18px",
      "lg": "20px",
      "xl": "28px",
      "2xl": "40px",
      "3xl": "68px",
      ...fontSizeUnit,
    },
    fontFamily: {
      'circular': ['Circular Std Book', 'Arial', 'sans-serif'],
      'circular-black': ['Circular Std Black', 'Arial', 'sans-serif'],
      'circular-bold': ['Circular Std Bold', 'Arial', 'sans-serif'],
      'circular-medium': ['Circular Std Medium', 'Arial', 'sans-serif'],
      'circular-book': ['Circular Std Book', 'Arial', 'sans-serif'],
      'roboto': ['Roboto', 'Arial', 'sans-serif'],
    },
    extend: {
      maxWidth: {
        ...spacingUnits,
      },
      minWidth: {
        ...spacingUnits,
      },
      maxHeight: {
        ...spacingUnits,
      },
      minHeight: {
        ...spacingUnits,
      },
      zIndex: {
        'overlay': 90,
        'modal': 100,
        'nav-mobile': 110,
      },
      width: {},
      typography: {
        DEFAULT: {
          css: {
            maxWidth: null,
            tracking: '0',
            lineHeight: '1.4',
            color: '#46414D',
            a: {
              color: '#fff',
              textDecoration: 'underline',
              '&:hover': {
                color: '#628395',
              }
            },
          }
        }
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
    require('./assets/tailwindcss/plugins/debug-screens'),
    require('./assets/tailwindcss/plugins/container'),
  ],
  corePlugins: {
    container: false,
  },
};

