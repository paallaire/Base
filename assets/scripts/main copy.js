/* eslint-disable import/no-extraneous-dependencies */

// polyfill only stable `core-js` features - ES and web standards:
import 'core-js/stable';
import 'regenerator-runtime/runtime';

// components
import parallaxInit from '@modules/parallax';
import StickyNav from '@modules/StickyNav';
import swiperServicesInit from '@modules/swiperServices';
import cursorCustomInit from '@modules/cursorCustom';
import navMobileInit from '@modules/navMobile';
import aosInit from '@modules/animationOnScroll';
import lazyImagesInit from '@modules/lazyImages';
import Accordions from '@modules/Accordions';
import Tabs from '@modules/Tabs';
import modalInit from '@modules/modal';

// debug
import debugInit from '@debug/index';

document.addEventListener('DOMContentLoaded', () => {
  const siteNav = new StickyNav('.c-site-header');
  siteNav.init();

  const accordionBase = new Accordions('[accordion="theme-base"]');
  accordionBase.init();

  const accordionGreen = new Accordions('[accordion="theme-green"]');
  accordionGreen.init();

  const tabsBase = new Tabs('[tabs="theme-base"]');
  tabsBase.init();

  modalInit();

  // tabsInit();

  // parallaxInit();
  // swiperServicesInit();
  cursorCustomInit();
  // navMobileInit();
  // aosInit();
  // lazyImagesInit();

  // debugInit();
});
