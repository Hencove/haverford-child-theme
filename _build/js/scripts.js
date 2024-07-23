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

/***/ "./_source/js/_cb3.js":
/*!****************************!*\
  !*** ./_source/js/_cb3.js ***!
  \****************************/
/***/ (() => {

(function (document, window, $) {
  //
  // 		jQuery is ready as $

  // CB3 Featured Stats
  var container = $(".cb3-featured-stats");
  var wrapperDivs = '<div class="cb3-H-icon"></div><div class="cb3-wrapper-outer"><div class="cb3-wrapper-outer-bottom"><div class="cb3-wrapper-outer-left"></div><div class="cb3-wrapper-outer-right"></div></div><div class="cb3-wrapper-inner"><div class="cb3-wrapper-inner-bottom"><div class="cb3-wrapper-inner-left"></div><div class="cb3-wrapper-inner-right"></div></div>' + $(container).html() + '</div></div>';
  $(container).html(wrapperDivs);

  //
  //
})(document, window, jQuery);

/***/ }),

/***/ "./_source/js/_cb8.js":
/*!****************************!*\
  !*** ./_source/js/_cb8.js ***!
  \****************************/
/***/ (() => {

(function (document, window, $) {
  //
  //	? code here will execute once the page is ready
  //

  //
  // This is garbage, but it works for testing
  // Currently, this file does not load when FEPro filters are used on the page. Could be a page load order issue.
  //

  // $( ".cb8-post-grid" ).on( "change", function() {
  //     console.log('ready');
  // });
  // $( ".cb8-post-grid").trigger( "change" );

  //     $('.widget_wpc_filters_widget').hide();
  //     $('.wpc-filter-header').hide();

  //     // Add an ALL filter to the top of the filter list that will unselect all other terms
  //     var searchbar = $('.wpc-filter-layout-search-field').html();

  //     var fusionBar = $('ul.fusion-filters');

  //     var searchbarInjected = '<li role="presentation" class="fusion-filter">' + searchbar + '</li>';
  //     fusionBar.append(searchbarInjected);

  // $('.wpc-filter-category').hide()
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
      if ($(button).hasClass("wpforms-submit")) {
        var buttonText = $(button).text();
        var ButtonTextHTML = '<div class="fusion-button-text">' + buttonText + '</div>';
        $(button).html(ButtonTextHTML);
      }
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
/* harmony import */ var _cb3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_cb3 */ "./_source/js/_cb3.js");
/* harmony import */ var _cb3__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_cb3__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _cb8__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_cb8 */ "./_source/js/_cb8.js");
/* harmony import */ var _cb8__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_cb8__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _cb13__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_cb13 */ "./_source/js/_cb13.js");

// import './_cb1';



//
//	? code here will execute before the DOM has fully loaded
//
(function (document, window, $) {
  //
  //	? code here will execute once the page is ready
  //
  // ... silence is golden
  //
  //
  //
})(document, window, jQuery);

/***/ }),

/***/ "./_source/scss/styles.scss":
/*!**********************************!*\
  !*** ./_source/scss/styles.scss ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/_build/js/scripts": 0,
/******/ 			"_build/css/styles": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkhavthinkchild"] = self["webpackChunkhavthinkchild"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["_build/css/styles"], () => (__webpack_require__("./_source/js/scripts.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["_build/css/styles"], () => (__webpack_require__("./_source/scss/styles.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;