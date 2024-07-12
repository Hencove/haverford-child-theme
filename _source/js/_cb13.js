//
(function (document, window, $) {
	//
	// 		jQuery is ready as $

	//
	//
	//
	let hoverToggles = $(".cb13-3-column-hover .content-box-column");

	//
	//
	//
	hoverToggles.each(function () {
		//
		let boxWrapper = $(this).find(".content-box-wrapper");
		let contentContainer = $(this).find(".content-container");

		//
		//  ?   determine how much we need to slide the content for this content box
		//
		let SlideHeight = contentContainer.height() + 32 + "px";
		boxWrapper[0].style.setProperty("--slide-by-height", SlideHeight);

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
})(document, window, jQuery);
