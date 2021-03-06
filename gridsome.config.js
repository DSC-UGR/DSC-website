// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "Gridsome",
  siteUrl: "https://DSC-UGR.github.io",
  pathPrefix: "/DSC-website",
  plugins: [
    {
      use: "gridsome-source-rss",
      options: {
        feedUrl: "https://dev.to/feed/alexmenor",
        typeName: "devtoArticle",
      },
    },
  ],
};
