module.exports = {
  siteMetadata: {
    title: `See What I Will Do`,
    author: {
      name: `Amanda Harpell-Franz`,
      summary: `Provides a safe place where people can learn and ask questions about Autism.`,
    },
    description: `Provide a safe place where people can learn and ask questions about Autism.`,
    siteUrl: `https://www.seewhatiwilldo.com`,
    social: {
      facebook: `See-What-I-Will-Do-100443892669192`,
    },
  },
  plugins: [
    {
    resolve: `gatsby-source-drupal`,
    options: {
      baseUrl: "https://admin.seewhatiwilldo.com/",
      apiBase: "jsonapi",
    },
  },
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
  ],
}
