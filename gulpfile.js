/* Gulp
-------------------------------------------- */
const { series, parallel, src, dest, watch } = require("gulp");
const del = require("del");

/* Plugins
-------------------------------------------- */
const imagemin = require("gulp-imagemin");
const svgSprite = require("gulp-svg-sprite");
const rename = require("gulp-rename");

const srcPath = "assets";
const publicPath = "dist";

/* del
-------------------------------------------- */
function cleanTask(cb) {
    del([publicPath]);
    cb();
}

/* imagemin
-------------------------------------------- */
const imageminOptions =
    ([
        imagemin.gifsicle({ interlaced: true }),
        imagemin.mozjpeg({ quality: 75, progressive: true }),
        imagemin.optipng({ optimizationLevel: 5 }),
        imagemin.svgo({
            plugins: [{ removeViewBox: true }, { cleanupIDs: false }],
        }),
    ],
    {
        verbose: true,
    });

function imagesTask() {
    return src(`${srcPath}/images/**/*`)
        .pipe(imagemin(imageminOptions))
        .pipe(dest(`${publicPath}/images`));
}

/* fonts
-------------------------------------------- */
function fontsTask() {
    return src("**/*", { cwd: `${srcPath}/fonts` }).pipe(
        dest(`${publicPath}/fonts`)
    );
}

/* icons
-------------------------------------------- */
const config = {
    mode: {
        defs: {
            dest: "",
            sprite: "sprite.svg",
        },
    },
};

function iconsTask() {
    return src("**/*.svg", { cwd: "./assets/icons" })
        .pipe(svgSprite(config))
        .pipe(dest("./public/dist/icons"));
}

/* icomoonSvgTask
-------------------------------------------- */
// function icomoonSvgTask() {
//     return src("**/*", { cwd: `${srcPath}/icomoon` }).pipe(
//         dest(`${publicPath}/icomoon`)
//     );
// }

/* icomoonCssTask
-------------------------------------------- */
// function icomoonCssTask() {
//     return src("style.css", { cwd: "./assets/icomoon" })
//         .pipe(rename("icomoon.scss"))
//         .pipe(dest("./assets/styles/02.base"));
// }

/* watch
-------------------------------------------- */
function watchTask(cb) {
    watch("assets/images/**/*", imagesTask);
    watch("assets/fonts/**/*", fontsTask);
    cb();
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
exports.images = imagesTask;
exports.fonts = fontsTask;
exports.icons = iconsTask;
