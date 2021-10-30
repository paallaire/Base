/* eslint-disable import/no-extraneous-dependencies */

// polyfill only stable `core-js` features - ES and web standards:
import 'core-js/stable';
import 'regenerator-runtime/runtime';

// components
import svgHomeHeroInit from '@modules/svgHomeHero';
import parallaxInit from '@modules/parallax';
import StickyNav from '@modules/StickyNav';
import swiperServicesInit from '@modules/swiperServices';
import cursorCustomInit from '@modules/cursorCustom';
import navMobileInit from '@modules/navMobile';
import aosInit from '@modules/animationOnScroll';
import lazyImagesInit from '@modules/lazyImages';

// debug
import debugInit from '@debug/index';

document.addEventListener('DOMContentLoaded', () => {
  // const siteNav = new StickyNav('#site-header');
  // siteNav.init();

  // svgHomeHeroInit();
  // parallaxInit();
  // swiperServicesInit();
  // cursorCustomInit();
  // navMobileInit();
  // aosInit();
  // lazyImagesInit();

  // debugInit();
});
