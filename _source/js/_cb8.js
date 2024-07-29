(function (document, window, $) {
	//
	//	? code here will execute once the page is ready
	//

    
    // Move the FEPro Search bar into the fusion filters parent div
    var searchbar = $('.wpc-filter-layout-search-field').html();
    var fusionBar = $('ul.fusion-filters');

    fusionBar.parent().append(searchbar);

    $('.wpc-filter-header').hide()
    $('.widget_wpc_filters_widget').hide()


    // Reorg filters into dropdown on mobile
    // ! WIP - not restricted to mobile viewports and options don't trigger filtering
    // TODO styling of dropdown

    var items = $(fusionBar).find('li a');
    items.each(function (index) {
        $(this).wrap('<option>').parent().addClass('fusion-filter').attr('role', 'presentation');
    });

    var dropdown = '<div class="choices">\
                        <select class="fusion-filters" role="menu"></select>\
                    </div>';

    fusionBar.parent().prepend(dropdown);
    $('.choices select').append(items.parent());
            
   
})(document, window, jQuery);


