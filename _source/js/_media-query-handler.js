/**
 * mQHandler maps JS event onto our breakpoints nicely.
 * use this to fire scripts when we cross over a breakpoint threshold
 */
const mqHandler = {
  //
  breakpoints: {
    small: "800px",
    medium: "1024px",
    large: "1280px",
  },
  _instance: function () {
    // pass this into the window so other files can access it
    return (window.mqHandler = mqHandler);
  },

  _init: function (overFunction = {}, underFunction = {}) {
    for (const [key, value] of Object.entries(this.breakpoints)) {
      let listener = window.matchMedia("(max-width: " + value + ")");
      listener.addEventListener("change", (event) => {
        if (event.matches) {
          if (underFunction._init) {
            underFunction._init(event, key);
          }
        } else {
          if (overFunction._init) {
            overFunction._init(event, key);
          }
          //
        }
      });
    }
  },
};

export default mqHandler;
