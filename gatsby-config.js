module.exports = {
  siteMetadata: {
    title: `BayZee Blog`,
    description: `A blog that will entertain you during your homestay in this moment of time. Here will be the lists of most favourite food and series that surely will keep you entertain. Be sure to sit back, relax and enjoy your day!`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-catch-links`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-plugin-zopfli'
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `BayZee Blog`,
        short_name: `BZ Blog`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
  pathPrefix: "/bayhaqqi-darmawan.github.io"
}
