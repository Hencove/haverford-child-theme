/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./_source/js/_cb13.js":
/*!*****************************!*\
  !*** ./_source/js/_cb13.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _media_query_handler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_media-query-handler */ "./_source/js/_media-query-handler.js");
/* harmony import */ var _debounce_throttle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_debounce-throttle */ "./_source/js/_debounce-throttle.js");


(function (document, window, $) {
  //
  // 		jQuery is ready as $

  //
  //
  //
  var hoverToggles = $(".cb13-3-column-hover .content-box-column");
  if (window.innerWidth <= 768) {
    return;
  }
  //
  //
  //
  hoverToggles.each(function () {
    //
    var boxWrapper = $(this).find(".content-box-wrapper");
    var contentContainer = $(this).find(".content-container");
    if (window.innerWidth <= 768) {
      $(this).removeClass("visible");
      return;
    }

    //
    //  ?   determine how much we need to slide the content for this content box
    //
    var SlideHeight = contentContainer.height() + 32 + "px";
    boxWrapper[0].style.setProperty("--slide-by-height", SlideHeight);

    //
    //
    //

    var throttledResizeHandler = (0,_debounce_throttle__WEBPACK_IMPORTED_MODULE_1__.throttle)(function () {
      console.log("Window Resized");
      var SlideHeight = contentContainer.height() + 32 + "px";
      boxWrapper[0].style.setProperty("--slide-by-height", SlideHeight);
    }, 16);
    window.addEventListener("resize", throttledResizeHandler);

    //
    // when hovering over a content box
    //
    $(this).hover(function () {
      //
      // toggle the visible class
      //
      $(this).toggleClass("visible");
    });
  });

  //
  //
  //

  var handleOver = {
    _init: function _init(event, key) {
      console.log("Crossed over " + key + " breakpoint.");
      // Add your custom JavaScript code for crossing over the breakpoint here
    }
  };
  var handleUnder = {
    _init: function _init(event, key) {
      console.log("Crossed under " + key + " breakpoint.");
      // Add your custom JavaScript code for crossing under the breakpoint here
    }
  };
  _media_query_handler__WEBPACK_IMPORTED_MODULE_0__["default"]._instance();
  _media_query_handler__WEBPACK_IMPORTED_MODULE_0__["default"]._init(handleOver, handleUnder);

  //
  //
})(document, window, jQuery);

/***/ }),

/***/ "./_source/js/_debounce-throttle.js":
/*!******************************************!*\
  !*** ./_source/js/_debounce-throttle.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   debounce: () => (/* binding */ debounce),
/* harmony export */   throttle: () => (/* binding */ throttle)
/* harmony export */ });
// Debouncing: This is useful for situations like search suggestions, where you want to wait for the user to finish typing before fetching suggestions.
var debounce = function debounce(func, delay) {
  var timer;
  return function () {
    //anonymous function
    var context = this;
    var args = arguments;
    clearTimeout(timer);
    timer = setTimeout(function () {
      func.apply(context, args);
    }, delay);
  };
};
// Throttling: Throttling is suitable for scenarios where you want to limit the frequency of function calls, like handling scroll events or resizing events.
var throttle = function throttle(func, limit) {
  var inThrottle;
  return function () {
    var args = arguments;
    var context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(function () {
        return inThrottle = false;
      }, limit);
    }
  };
};


/***/ }),

/***/ "./_source/js/_media-query-handler.js":
/*!********************************************!*\
  !*** ./_source/js/_media-query-handler.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
/**
 * mQHandler maps JS event onto our breakpoints nicely.
 * use this to fire scripts when we cross over a breakpoint threshold
 */
