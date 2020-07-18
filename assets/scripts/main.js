// polyfills
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import 'element-closest/browser';

// import 'dom4'; // broke alpine ie 11
// import 'whatwg-fetch';
import 'picturefill';
import 'svgxuse';

import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfigFile from '../../tailwind.config.js'

window.tailwindConfig = resolveConfig(tailwindConfigFile)

import { initScrollPage }  from './utils/scrollPage'

import './alpine/accordion';
import './alpine/dropdown';
import './alpine/tab';
import './alpine/modal';
import './alpine/menuPanel';
import './alpine/menuMobile';
import './alpine/revealOnScroll';

// import loadWebfonts from './utils/webFonts';
// import lazyLoadInit from './utils/lazyLoad';

document.addEventListener('DOMContentLoaded', () => {

    initScrollPage();
    // load webfonts
    // loadWebfonts();
    // // init
    // demoInit();
    // lazyLoadInit();
    // devMode();
});


