(function (document, window, $) {
	//
	//	? code here will execute once the page is ready
	//
	
    //
    // This is garbage, but it works for testing
    // Currently, this file does not load when FEPro filters are used on the page. Could be a page load order issue.
    //
    if ( $('.cb8-post-grid').length ) {

        // Add an ALL filter to the top of the filter list that will unselect all other terms
        var filterList = $('ul.wpc-filters-ul-list');
        var listItems = filterList.html();

        var itemALL = '\<li class="wpc-label-item wpc-term-item">\
                            <div class="wpc-term-item-content-wrapper">\
                                <input class="wpc-label-input" type="checkbox">\
                                <label>\
                                    <span class="wpc-filter-label-wrapper">\
                                        <a id="filterAll">All</a>&nbsp;\
                                    </span>\
                                </label>\
                            </div>\
                        ';
        // inject the button
        filterList.html(itemALL + listItems);

        // Handle mobile dropdown styling
        if (window.matchMedia("(max-width: 640px)").matches) {
              
            var dropdown = '<div id="cb8-mobile-dropdown-container">\
                                ' + filterList.parent().html() + '\
                            </div>\
                            ';
            $('.wpc-filter-category').html(dropdown);
            $('#cb8-mobile-dropdown-container').on('click', function() {
                $(this).toggleClass('nav-is-visible');
            });

        }
        
        // Handle the functionality
        $('#filterAll').on("click", function() {

            // Not sure if the checked status matters, trying it out
            $('input:checkbox').removeAttr('checked');
            $('label #filterAll ~ input:checkbox').attr('checked', 'checked');

            // The selected item does have a specific class that should be toggled
            $('ul.wpc-filters-ul-list li').removeClass('wpc-term-selected');
            $('li').has('#filterAll').addClass('wpc-term-selected');
        });


    }

})(document, window, jQuery);
