module.exports = {
  siteMetadata: {
    title: `Aether`,
    description: `Portfolio Web Site`,
    author: {
      name: `Nicholas Sebastian`,
      summary: `Second-year Computer Science student, aspiring Software Developer.`,
    },
    social: {
      email: `nicholassebastianhendrata@gmail.com`,
      github: `NicholasSebastian`,
      instagram: `nicholashendrata`,
      linkedin: `nichsebastian`,
      twitter: `NicholasSebas10`,
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content`,
        name: `content`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1000,
            },
          }
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
  ],
}