var mqHandler = {
  //
  breakpoints: {
    small: "800px",
    medium: "1024px",
    large: "1280px"
  },
  _instance: function _instance() {
    // pass this into the window so other files can access it
    return window.mqHandler = mqHandler;
  },
  _init: function _init() {
    var overFunction = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var underFunction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var _loop = function _loop() {
      var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
        key = _Object$entries$_i[0],
        value = _Object$entries$_i[1];
      var listener = window.matchMedia("(max-width: " + value + ")");
      listener.addEventListener("change", function (event) {
        if (event.matches) {
          if (underFunction._init) {
            underFunction._init(event, key);
          }
        } else {
          if (overFunction._init) {
            overFunction._init(event, key);
          }
          //
        }
      });
    };
    for (var _i = 0, _Object$entries = Object.entries(this.breakpoints); _i < _Object$entries.length; _i++) {
      _loop();
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mqHandler);

/***/ }),

/***/ "./_source/js/_thinkco-buttons.js":
/*!****************************************!*\
  !*** ./_source/js/_thinkco-buttons.js ***!
  \****************************************/
/***/ (() => {

(function (document, window, $) {
  //
  // 		jQuery is ready as $
  document.addEventListener("DOMContentLoaded", function () {
    var buttons = document.querySelectorAll(".think-custom-button");
    buttons.forEach(function (button) {
      var OrnamentHTML = '<div class="button__ornament button__ornament--vertical"><div class="button__ornament-top-bottom"></div><div class="button__ornament-left-right"></div></div><div class="button__ornament button__ornament--horizontal"><div class="button__ornament-top-bottom"></div><div class="button__ornament-left-right"></div></div>';
      button.insertAdjacentHTML("afterbegin", OrnamentHTML);
    });
  });
  //
  //
})(document, window, jQuery);

/***/ }),

/***/ "./_source/js/scripts.js":
/*!*******************************!*\
  !*** ./_source/js/scripts.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _thinkco_buttons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_thinkco-buttons */ "./_source/js/_thinkco-buttons.js");
/* harmony import */ var _thinkco_buttons__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_thinkco_buttons__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _cb13__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_cb13 */ "./_source/js/_cb13.js");
//
//


//
//
(function (document, window, $) {
  //
  // 		jQuery is ready as $

  //
  //
})(document, window, jQuery);

/***/ }),

/***/ "./_source/scss/styles.scss":
/*!**********************************!*\
  !*** ./_source/scss/styles.scss ***!
  \**********************************/
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/mini-css-extract-plugin/dist/loader.js):\nModuleBuildError: Module build failed (from ./node_modules/sass-loader/dist/cjs.js):\nSassError: Can't find stylesheet to import.\n   ╷\n21 │ @import './cb6';\n   │         ^^^^^^^\n   ╵\n  _source/scss/styles.scss 21:9  root stylesheet\n    at processResult (/Users/kylemarcy/Sites/havstaging/app/public/wp-content/themes/HavThinkChild/node_modules/webpack/lib/NormalModule.js:841:19)\n    at /Users/kylemarcy/Sites/havstaging/app/public/wp-content/themes/HavThinkChild/node_modules/webpack/lib/NormalModule.js:966:5\n    at /Users/kylemarcy/Sites/havstaging/app/public/wp-content/themes/HavThinkChild/node_modules/loader-runner/lib/LoaderRunner.js:400:11\n    at /Users/kylemarcy/Sites/havstaging/app/public/wp-content/themes/HavThinkChild/node_modules/loader-runner/lib/LoaderRunner.js:252:18\n    at context.callback (/Users/kylemarcy/Sites/havstaging/app/public/wp-content/themes/HavThinkChild/node_modules/loader-runner/lib/LoaderRunner.js:124:13)\n    at Object.loader (/Users/kylemarcy/Sites/havstaging/app/public/wp-content/themes/HavThinkChild/node_modules/sass-loader/dist/index.js:69:5)");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	__webpack_require__("./_source/js/scripts.js");
/******/ 	// This entry module doesn't tell about it's top-level declarations so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./_source/scss/styles.scss");
/******/ 	
/******/ })()
;