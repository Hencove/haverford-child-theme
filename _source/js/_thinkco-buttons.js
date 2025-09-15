(function (document, window, $) {
  //
  // 		jQuery is ready as $
  //

  $(window).on("load", function () {
    // console.log("[_thinkco-buttons.js] button enhancement script running");
    //? Target Submit button when using save/resume on multistep form
    $(".wpforms-save-resume-confirmation")
      .find('button, input[type="submit"], a.fusion-button')
      .addClass("think-custom-button");
    //
    //? Target first page of multistep form, first next button only
    $(".wpforms-page-1 .wpforms-page-next").addClass("think-custom-button");
    //
    var buttons = document.querySelectorAll(".think-custom-button");
    //
    buttons.forEach(function (button) {
      if ($(button).hasClass("wpforms-submit")) {
        var buttonText = $(button).text();
        let ButtonTextHTML =
          '<div class="fusion-button-text">' + buttonText + "</div>";
        $(button).html(ButtonTextHTML);
      }
      if ($(button).hasClass("wpforms-page-next")) {
        var buttonText = $(button).text();
        let ButtonTextHTML =
          '<div class="fusion-button-text">' + buttonText + "</div>";
        $(button).html(ButtonTextHTML);
      }

      let verticalOrnament =
        '<div class="button__ornament button__ornament--vertical"><div class="button__ornament-top-bottom"></div><div class="button__ornament-left-right"></div></div>';
      let horizontalOrnament =
        '<div class="button__ornament button__ornament--horizontal"><div class="button__ornament-top-bottom"></div><div class="button__ornament-left-right"></div></div>';
      let OrnamentHTML = verticalOrnament + horizontalOrnament;

      button.insertAdjacentHTML("afterbegin", OrnamentHTML);
    });
  });

  //
  //
})(document, window, jQuery);
