//
(function (document, window, $) {
	//
	// 		jQuery is ready as $

	document.addEventListener("DOMContentLoaded", function () {
		var buttons = document.querySelectorAll(".think-custom-button");
		buttons.forEach(function (button) {

			if ($(button).hasClass("wpforms-submit")) {
				var buttonText = $(button).text();
				let ButtonTextHTML =
					'<div class="fusion-button-text">' + buttonText + '</div>';
				$(button).html(ButtonTextHTML);
			}

			let OrnamentHTML =
				'<div class="button__ornament button__ornament--vertical"><div class="button__ornament-top-bottom"></div><div class="button__ornament-left-right"></div></div><div class="button__ornament button__ornament--horizontal"><div class="button__ornament-top-bottom"></div><div class="button__ornament-left-right"></div></div>';
			button.insertAdjacentHTML("afterbegin", OrnamentHTML);

		});
	});

	let hoverToggles = $(".cb13-3-column-hover .content-box-column");


	hoverToggles.each(function () {
		let contentContainer = $(this).find(".content-container");

		// when hovering over a content box
		$(this).hover(function () {

			// $(this).toggleClass("visible");
			
			// adjust the content container
			contentContainer.slideToggle();
		});
	});


	// CB3 Featured Stats

	var container = $(".cb3-featured-stats");
	let wrapperDivs = 
		'<div class="cb3-H-icon"></div><div class="cb3-wrapper-outer"><div class="cb3-wrapper-outer-bottom"><div class="cb3-wrapper-outer-left"></div><div class="cb3-wrapper-outer-right"></div></div><div class="cb3-wrapper-inner"><div class="cb3-wrapper-inner-bottom"><div class="cb3-wrapper-inner-left"></div><div class="cb3-wrapper-inner-right"></div></div>' + $(container).html() + '</div></div>'
	$(container).html(wrapperDivs);

	//
	//
})(document, window, jQuery);
