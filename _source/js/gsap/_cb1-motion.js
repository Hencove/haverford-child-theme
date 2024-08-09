import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
//
//
//
//
const cb1Elements = gsap.utils.toArray([
	".cb1-hero-banner .fusion-title",
	".cb1-hero-banner .fusion-text",
	".cb1-hero-banner .fusion-button",
]);
//
gsap.set(cb1Elements, { opacity: 0, y: 30 });
//
const cb1Gallery = gsap.utils.toArray([".cb1-hero-banner .fusion-imageframe"]);

// 
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

		// batch animation for all elements
		ScrollTrigger.batch(cb1Elements, {
			trigger: ".cb1-hero-banner",
			start: "top 90%",
			end: "bottom 10%",
			onEnter: (batch) =>
				gsap.to(batch, { y: 0, autoAlpha: 1, stagger: 0.2, duration: 1 }),
		});
		//
		if (cb1Gallery.length > 0) {
			//responsive
			let mm = gsap.matchMedia();
			mm.add("(min-width: 640px)", () => {
				gsap.to(cb1Gallery, {
					y: (i, el) => {
						let offset =
							(4 + parseFloat(i)) * (ScrollTrigger.maxScroll(window) / 100);
						return offset * -1;
					},
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
