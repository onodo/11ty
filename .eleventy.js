const connectSSI   = require('connect-ssi');
const eleventySass = require("eleventy-sass");
const tailwindcss = require("tailwindcss")
const pluginTailwindCSS = require("eleventy-plugin-tailwindcss");
const postcss = require("postcss");
const esbuild = require("esbuild")
module.exports = function(eleventyConfig) {
  // Return your Object options:
  eleventyConfig.setBrowserSyncConfig({
    port: 8081,
    open: "local",
    // middleware: [
    //   connectSSI({
    //     baseDir: __dirname + '/dist',
    //     ext: '.html'
    //   })
    // ]
  });

  eleventyConfig.setNunjucksEnvironmentOptions({
    throwOnUndefined: true,
    autoescape: false, // warning: don’t do this!
  });

  eleventyConfig.addPlugin(pluginTailwindCSS,{
    src: './src/css/tailwind.css'
  });
  eleventyConfig.addPlugin(eleventySass, {
    postcss: postcss([require("postcss-import"), tailwindcss("./tailwind.config.js"), require("autoprefixer")]),
  });

  eleventyConfig.on("eleventy.before", async () => {
    await esbuild.build({
      entryPoints: ["./src/js/app.js"],
      bundle: true,
      minify: true,
      outfile: "./dist/js/app.js",
      target: ["es2016", "safari13"]
    })
  })

  return {
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dir: {
      input: "src",
      includes: "_includes",
      layouts: "_layouts",
      output: "dist"
    }
  }
};
