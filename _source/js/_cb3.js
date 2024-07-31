(function (document, window, $) {
	//
	// 		jQuery is ready as $

	let iconLogo = '<div class="cb3-h-icon"></div>';
	let vOrnament =
		'<div class="block__ornament block__ornament--outer"><div class="block__ornament-top-bottom"></div><div class="block__ornament-left-right"></div></div>';
	let hOrnament =
		'<div class="block__ornament block__ornament--inner"><div class="block__ornament-top-bottom"></div><div class="block__ornament-left-right"></div></div>';
	let ornamentHTML = vOrnament + hOrnament;

	$(".cb3-featured-stats").prepend(ornamentHTML);
	$(".cb3-featured-stats").append(iconLogo);

	//
})(document, window, jQuery);
