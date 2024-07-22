//
//	? code here will execute before the DOM has fully loaded
//
(function (document, window, $) {
	//
	//	? code here will execute once the page is ready
	//
	// ... silence is golden

	let siteSearchHandler = {
		_init: () => {
			let SearchElement = $(".fusion-tb-header .fusion-search-element");

			$(".search-button", SearchElement).on("click", () => {
				SearchElement.toggleClass("is-expanded-by-focus");
			});
		},
	};

	siteSearchHandler._init();

	//
	//
	//
})(document, window, jQuery);
