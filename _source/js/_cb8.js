(function (document, window, $) {
	//
	//	? code here will execute once the page is ready
	//

	// Function to get query parameters
	function getQueryParam(param) {
		var urlParams = new URLSearchParams(window.location.search);
		return urlParams.get(param);
	}

	const fusionFilterExtension = {
		//
		//
		//
		_init: function () {
			fusionFilterExtension._moveSearchBar();

			$(window).on("load", function (event) {
				fusionFilterExtension._dupeFilters();
				fusionFilterExtension._clickFunc();
				fusionFilterExtension._makeItPretty();
				fusionFilterExtension._scrollToSearchResults();
				fusionFilterExtension._handleNoSearchResults();
				fusionFilterExtension._handleAnchoredPaginationLink();
			});
		},

		_handleAnchoredPaginationLink: function () {
			let defaultLinks = $(".cb8-post-grid .pagination a").attr("href");
			$(".cb8-post-grid .pagination a").attr(
				"href",
				defaultLinks + "#news-insights-feed"
			);
		},

		_handleNoSearchResults: function () {
			if (getQueryParam("srch")) {
				let placeHolder = $(".fusion-builder-placeholder");
				let resetButton = '<a class="is-search-reset-button">Reset Search</a>';
				placeHolder.append("<div>" + resetButton + "</div>");

				$(".is-search-reset-button").on("click", function () {
					console.log(this);
					fusionFilterExtension._resetSearchParam();
				});
			}
		},

		_resetSearchParam: function () {
			// Get the current URL
			var url = new URL(window.location);
			var urlParams = new URLSearchParams(url.search);

			// Set 'srch' query parameter to an empty string
			urlParams.set("srch", "");

			// Update the URL without reloading
			window.history.pushState(
				{},
				"",
				`${url.pathname}?${urlParams.toString()}`
			);

			// Reload the page
			window.location.reload();
		},

		_scrollToSearchResults: function () {
			// Check if 'srch' query parameter exists
			if (getQueryParam("srch")) {
				// Scroll to the form after the page has loaded
				setTimeout(function () {
					document
						.getElementById("news-insights-feed")
						.scrollIntoView({ behavior: "smooth" });
				}, 100); // Adjust the timeout if needed
			}
		},

		_moveSearchBar: function (e) {
			var searchbar = $(".wpc-filter-layout-search-field").detach();
			var fusionBar = $(".fusion-filters");
			fusionBar.parent().append(searchbar);
		},

		_dupeFilters: function () {
			var fusionBar = $(".fusion-filters");
			var ulClone = fusionBar.clone(true, true);
			var items = $(ulClone).find("li a");

			items.each(function (index, element) {
				$(element).wrap(
					'<option value="' + element.text + '" class="fusion-filter"></option>'
				);
			});

			var dropdown =
				'<select style="display:block;" class="fusion-filters" role="menu"></select>';

			fusionBar.parent().prepend(dropdown);

			$("select").append(items.parent());
		},

		_clickFunc: function () {
			$("select.fusion-filters").on("change", function (event) {
				let pray = $(event.target).find(
					'option[value="' + $(this).val() + '"] a'
				);
				$(pray[0]).trigger("click");
			});
		},

		_makeItPretty: function () {
			$("select.fusion-filters").select2({
				minimumResultsForSearch: Infinity,
				width: "100%",
			});
		},
	};

	fusionFilterExtension._init();

	//
	//
	//
})(document, window, jQuery);
