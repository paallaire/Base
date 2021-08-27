const mix = require('laravel-mix');
require('dotenv').config();

const srcPath = 'assets';
const publicPath = 'dist';

mix.setPublicPath(publicPath)
  .js(`${srcPath}/scripts/main.js`, 'scripts')
  .sass(`${srcPath}/styles/main.scss`, 'styles')
  .copyDirectory(`${srcPath}/fonts`, `${publicPath}/fonts`)
  .copyDirectory(`${srcPath}/icons`, `${publicPath}/icons`)
  .copyDirectory(`${srcPath}/images`, `${publicPath}/images`)
  .options({
    processCssUrls: false,
    postCss: [require('tailwindcss')('./tailwind.config.js')],
  })
  .extract()
  .version();

if (!mix.inProduction()) {
  mix.sourceMaps().browserSync({
    // proxy: process.env.BASE_URL,
    files: [
      'modules/**/*.php',
      'templates/**/*.twig',
      'translations/**/*.php',
      `${publicPath}/**/*`,
    ],
  });
}
