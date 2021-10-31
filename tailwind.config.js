// tailwind.config.js
const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

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
    './styleguide/**/*.html',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: {
        1: '#f9f8f4',
        2: '#03030e',
        3: '#818187',
        4: '#F9F8F4',
        5: '#1A1A24',
      },
      blue: {
        1: '#4e95ff',
      },
      red: {
        1: '#EA4D5F',
      },
      green: {
        1: '#18aa64',
      },
      orange: {
        1: '#fd8e3d',
        2: '#F93506',
      },
    },
    borderRadius: {
      none: '0',
      base: '8px',
      full: '9999px',
    },
    container: {
      860: '860px',
      1000: '1000px',
      1060: '1060px',
      1100: '1100px',
      1280: '1280px',
      1360: '1360px',
      1380: '1380px',
      1660: '1660px',
      1920: '1920px',
    },
    screens: {
      xs: '400px',
      sm: '500px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1440px',
      '3xl': '1920px',
    },
    lineHeight: {
      none: '1',
      tight: '1.2',
      snug: '1.3',
      normal: '1.5',
      relaxed: '1.625',
      loose: '2',
    },
    spacing: {
      0: '0',
      gutter: '10px',
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
      base: '16px',
      md: '18px',
      lg: '20px',
      xl: '48px',
      ...fontSizeUnit,
    },
    fontFamily: {
      work: ['Work Sans', 'sans-serif'],
      montserrat: ['Montserrat', 'sans-serif'],
    },
    fill: {
      current: 'currentColor',
      transparent: 'transparent',
    },
    extend: {
      backgroundImage: {
        hero: 'linear-gradient(90deg, rgba(100,172,244,1) 0%, rgba(37,27,150,1) 60%, rgba(135,27,165,1) 100%);',
      },
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
        '-1': '-1',
        1: 1,
        10: 10,
        20: 20,
        30: 30,
        40: 40,
        50: 50,
        60: 60,
        70: 70,
        80: 80,
        90: 90,
        100: 100,
        overlay: 200,
        modal: 201,
      },
      transitionProperty: {
        height: 'height',
        maxHeight: 'max-height',
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#03030E',
            maxWidth: 'none',
            a: {
              color: '#03030E',
              textDecoration: 'underline',
              '&:hover': {
                color: '#03030E',
                textDecoration: 'none',
              },
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
    require('./assets/tailwindcss/plugins/debug-screens'),
    require('./assets/tailwindcss/plugins/container'),
    require('tailwind-css-variables')(
      {
        colors: false,
        screens: 'screen',
        fontFamily: false,
        fontSize: false,
        fontWeight: false,
        lineHeight: false,
        letterSpacing: false,
        backgroundSize: false,
        borderWidth: false,
        borderRadius: false,
        width: false,
        height: false,
        minWidth: false,
        minHeight: false,
        maxWidth: false,
        maxHeight: false,
        padding: false,
        margin: false,
        boxShadow: false,
        zIndex: false,
        opacity: false,
      },
      {
        postcssEachVariables: true,
      },
    ),
  ],
  corePlugins: {
    container: false,
  },
};
