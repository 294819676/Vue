module.exports = {
  plugins: {
    "postcss-px-to-viewport": {
      // options
      unitToConvert: "px",
      viewportHeight: 667,
      viewportWidth: 375,
      unitPrecision: 5,
      propList: ["*"],
      viewportUnit: "vw",
      fontViewportUnit: "vw",
      selectorBlackList: [],
      minPixelValue: 1,
      mediaQuery: false,
      replace: true,
      exclude: [/TarBaritem.vue/],
      landscape: false,
      landscapeUnit: "vw",
      landscapeWidth: 568
    }
  }
};
