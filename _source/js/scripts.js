import "./gsap";
import "./_thinkco-buttons";
import "./_site-header";
import "./_cb1";
import "./_cb3";
import "./_cb8";
import "./_cb13";
import "./_cb17";
import "./_filter-adjustments.js";

import "./pages/ss4w";
//
//	? code here will execute before the DOM has fully loaded
//

(function (document, window, $) {
  //
  //	? code here will execute once the page is ready
  //
  // ... silence is golden

  $(".fusion-search-button .fusion-search-submit").val("");
  $("img").attr("srcset", "");
  $("img").attr("sizes", "");
  //
  //
  //
})(document, window, jQuery);

//* Test script for applying the ornament style on containers //*

(function (document, window, $) {
  $(window).on("load", function () {
    var containers = document.querySelectorAll(".ornament-test");

    containers.forEach(function (container) {
      let verticalOrnament = `
        <div class="button__ornament button__ornament--vertical">
          <div class="button__ornament-top-bottom"></div>
          <div class="button__ornament-left-right"></div>
        </div>`;

      let horizontalOrnament = `
        <div class="button__ornament button__ornament--horizontal">
          <div class="button__ornament-top-bottom"></div>
          <div class="button__ornament-left-right"></div>
        </div>`;

      let OrnamentHTML = verticalOrnament + horizontalOrnament;

      container.insertAdjacentHTML("afterbegin", OrnamentHTML);
    });
  });
})(document, window, jQuery);
