/* Gulp
-------------------------------------------- */
const { series, parallel, src, dest, watch } = require("gulp");
const del = require("del");

/* Variables
-------------------------------------------- */
const srcPath = "assets";
const publicPath = "dist";

/* Plugins
-------------------------------------------- */
const rename = require("gulp-rename");
const less = require('gulp-less');
const postcss = require('gulp-postcss');

dir = {
  src: 'assets/',
  build: 'dist/'
};

/* del
-------------------------------------------- */
function cleanTask() {
  return del([dir.build]);
}

/* less
-------------------------------------------- */
function lessTask() {

  return gulp
    .src(dir.srcPath + 'less/main.less')
    // .pipe(plumber())
    .pipe(less())
    .pipe(
      postcss([
        // require('tailwindcss')('../../libs/tailwindcss/tailwind.config.js'),
        require('autoprefixer'),
        require('postcss-pxtorem')({
          rootValue: 10,
          unitPrecision: 5,
          propList: ['font', 'font-size', 'line-height', 'letter-spacing'],
          selectorBlackList: [],
          replace: true,
          mediaQuery: false,
          minPixelValue: 0
        })
      ])
    )
    .pipe(
      rename({
        suffix: '.min'
      })
    )
    .pipe(gulp.dest(dir.build));
  // .pipe(
  //     browserSyncSiteReload({
  //         stream: true
  //     })
  // );


}







/* watch
-------------------------------------------- */
function watchTask(done) {
  watch("assets/images/**/*", imagesTask);
  watch("assets/fonts/**/*", fontsTask);
  done();
}

/* env
-------------------------------------------- */
// if (process.env.NODE_ENV === 'production') {
//   exports.build = series(transpile, minify);
// } else {
//   exports.build = series(transpile, livereload);
// }

/* tasks
-------------------------------------------- */
exports.default = series(
  cleanTask,
  imagesTask,
  fontsTask,
);

exports.watch = series(
  cleanTask,
  imagesTask,
  fontsTask,
  watchTask
);

exports.clean = cleanTask;
exports.less = lessTask;
exports.images = imagesTask;
exports.fonts = fontsTask;
exports.icons = iconsTask;
