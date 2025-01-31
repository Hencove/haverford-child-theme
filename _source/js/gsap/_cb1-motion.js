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
			//
			let mm = gsap.matchMedia();
			mm.add("(min-width: 1366px)", () => {
				// gsap.set(cb1Gallery, { y: 100 });
			});

			//responsive
			mm.add("(min-width: 961px)", () => {
				const galleryItems = gsap.utils.toArray(cb1Gallery).reverse(); // Reverse the order

				galleryItems.forEach((el, i) => {
					gsap.to(el, {
						y: -120,
						scrollTrigger: {
							trigger: ".cb1-hero-banner",
							scrub: 2,
							start: `top+=${i * 60} 10%`, // Now starts with the last element first
							end: `+=600`,
							// markers: true,
						},
					});
				});
			});

			mm.add("(max-width: 960px)", () => {
				// Push down 60
				gsap.set(cb1Gallery, { y: 60 });

				const galleryItems = gsap.utils.toArray(cb1Gallery).reverse(); // Reverse for this case too

				// Move back to initial 0
				galleryItems.forEach((el, i) => {
					gsap.to(el, {
						y: 0,
						scrollTrigger: {
							trigger: ".cb1-gallery",
							scrub: 2,
							start: `top-=${i * 60} center`, // Again, reversed order
							end: `+=400`,
							// markers: true,
						},
					});
				});
			});
		}
	});

	//
})(document, window, jQuery);
