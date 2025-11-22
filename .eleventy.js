module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("style.css");
  eleventyConfig.addPassthroughCopy("main.js");
  eleventyConfig.addPassthroughCopy("assets");

  // Add blog collection
  eleventyConfig.addCollection("blog", function(collectionApi) {
    return collectionApi.getFilteredByGlob("blog/*.md");
  });

  // Add date filter
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

  // Add permalink for pages
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

module.exports = function(eleventyConfig) {
  // 讓 Eleventy 直接把根目錄的 favicon.ico 複製到 _site
  eleventyConfig.addPassthroughCopy("favicon.ico");

  // 如果你想連 assets 裡的 PNG 也一起複製，可以加這行（可選）
  eleventyConfig.addPassthroughCopy({ "assets/favicon": "assets/favicon" });

  return {
    dir: {
      input: ".",
      output: "_site"
    }
  };
};

