module.exports = {
  inputDir: "./icons",
  outputDir: "./font",
  fontTypes: ["woff2", "woff"],
  assetTypes: ["css", "scss", "json", "html"],
  name: "perilune",
  prefix: "pl",
  selector: ".pl",
  fontsUrl: "../fonts",
  formatOptions: {
    json: {
      indent: 2,
    },
  },
  templates: {
    css: "./build/font/css.hbs",
    scss: "./build/font/scss.hbs",
    html: "./build/font/html.hbs",
  },
};
