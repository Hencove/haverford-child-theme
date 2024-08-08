import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
(function (document, window, $) {
	//
	// 		jQuery is ready as $

	if (!$(body).hasClass("page-id-45277")) {
		return;
	}

	window.addEventListener("DOMContentLoaded", () => {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				const id = entry.target.getAttribute("id");
				if (entry.intersectionRatio > 0) {
					document
						.querySelector(`.sticky-timeline_container a[href="#${id}"]`)
						.classList.add("active");
				} else {
					document
						.querySelector(`.sticky-timeline_container a[href="#${id}"]`)
						.classList.remove("active");
				}
			});
		});

		// Track all sections that have an `id` applied
		document.querySelectorAll(".timeline_year[id]").forEach((section) => {
			observer.observe(section);
		});
	});

	//
	//
	//
	//
	//

	// create
	let mm = gsap.matchMedia();

	// add a media query. When it matches, the associated function will run
	mm.add("(min-width: 800px)", () => {
		ScrollTrigger.create({
			start: 0,
			end: "max",
			onUpdate: updateValues,
		});

		const timelineItems = document.querySelectorAll(".timeline_item");

		function updateValues() {
			timelineItems.forEach((timelineItem) => {
				if (ScrollTrigger.isInViewport(timelineItem)) {
					if (ScrollTrigger.positionInViewport(timelineItem, "center") < 0.4) {
						timelineItem.style.opacity =
							(ScrollTrigger.positionInViewport(timelineItem) - 0) / (0.4 - 0);
						timelineItem.style.transform =
							"scale(" +
							(ScrollTrigger.positionInViewport(timelineItem) *
								(1 / 0.4) *
								0.1 +
								0.9) +
							")";
					} else if (
						ScrollTrigger.positionInViewport(timelineItem, "center") > 0.4 &&
						ScrollTrigger.positionInViewport(timelineItem, "center") < 0.6
					) {
						timelineItem.style.opacity = 1;
						timelineItem.style.transform = "scale(1)";
					} else if (
						ScrollTrigger.positionInViewport(timelineItem, "center") > 0.6
					) {
						timelineItem.style.opacity =
							1 -
							(ScrollTrigger.positionInViewport(timelineItem) - 0.6) /
								(1 - 0.6);
						timelineItem.style.transform =
							"scale(" +
							(1 -
								((ScrollTrigger.positionInViewport(timelineItem) - 0.6) / 0.4) *
									0.1) +
							")";
					}
				}
			});

			//viewport.innerText = ScrollTrigger.isInViewport(box);
			//position.innerText = ScrollTrigger.positionInViewport(box, "center").toFixed(2);
		}
		updateValues();
	});

	//
})(document, window, jQuery);
