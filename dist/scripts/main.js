"use strict";
(self["webpackChunkmutation"] = self["webpackChunkmutation"] || []).push([["/scripts/main"],{

/***/ "./assets/scripts/debug/GridVisualizer.js":
/*!************************************************!*\
  !*** ./assets/scripts/debug/GridVisualizer.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ GridVisualizer; }
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var GridVisualizer = /*#__PURE__*/function () {
  function GridVisualizer(options) {
    _classCallCheck(this, GridVisualizer);

    var defaultOptions = {
      numberColumns: 12,
      containerCSsClass: '',
      rowCssClass: '',
      columnsCssClass: 'w-1/12',
      columnsCssClassCustom: null,
      blockCssClass: 'bg-gray-400'
    };
    this.options = Object.assign(defaultOptions, options);
    this.options.namespace = 'dev-grid-visualizer';
  }

  _createClass(GridVisualizer, [{
    key: "init",
    value: function init() {
      var $buttonToggle = document.createElement('button');
      var $GridVisualizer = document.createElement('div');
      var $container = document.createElement('div');
      var $row = document.createElement('div'); // buttonToggle

      $buttonToggle.setAttribute('class', 'dev-grid-visualizer-toggle');
      $buttonToggle.innerHTML = 'Show Grid';
      document.body.appendChild($buttonToggle); // bind event

      $buttonToggle.addEventListener('click', function (e) {
        e.preventDefault();
        $GridVisualizer.classList.toggle('is-active');

        if ($GridVisualizer.classList.contains('is-active')) {
          $buttonToggle.innerHTML = 'Hide grid';
        } else {
          $buttonToggle.innerHTML = 'Show grid';
        }
      }); // GridVisualizer

      $GridVisualizer.setAttribute('class', 'dev-grid-visualizer');
      document.body.appendChild($GridVisualizer); // container

      $container.setAttribute('class', "dev-grid-visualizer__container ".concat(this.options.containerCSsClass));
      $GridVisualizer.appendChild($container); // row

      $row.setAttribute('class', "dev-grid-visualizer__row ".concat(this.options.rowCssClass));
      $container.appendChild($row);

      for (var i = 0; i < this.options.numberColumns; i += 1) {
        var column = document.createElement('div');
        var $block = document.createElement('div');

        if (this.options.columnsCssClassCustom) {
          column.setAttribute('class', "dev-grid-visualizer__column ".concat(this.options.columnsCssClass, " ").concat(this.options.columnsCssClassCustom[i]));
        } else {
          column.setAttribute('class', "dev-grid-visualizer__column ".concat(this.options.columnsCssClass));
        }

        $row.appendChild(column);
        $block.setAttribute('class', "dev-grid-visualizer__block ".concat(this.options.blockCssClass));
        column.appendChild($block);
      }
    }
  }]);

  return GridVisualizer;
}();



/***/ }),

/***/ "./assets/scripts/debug/helper.js":
/*!****************************************!*\
  !*** ./assets/scripts/debug/helper.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "lang": function() { return /* binding */ lang; },
/* harmony export */   "isDev": function() { return /* binding */ isDev; },
/* harmony export */   "screens": function() { return /* binding */ screens; }
/* harmony export */ });
var searchTermsDev = ['local', 'dev', 'stage', 'test'];
var elHtml = document.querySelector('html');
var lang = elHtml.getAttribute('lang') !== null ? elHtml.getAttribute('lang') : 'en';
var isDev = searchTermsDev.some(function (el) {
  return window.location.href.includes(el);
});
var screens = {
  xs: 500,
  md: 768,
  ls: 1024,
  lg: 1280,
  xl: 1440,
  '2xl': 1920
};


/***/ }),

/***/ "./assets/scripts/debug/index.js":
/*!***************************************!*\
  !*** ./assets/scripts/debug/index.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ debugInit; }
/* harmony export */ });
/* harmony import */ var _debug_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @debug/helper */ "./assets/scripts/debug/helper.js");
/* harmony import */ var _debug_GridVisualizer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @debug/GridVisualizer */ "./assets/scripts/debug/GridVisualizer.js");


