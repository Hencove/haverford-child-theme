(function (document, window, $) {
	//
	//	? code here will execute once the page is ready
	//

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
            });
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
                width: '100%',
            });
            
        }
	};

	fusionFilterExtension._init();

	//
	//
	//
})(document, window, jQuery);
