import "./_thinkco-buttons";
import "./_site-header";
import "./_cb1";
import "./_cb3";
import "./_cb8";
import "./_cb13";
import "./_gsap";

//
//	? code here will execute before the DOM has fully loaded
//
(function (document, window, $) {
	//
	//	? code here will execute once the page is ready
	//
	// ... silence is golden

	$(".fusion-search-button .fusion-search-submit").val("");

	document.addEventListener("DOMContentLoaded", function () {
		// Your code here will run after the DOM is fully loaded
		console.log("Document is fully loaded and parsed!");
		document
			.getElementById("wt-cli-accept-btn")
			.addEventListener("click", function (event) {
				console.log(this);
			});
	});

	//
	//
	//
})(document, window, jQuery);
