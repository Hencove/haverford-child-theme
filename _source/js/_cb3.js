(function (document, window, $) {
  //
  // 		jQuery is ready as $

  $(window).on("load", function () {
    const CB3 = $(".cb3-featured-stats");

    if (!CB3.length) {
      return;
    }

    let iconLogo = '<div class="cb3-h-icon"></div>';
    let vOrnament =
      '<div class="block__ornament block__ornament--outer"><div class="block__ornament-top-bottom"></div><div class="block__ornament-left-right"></div></div>';
    let hOrnament =
      '<div class="block__ornament block__ornament--inner"><div class="block__ornament-top-bottom"></div><div class="block__ornament-left-right"></div></div>';
    let ornamentHTML = vOrnament + hOrnament;

    CB3.prepend(ornamentHTML);
    CB3.append(iconLogo);
  });

  //
})(document, window, jQuery);
