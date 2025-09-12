(function (document, window, $) {
  //
  // 		jQuery is ready as $
  //

  $(window).on("load", function () {
    // console.log("[_thinkco-buttons.js] button enhancement script running");

    $(".wpforms-save-resume-confirmation")
      .find('button, input[type="submit"], a.fusion-button')
      .addClass("think-custom-button");
    //
    $(".wpforms-page-1 .wpforms-page-next").addClass("think-custom-button");

    //
    var buttons = document.querySelectorAll(".think-custom-button");
    //
    //
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

      //! THIS WORKS FOR STYLING BUT NOT FOR SUBMITTING THE FORM
      ////! WE NEED THE INPUT VALUE FOR SENDING, OR ANOTHER APPROACH
      if ($(button).hasClass("wpcf7-submit")) {
        //? Replace CF7 input[type="submit"] with a <button>
        const buttonText = button.value;
        const classes = button.className;
        const $newButton = $(`
        <button type="submit" class="${classes}">
          <div class="fusion-button-text">${buttonText}</div>
        </button>
      `);
        $(button).replaceWith($newButton);
        button = $newButton[0]; // update reference for ornament injection
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
