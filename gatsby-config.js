module.exports = {
  pathPrefix: `/Resume`,
  siteMetadata: {
    title: `Daniel Graf Design Resume 2018`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
      },
    },
  ],
}
