/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./_source/js/scripts.js":
/*!*******************************!*\
  !*** ./_source/js/scripts.js ***!
  \*******************************/
/***/ (() => {

//
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
  var hoverToggles = $(".cb13-3-column-hover .content-box-column");
  hoverToggles.each(function () {
    var contentContainer = $(this).find(".content-container");

    // when hovering over a content box
    $(this).hover(function () {
      // $(this).toggleClass("visible");

      // adjust the content container
      contentContainer.slideToggle();
    });
  });

  // CB3 Featured Stats

  var container = $(".cb3-featured-stats");
  var wrapperDivs = '<div class="cb3-H-icon"></div><div class="cb3-wrapper-outer"><div class="cb3-wrapper-outer-bottom"><div class="cb3-wrapper-outer-left"></div><div class="cb3-wrapper-outer-right"></div></div><div class="cb3-wrapper-inner"><div class="cb3-wrapper-inner-bottom"><div class="cb3-wrapper-inner-left"></div><div class="cb3-wrapper-inner-right"></div></div>' + $(container).html() + '</div></div>';
  $(container).html(wrapperDivs);

  //
  //
})(document, window, jQuery);

/***/ }),

/***/ "./_source/scss/styles.scss":
/*!**********************************!*\
  !*** ./_source/scss/styles.scss ***!
  \**********************************/
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/mini-css-extract-plugin/dist/loader.js):\nModuleBuildError: Module build failed (from ./node_modules/sass-loader/dist/cjs.js):\nSassError: 50% and 26 are incompatible.\n   ╷\n38 │                 flex: 0 1 calc(50% - (52 / 2));\n   │                                ^^^^^^^^^^^^^^\n   ╵\n  _source/scss/_cb3.scss 38:32   @import\n  _source/scss/styles.scss 21:9  root stylesheet\n    at processResult (/Users/alexbouthillier/Dev/SITES/havdev/app/public/wp-content/themes/HavThinkChild/node_modules/webpack/lib/NormalModule.js:841:19)\n    at /Users/alexbouthillier/Dev/SITES/havdev/app/public/wp-content/themes/HavThinkChild/node_modules/webpack/lib/NormalModule.js:966:5\n    at /Users/alexbouthillier/Dev/SITES/havdev/app/public/wp-content/themes/HavThinkChild/node_modules/loader-runner/lib/LoaderRunner.js:400:11\n    at /Users/alexbouthillier/Dev/SITES/havdev/app/public/wp-content/themes/HavThinkChild/node_modules/loader-runner/lib/LoaderRunner.js:252:18\n    at context.callback (/Users/alexbouthillier/Dev/SITES/havdev/app/public/wp-content/themes/HavThinkChild/node_modules/loader-runner/lib/LoaderRunner.js:124:13)\n    at Object.loader (/Users/alexbouthillier/Dev/SITES/havdev/app/public/wp-content/themes/HavThinkChild/node_modules/sass-loader/dist/index.js:69:5)");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	__webpack_modules__["./_source/js/scripts.js"]();
/******/ 	// This entry module doesn't tell about it's top-level declarations so it can't be inlined
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./_source/scss/styles.scss"]();
/******/ 	
/******/ })()
;