function debugInit() {
  if (_debug_helper__WEBPACK_IMPORTED_MODULE_0__.isDev) {
    document.querySelector('body').classList.add('debug', 'debug-screens');
    var websiteGrid = new _debug_GridVisualizer__WEBPACK_IMPORTED_MODULE_1__["default"]({
      numberColumns: 12,
      containerCSsClass: 'container-1100-px',
      rowCssClass: 'flex -mx-2',
      columnsCssClass: 'px-2 w-1/12',
      columnsCssClassCustom: null
    });
    websiteGrid.init();
  }
}

/***/ }),

/***/ "./assets/scripts/main.js":
/*!********************************!*\
  !*** ./assets/scripts/main.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_stable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/stable */ "./node_modules/core-js/stable/index.js");
/* harmony import */ var core_js_stable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_stable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modules_svgHomeHero__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @modules/svgHomeHero */ "./assets/scripts/modules/svgHomeHero.js");
/* harmony import */ var _modules_parallax__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @modules/parallax */ "./assets/scripts/modules/parallax.js");
/* harmony import */ var _modules_StickyNav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @modules/StickyNav */ "./assets/scripts/modules/StickyNav.js");
/* harmony import */ var _modules_swiperServices__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @modules/swiperServices */ "./assets/scripts/modules/swiperServices.js");
/* harmony import */ var _modules_cursorCustom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @modules/cursorCustom */ "./assets/scripts/modules/cursorCustom.js");
/* harmony import */ var _modules_navMobile__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @modules/navMobile */ "./assets/scripts/modules/navMobile.js");
/* harmony import */ var _modules_animationOnScroll__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @modules/animationOnScroll */ "./assets/scripts/modules/animationOnScroll.js");
/* harmony import */ var _modules_lazyImages__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @modules/lazyImages */ "./assets/scripts/modules/lazyImages.js");
/* harmony import */ var _debug_index__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @debug/index */ "./assets/scripts/debug/index.js");
/* eslint-disable import/no-extraneous-dependencies */
// polyfill only stable `core-js` features - ES and web standards:

 // components








 // debug


document.addEventListener('DOMContentLoaded', function () {// const siteNav = new StickyNav('#site-header');
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

/***/ }),

/***/ "./assets/scripts/modules/StickyNav.js":
/*!*********************************************!*\
  !*** ./assets/scripts/modules/StickyNav.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ StickyNav; }
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var StickyNav = /*#__PURE__*/function () {
  function StickyNav(selector) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var isDebug = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    _classCallCheck(this, StickyNav);

    this.selector = selector;
    this.element = document.querySelector(this.selector);
    this.options = options;
    this.isDebug = isDebug;
    this.lastTop = document.documentElement.scrollTop;
    this.top = null;
  }

  _createClass(StickyNav, [{
    key: "init",
    value: function init() {
      var _this = this;

      this.top = document.documentElement.scrollTop;
      this.lastTop = this.top;
      setTimeout(function () {
        _this.onScroll();
      }, 1);
    }
  }, {
    key: "onScroll",
    value: function onScroll() {
      var _this2 = this;

      this.top = document.documentElement.scrollTop;

      if (this.top !== this.lastTop) {
        if (this.top <= 0) {
          this.element.classList.remove('is-fixed');
          this.element.classList.add('is-top');
        } else {
          this.element.classList.remove('is-top');
        }

        if (this.top > this.lastTop && this.top > 0) {
          this.element.classList.add('is-fixed');
        } else if (this.top < this.lastTop) {// this.element.classList.remove('is-fixed');
        }
      } else if (this.top <= 0) {
        this.element.classList.add('is-top');
      }

      this.lastTop = document.documentElement.scrollTop;
      requestAnimationFrame(function () {
        return _this2.onScroll();
      });
    }
  }]);

  return StickyNav;
}();



/***/ }),

/***/ "./assets/scripts/modules/animationOnScroll.js":
/*!*****************************************************!*\
  !*** ./assets/scripts/modules/animationOnScroll.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ aosInit; }
/* harmony export */ });
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aos */ "./node_modules/aos/dist/aos.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_0__);

