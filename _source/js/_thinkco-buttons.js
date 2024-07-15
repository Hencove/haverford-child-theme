(function (document, window, $) {
	//
	// 		jQuery is ready as $
	document.addEventListener("DOMContentLoaded", function () {
		var buttons = document.querySelectorAll(".think-custom-button");
		buttons.forEach(function (button) {

			if ($(button).hasClass("wpforms-submit")) {
				var buttonText = $(button).text();
				let ButtonTextHTML =
					'<div class="fusion-button-text">' + buttonText + '</div>';
				$(button).html(ButtonTextHTML);
			}
			
			let OrnamentHTML =
				'<div class="button__ornament button__ornament--vertical"><div class="button__ornament-top-bottom"></div><div class="button__ornament-left-right"></div></div><div class="button__ornament button__ornament--horizontal"><div class="button__ornament-top-bottom"></div><div class="button__ornament-left-right"></div></div>';
			button.insertAdjacentHTML("afterbegin", OrnamentHTML);
		});
	});
	//
	//
})(document, window, jQuery);
