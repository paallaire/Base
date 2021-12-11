/* eslint-disable import/no-extraneous-dependencies */

// polyfill only stable `core-js` features - ES and web standards:
import 'core-js/stable';
import 'regenerator-runtime/runtime';

import Alpine from 'alpinejs';
import modal from './alpine/modal';
import navMobile from './alpine/navMobile';
// import accordion from './alpine/accordion';

import debugInit from './debug/index';
import cursorCustomInit from './modules/cursorCustom';

/* Alpine
-------------------------------------------- */
Alpine.data('modal', modal);
Alpine.data('navMobile', navMobile);
// Alpine.data('accordion', accordion);

window.Alpine = Alpine;
Alpine.start();

/* Custom javascript
-------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
  debugInit();
  cursorCustomInit();
});
