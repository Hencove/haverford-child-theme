import { debounce, throttle } from "./_debounce-throttle";
(function (document, window, $) {
	//
	//	? code here will execute once the page is ready
	//

	// ? throttled resize handler if needed?
	const throttledResizeHandler = throttle(() => {
		fusionFilterExtension._doTheFilterStuff();
	}, 16);

	const fusionFilterExtension = {
		//
		//
		//
		_init: function () {
			window.addEventListener("resize", throttledResizeHandler);
			fusionFilterExtension._doTheFilterStuff();
		},

		//
		//
		//
		//
		//
		_doTheFilterStuff: function (e) {
			console.log("doing filter stuff");

			if (window.innerWidth <= 1200) {
				console.log(window.innerWidth);

			}
		},
	};
	fusionFilterExtension._init();






	// 
	// 
	// 
	// 
	// 
	// 
	// 
	// 

	// Move the FEPro Search bar into the fusion filters parent div
	var searchbar = $(".wpc-filter-layout-search-field").detach();
	var fusionBar = $("ul.fusion-filters");

	fusionBar.parent().append(searchbar);

	$(".wpc-filter-header").hide();
	$(".widget_wpc_filters_widget").hide();

	// Reorg filters into dropdown on mobile
	// ! WIP - not restricted to mobile viewports
	// !     - option selection currently doesn't trigger filtering
	// TODO styling of dropdown

	//
	// TODO if window <= 1200px
	$(window).on("load", function (event) {

		var searchbar = $(".wpc-filter-layout-search-field").detach();
		var fusionBar = $("ul.fusion-filters");
		var items = $(fusionBar).find("li a");

		fusionBar.parent().append(searchbar);

		items.each(function (index, element) {
			// console.log(element);

			$(element).wrap(
				'<option value="' + element.text + '" class="fusion-filter"></option>'
			);
		});

		var dropdown =
			'<div class="choices"><select style="display:block;" class="fusion-filters" role="menu"></select></div>';

		fusionBar.parent().prepend(dropdown);

		$(".choices select").append(items.parent());

		$("select.fusion-filters").on("change", function (event) {
			let pray = $(event.target).find(
				'option[value="' + $(this).val() + '"] a'
			);
			$(pray[0]).trigger("click");
		});

		$("select.fusion-filters").select2({
			minimumResultsForSearch: Infinity,
		});
	});

	//
	//
	//
})(document, window, jQuery);
