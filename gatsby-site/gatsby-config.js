module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `lrpihffwlh37`,
        accessToken: `288ebd133344344ee02ee54a3213d38efe47e100fb206200c0a0a47d8f863d4a`,
      },
    },
    'gatsby-plugin-react-helmet'
  ],
}
