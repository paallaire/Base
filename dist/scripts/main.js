"use strict";
(self["webpackChunkmutation"] = self["webpackChunkmutation"] || []).push([["/scripts/main"],{

/***/ "./assets/scripts/alpine/modal.js":
/*!****************************************!*\
  !*** ./assets/scripts/alpine/modal.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (id) {
  return {
    isOpen: false,
    id: id,
    elHtml: document.querySelector('html'),
    init: function init() {
      var _this = this;

      document.addEventListener('modal:open', function (e) {
        if (_this.id === e.detail) {
          _this.isOpen = true;

          _this.$nextTick(function () {
            _this.elHtml.classList.add('no-scroll');

            _this.$refs.modalTitle.focus();
          });
        }
      }, false);
    },
    close: function close() {
      this.elHtml.classList.remove('no-scroll');
      this.isOpen = false;
    },
    isVisible: function isVisible() {
      return this.isOpen;
    }
  };
});

/***/ }),

/***/ "./assets/scripts/alpine/navMobile.js":
/*!********************************************!*\
  !*** ./assets/scripts/alpine/navMobile.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (id) {
  return {
    id: id,
    isOpen: false,
    elTrigger: null,
    cssClass: {
      isActive: 'is-active'
    },
    init: function init() {
      var _this = this;

      this.elTrigger = document.querySelectorAll("[data-trigger-nav-mobile=\"".concat(this.id, "\"]"));
      document.addEventListener('navMobile:open', function (e) {
        _this.open();
      }, false);
      document.addEventListener('navMobile:close', function (e) {
        _this.close();
      }, false);
      var mobileMenuLinks = document.querySelectorAll('.c-mobile-menu-nav a');
      mobileMenuLinks.forEach(function (element, index) {
        element.addEventListener('click', function (e) {
          document.dispatchEvent(new CustomEvent('navMobile:close', {
            bubbles: true,
            detail: {}
          }));
        });
      });
    },
    close: function close() {
      var _this2 = this;

      this.isOpen = false;
      this.elTrigger.forEach(function (el) {
        el.classList.remove(_this2.cssClass.isActive);
      });
    },
    open: function open() {
      var _this3 = this;

      this.isOpen = true;
      this.elTrigger.forEach(function (el) {
        el.classList.add(_this3.cssClass.isActive);
      });
    }
  };
});

/***/ }),

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
var screens = {};
var screensUnits = getComputedStyle(document.documentElement).getPropertyValue('--screens').split(',');
screensUnits.forEach(function (el, index) {
  var name = el.replace(/\s/g, '');
  var value = parseInt(getComputedStyle(document.documentElement).getPropertyValue("--screen-".concat(el)).replace(/\s/g, '').replace('px', ''), 10);
  screens[name] = Number.isNaN(value) ? 0 : value;
});


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
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper */ "./assets/scripts/debug/helper.js");
/* harmony import */ var _GridVisualizer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GridVisualizer */ "./assets/scripts/debug/GridVisualizer.js");


function debugInit() {
  if (_helper__WEBPACK_IMPORTED_MODULE_0__.isDev) {
    document.querySelector('body').classList.add('debug', 'debug-screens');
    var websiteGrid = new _GridVisualizer__WEBPACK_IMPORTED_MODULE_1__["default"]({
      numberColumns: 12,
      containerCSsClass: 'container-1100-px',
      rowCssClass: 'flex gap-x-4',
      columnsCssClass: 'w-1/12',
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
/* harmony import */ var alpinejs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! alpinejs */ "./node_modules/alpinejs/dist/module.esm.js");
/* harmony import */ var _alpine_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./alpine/modal */ "./assets/scripts/alpine/modal.js");
/* harmony import */ var _alpine_navMobile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./alpine/navMobile */ "./assets/scripts/alpine/navMobile.js");
/* harmony import */ var _debug_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./debug/index */ "./assets/scripts/debug/index.js");
/* harmony import */ var _modules_cursorCustom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/cursorCustom */ "./assets/scripts/modules/cursorCustom.js");
/* eslint-disable import/no-extraneous-dependencies */
// polyfill only stable `core-js` features - ES and web standards:




 // import accordion from './alpine/accordion';



/* Alpine
-------------------------------------------- */

alpinejs__WEBPACK_IMPORTED_MODULE_2__["default"].data('modal', _alpine_modal__WEBPACK_IMPORTED_MODULE_3__["default"]);
alpinejs__WEBPACK_IMPORTED_MODULE_2__["default"].data('navMobile', _alpine_navMobile__WEBPACK_IMPORTED_MODULE_4__["default"]); // Alpine.data('accordion', accordion);

window.Alpine = alpinejs__WEBPACK_IMPORTED_MODULE_2__["default"];
alpinejs__WEBPACK_IMPORTED_MODULE_2__["default"].start();
/* Custom javascript
-------------------------------------------- */

document.addEventListener('DOMContentLoaded', function () {
  (0,_debug_index__WEBPACK_IMPORTED_MODULE_5__["default"])();
  (0,_modules_cursorCustom__WEBPACK_IMPORTED_MODULE_6__["default"])();
});

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
  var links = document.querySelectorAll('a, button');
  var elCustomCursor = document.querySelector('.js-custom-cursor');
  console.log('elCustomCursor:', elCustomCursor);
  elCustomCursor.setAttribute('data-module', 'custom-cursor');
  document.body.appendChild(elCustomCursor);

  if (elCustomCursor) {
    document.addEventListener('mousemove', function (e) {
      var x = e.clientX;
      var y = e.clientY;
      elCustomCursor.style.left = "".concat(x, "px");
      elCustomCursor.style.top = "".concat(y, "px");
    });
    document.addEventListener('mousedown', function () {
      elCustomCursor.classList.add('is-click');
    });
    document.addEventListener('mouseup', function () {
      elCustomCursor.classList.remove('is-click');
    });
  }

  if (links) {
    links.forEach(function (item) {
      item.addEventListener('mouseover', function () {
        elCustomCursor.classList.add('is-hover');
      });
      item.addEventListener('mouseleave', function () {
        elCustomCursor.classList.remove('is-hover');
      });
    });
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