module.exports = {
  siteMetadata: {
    title: `Dashboard`,
    siteUrl: "https://cranky-davinci-1a32a2.netlify.com/",
  },
  plugins: [],
};

exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions;

  if (page.path.match(/^\/dashboard/)) {
    page.matchPath = "/dashboard/*";

    // Update the page.
    createPage(page);
  }
};
