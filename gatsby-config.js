module.exports = {
  siteMetadata: {
    title: `Nicholas Sebastian`,
    author: {
      name: `Nicholas Sebastian`,
      summary: `Second-year Computer Science student, aspiring Software Developer.`,
    },
    description: `Portfolio Website.`,
    siteUrl: `https://nichsebastian.com/`,
    social: {
      email: `nicholassebastianhendrata@gmail.com`,
      github: `NicholasSebastian`,
      instagram: `nichsebastian`,
      linkedin: `NicholasSebastian`,
      twitter: `NicholasSebas10`,
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
            },
          }
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
  ],
}