function aosInit() {
  aos__WEBPACK_IMPORTED_MODULE_0___default().init({
    disable: function disable() {
      return window.innerWidth < 1024;
    },
    startEvent: 'DOMContentLoaded',
    // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init',
    // class applied after initialization
    animatedClassName: 'aos-animate',
    // class applied on animation
    useClassNames: false,
    // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false,
    // disables automatic mutations' detections (advanced)
    debounceDelay: 50,
    // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99,
    // the delay on throttle used while scrolling the page (advanced)
    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 200,
    // offset (in px) from the original trigger point
    delay: 0,
    // values from 0 to 3000, with step 50ms
    duration: 400,
    // values from 0 to 3000, with step 50ms
    easing: 'ease-out',
    // default easing for AOS animations
    once: true,
    // whether animation should happen only once - while scrolling down
    mirror: false,
    // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom' // defines which position of the element regarding to window should trigger the animation

  }); // https://github.com/michalsnik/aos/issues/135

  window.addEventListener('load', function () {
    aos__WEBPACK_IMPORTED_MODULE_0___default().refresh();
  });
}

/***/ }),

/***/ "./assets/scripts/modules/cursorCustom.js":
/*!************************************************!*\
  !*** ./assets/scripts/modules/cursorCustom.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ cursorCustomInit; }
/* harmony export */ });
function cursorCustomInit() {
  var cursor = document.querySelector('.cursor');
  var a = document.querySelectorAll('a, button');
  document.addEventListener('mousemove', function (e) {
    var x = e.clientX;
    var y = e.clientY;
    cursor.style.left = "".concat(x, "px");
    cursor.style.top = "".concat(y, "px");
  });
  document.addEventListener('mousedown', function () {
    cursor.classList.add('click');
  });
  document.addEventListener('mouseup', function () {
    cursor.classList.remove('click');
  });
  a.forEach(function (item) {
    item.addEventListener('mouseover', function () {
      cursor.classList.add('hover');
    });
    item.addEventListener('mouseleave', function () {
      cursor.classList.remove('hover');
    });
  });
}

/***/ }),

/***/ "./assets/scripts/modules/lazyImages.js":
/*!**********************************************!*\
  !*** ./assets/scripts/modules/lazyImages.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ lazyImagesInit; }
/* harmony export */ });
function lazyImagesInit() {
  var lazyloadImages;
  var lazyloadThrottleTimeout;
  /* funciton
  -------------------------------------------- */

  function lazyload() {
    if (lazyloadThrottleTimeout) {
      clearTimeout(lazyloadThrottleTimeout);
    }

    lazyloadThrottleTimeout = setTimeout(function () {
      lazyCheck();
    }, 20);
  }

  function lazyCheck() {
    var scrollTop = window.pageYOffset;
    lazyloadImages.forEach(function (img) {
      if (img.offsetTop < window.innerHeight + scrollTop) {
        img.src = img.dataset.src;
        img.classList.remove('lazy');
      }
    });

    if (lazyloadImages.length == 0) {
      document.removeEventListener('scroll', lazyload);
      window.removeEventListener('resize', lazyload);
      window.removeEventListener('orientationChange', lazyload);
    }
  }
  /* init
    -------------------------------------------- */


  if ('IntersectionObserver' in window) {
    lazyloadImages = document.querySelectorAll('.lazy');
    var imageObserver = new IntersectionObserver(function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var image = entry.target;
          image.src = image.dataset.src;
          image.classList.remove('lazy');
          imageObserver.unobserve(image);
        }
      });
    });
    lazyloadImages.forEach(function (image) {
      imageObserver.observe(image);
    });
  } else {
    lazyloadImages = document.querySelectorAll('.lazy');
    document.addEventListener('scroll', lazyload);
    window.addEventListener('resize', lazyload);
    window.addEventListener('orientationChange', lazyload);
  }
}

/***/ }),

