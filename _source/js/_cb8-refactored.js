(function (document, window, $) {
	//
	//	? code here will execute once the page is ready
	//

	let postCardsHandler = {
		_init: () => {
			postCardsHandler._moveFilters();
			if (postCardsHandler._isFilteredUrl()) {
				postCardsHandler._addResetClickEvent();
			}
		},
		_moveFilters: () => {
			let searchBar = $(
				".wpc-filter-layout-search-field .wpc-filter-search-form"
			);
			let dropDownFilters = $(".wpc-filter-content.wpc-filter-category");
			let fusionFiltersContainer = $("ul.fusion-filters");

			searchBar.detach();
			dropDownFilters.detach();
			fusionFiltersContainer.parent().addClass("is-filter-search-container");
			fusionFiltersContainer.parent().append(searchBar);
			fusionFiltersContainer.parent().prepend(dropDownFilters);
		},
		_isFilteredUrl: () => {
			var pathname = window.location.pathname;
			var search = window.location.search;
			var regexFilter = /\/filter-.*/;
			var regexSearch = /\?srch=.*/;
			return regexFilter.test(pathname) || regexSearch.test(search);
		},
		_resetFilter: () => {
			// Replace this with your actual filter reset logic
			console.log("Filter reset!");
			// Remove "/filter-" from the pathname and "srch=" from the query string
			var newPathname = window.location.pathname.replace(/\/filter-.*/, "");
			var newSearch = window.location.search.replace(/\?srch=.*/, "");
			// Redirect to the new URL
			window.location.href = newPathname + newSearch;
		},
		_addResetClickEvent: () => {
			console.log("URL is filtered");

			// Add event listener to the reset button
			var resetButton = $(".fusion-filter-all");
			if (resetButton) {
				$(resetButton).on("click", postCardsHandler._resetFilter);
			}
		},
	};

	postCardsHandler._init();

	//
	//
	//
})(document, window, jQuery);
