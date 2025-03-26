"use strict";
//
//	? code here will execute before the DOM has fully loaded
//
(function (document, window, $) {
  //
  //	? code here will execute once the page is ready
  //
  // ... silence is golden

  let siteSearchHandler = {
    //
    //
    _init: () => {
      //
      let SearchElement = $(".fusion-tb-header .fusion-search-element");

      $(".search-button", SearchElement).on("click", () => {
        SearchElement.toggleClass("is-expanded-by-focus");
      });

      //
      siteSearchHandler._offCanvasSearchHandler();
    },

    //
    //
    _offCanvasSearchHandler: () => {
      // append close icon to search bar
      let closeIcon = $(
        ".awb-off-canvas:has(.is-the-site-search-flyout) .off-canvas-close",
      ).detach();
      $(
        ".awb-off-canvas .is-the-site-search-flyout .fusion-search-element",
      ).append(closeIcon);
    },
  };

  siteSearchHandler._init();

  //
  //
  //
})(document, window, jQuery);