/***/ "./assets/scripts/modules/navMobile.js":
/*!*********************************************!*\
  !*** ./assets/scripts/modules/navMobile.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ navMobileInit; }
/* harmony export */ });
function navMobileInit() {
  var $html = document.querySelector('html');
  var $hamburger = document.querySelectorAll('.hamburger');
  var $navMobile = document.querySelector('#site-nav-mobile');
  $hamburger.forEach(function ($element, index) {
    $element.addEventListener('click', function (e) {
      e.preventDefault();
      var $hamburgerHeader = document.querySelector('#site-header .hamburger');
      var $hamburgerNavMobile = document.querySelector('#site-nav-mobile .hamburger');
      $navMobile.classList.toggle('is-active');
      $html.classList.toggle('no-scroll');

      if ($navMobile.classList.contains('is-active')) {
        $hamburgerHeader.classList.add('is-active');
        $hamburgerNavMobile.classList.add('is-active');
      } else {
        $hamburgerHeader.classList.remove('is-active');
        $hamburgerNavMobile.classList.remove('is-active');
      }
    });
  });
}

/***/ }),

/***/ "./assets/scripts/modules/parallax.js":
/*!********************************************!*\
  !*** ./assets/scripts/modules/parallax.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ parallaxInit; }
/* harmony export */ });
/* harmony import */ var rellax__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rellax */ "./node_modules/rellax/rellax.js");
/* harmony import */ var rellax__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rellax__WEBPACK_IMPORTED_MODULE_0__);

function parallaxInit() {
  var elRellax = document.querySelectorAll('.rellax');

  if (elRellax.length) {
    var rellax = new (rellax__WEBPACK_IMPORTED_MODULE_0___default())('.rellax', {
      speed: -2,
      center: false,
      wrapper: null,
      round: true,
      vertical: true,
      horizontal: false
    });
  }
}

/***/ }),

/***/ "./assets/scripts/modules/svgHomeHero.js":
/*!***********************************************!*\
  !*** ./assets/scripts/modules/svgHomeHero.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ svgHomeHeroInit; }
/* harmony export */ });
function svgHomeHeroInit() {
  var svgCircles = document.querySelectorAll('.svg-circle-follow');
  svgCircles.forEach(function (element) {
    var animateMotion = element.querySelector('animateMotion');
    var begin = animateMotion.getAttribute('begin');

    if (begin) {
      var duration = parseInt(begin, 10) * 1000;
      setTimeout(function () {
        element.classList.add('is-active');
      }, duration);
    } else {
      element.classList.add('is-active');
    }
  });
}

/***/ }),

/***/ "./assets/scripts/modules/swiperServices.js":
/*!**************************************************!*\
  !*** ./assets/scripts/modules/swiperServices.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ swiperServicesInit; }
/* harmony export */ });
/* harmony import */ var swiper_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper/bundle */ "./node_modules/swiper/swiper-bundle.esm.js");
/* harmony import */ var swiper_css_bundle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper/css/bundle */ "./node_modules/swiper/swiper-bundle.min.css");
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper/css */ "./node_modules/swiper/swiper.min.css");
// import Swiper bundle with all modules installed
 // import styles bundle

 // import Swiper styles


function swiperServicesInit() {
  var isSmall = window.matchMedia('(min-width: 0px) and (max-width: 768px)');
  var elSlider = document.querySelector('.swiper-services');
  var elSection;
  var swiper = null;

  function init() {
    if (swiper === null) {
      swiper = new swiper_bundle__WEBPACK_IMPORTED_MODULE_0__["default"](elSlider, {
        spaceBetween: 20,
        speed: 500,
        slidesPerView: 1.2,
        slidesPerGroupAuto: 'auto',
        allowTouchMove: true,
        navigation: {
          prevEl: elSection.querySelector('.swiper-button-arrow--prev'),
          nextEl: elSection.querySelector('.swiper-button-arrow--next')
        }
      });
    }
  }

  function check() {
    if (!isSmall.matches) {
      if (swiper) {
        swiper.destroy(true, true);
      }

      swiper = null;
    } else if (isSmall.matches) {
      init();
    }
  }

  if (elSlider) {
    elSection = elSlider.closest('[data-slider="services"]');

    if (isSmall.matches) {
      init();
    }

    window.addEventListener('resize', function () {
      check();
    });
    check();
  }
}

/***/ }),

/***/ "./assets/styles/main.scss":
/*!*********************************!*\
  !*** ./assets/styles/main.scss ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["styles/main","/scripts/vendor"], function() { return __webpack_exec__("./assets/scripts/main.js"), __webpack_exec__("./assets/styles/main.scss"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);