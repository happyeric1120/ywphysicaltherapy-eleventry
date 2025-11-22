// .eleventy.js
module.exports = function(eleventyConfig) {
  // 靜態檔案 passthrough
  eleventyConfig.addPassthroughCopy("style.css");
  eleventyConfig.addPassthroughCopy("main.js");
  eleventyConfig.addPassthroughCopy("assets");

  // 把根目錄的 favicon.ico 也一起複製到 _site
  eleventyConfig.addPassthroughCopy("favicon.ico");

  // Blog collection（你原本就有）
  eleventyConfig.addCollection("blog", function(collectionApi) {
    return collectionApi.getFilteredByGlob("blog/*.md");
  });

  // date filter（給 blog.njk 用）
  eleventyConfig.addFilter("date", function(date, format) {
    const d = new Date(date);
    if (format === '%Y-%m-%d') {
      return d.toISOString().split('T')[0];
    } else if (format === '%B %d, %Y') {
      return d.toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      });
    }
    return d.toLocaleDateString();
  });

  // permalink 全域設定（你原本就有）
  eleventyConfig.addGlobalData("permalink", function() {
    return (data) => {
      if (data.page.fileSlug === "index") {
        return "/";
      }
      return `/${data.page.fileSlug}/`;
    };
  });

  return {
    dir: {
      input: ".",
      includes: "_includes",
      data: "_data",
      output: "_site"
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk"
  };
};