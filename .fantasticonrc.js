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
  pathOptions: {
    html: "./font/index.html",
    json: "./font/perilune.json",
    css: "./font/css/perilune.css",
    scss: "./font/scss/perilune.scss",
    ttf: "./font/fonts/perilune.ttf",
    woff: "./font/fonts/perilune.woff",
    woff2: "./font/fonts/perilune.woff2",
    eot: "./font/fonts/perilune.eot",
  },
};
