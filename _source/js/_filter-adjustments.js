(function (document, window, $) {
  //
  // 		jQuery is ready as $

  // Check if Filter Everything's Widget exists on the page. If not, return
  if ($(".wpc-filters-main-wrap").length == 0) {
    return;
  }

  // Add an "All" button to filters
  window.addEventListener("DOMContentLoaded", () => {
    $(".wpc-filters-ul-list").prepend(
      "<li class='wpc-label-item wpc-term-item' id='wpc-term-taxonomy-category-all'>\
        <div class='wpc-term-item-content-wrapper'>\
          <input class='wpc-label-input' type='checkbox' data-wpc-link='/" + window.location.pathname.split("/")[1] + "/#paginate' id='wpc-checkbox-taxonomy-category-all'>\
          <label for='wpc-checkbox-taxonomy-category-all'>\
            <span class='wpc-filter-label-wrapper'>\
              <a href='/" + window.location.pathname.split("/")[1] + "/#paginate' class='wpc-filter-link'>All</a>\
            </span>\
          </label>\
        </div>\
      </li>"
    );


  //
})(document, window, jQuery);
