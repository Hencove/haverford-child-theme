import mqHandler from "./_media-query-handler";
import { debounce, throttle } from "./_debounce-throttle";
(function (document, window, $) {
	//
	// 		jQuery is ready as $

	//
	//
	//
	let hoverToggles = $(".cb13-3-column-hover .content-box-column");

	if (window.innerWidth <= 768) {
		return;
	}
	//
	//
	//

	$(window).on("load", () => {
		hoverToggles.each(function () {
			//
			let boxWrapper = $(this).find(".content-box-wrapper");
			let contentContainer = $(this).find(".content-container");

			if (window.innerWidth <= 768) {
				$(this).removeClass("visible");
				return;
			}

			//
			//  ?   determine how much we need to slide the content for this content box
			//
			let SlideHeight = contentContainer.height() + 32 + "px";

			boxWrapper[0].style.setProperty("--slide-by-height", SlideHeight);

			//
			//
			//

			const throttledResizeHandler = throttle(() => {
				console.log("Window Resized");
				let SlideHeight = contentContainer.height() + 32 + "px";
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
	});

	//
	//
})(document, window, jQuery);
