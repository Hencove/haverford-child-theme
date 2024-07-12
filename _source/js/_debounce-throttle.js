// Debouncing: This is useful for situations like search suggestions, where you want to wait for the user to finish typing before fetching suggestions.
const debounce = function (func, delay) {
	let timer;
	return function () {
		//anonymous function
		const context = this;
		const args = arguments;
		clearTimeout(timer);
		timer = setTimeout(() => {
			func.apply(context, args);
		}, delay);
	};
};
// Throttling: Throttling is suitable for scenarios where you want to limit the frequency of function calls, like handling scroll events or resizing events.
const throttle = (func, limit) => {
	let inThrottle;
	return function () {
		const args = arguments;
		const context = this;
		if (!inThrottle) {
			func.apply(context, args);
			inThrottle = true;
			setTimeout(() => (inThrottle = false), limit);
		}
	};
};

export { debounce, throttle };
