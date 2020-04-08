module.exports = {
  siteMetadata: {
    title: `Dashboard`,
    siteUrl: "https://cranky-davinci-1a32a2.netlify.com/",
  },
  plugins: [],
};

exports.onCreatePage = async ({ page, boundActionCreators }) => {
  const { createPage } = boundActionCreators;

  if (page.path.match(/^\/dashboard/)) {
    page.matchPath = "/dashboard/*";

    // Update the page.
    createPage(page);
  }
};
