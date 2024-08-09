import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
//
(function (document, window, $) {
	// ?	append our markup once the dom is constructed
	$("body.home #wrapper").prepend(
		'<div class="homepage-gradient-overlay"></div>'
	);
	//
	//	? 	delay animation stuff until window is fully loaded
	//
	$(window).on("load", function () {
		//
		// ?	homepage has a gradient motion effect
		//
		if ($("body").hasClass("home")) {
			//
			gsap.to(".homepage-gradient-overlay", {
				yPercent: -50,
				scrollTrigger: {
					trigger: "body",
					scrub: 1,
					start: "top top",
					end: "+=300",
				},
			});
		}

		//
		//
		const homepageHeroBannerImages = gsap.utils.toArray(
			".cb1-hero-banner .fusion-imageframe"
		);
		//
		//
		if (homepageHeroBannerImages.length > 0) {
			//responsive
			let mm = gsap.matchMedia();
			mm.add("(min-width: 640px)", () => {
				gsap.to(homepageHeroBannerImages, {
					y: (i, el) => {
						let offset =
							(4 + parseFloat(i)) * (ScrollTrigger.maxScroll(window) / 100);
						return offset * -1;
					},
					stagger: 0,
					scrollTrigger: {
						trigger: ".cb1-hero-banner",
						scrub: 1,
						start: "top top",
						end: "+=800",
					},
				});
			});
		}
	});

	//
})(document, window, jQuery);
