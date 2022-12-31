module.exports = {
  plugins: {
    'postcss-import': {},
    'tailwindcss/nesting': {},
    //tailwindcss: { config: './tailwind.config.dev.js' },
    tailwindcss: { config: process.env.NODE_ENV === 'production' ? './tailwind.config.dev.js' : './tailwind.config.dev.js' },
    autoprefixer: {},
  },
}


