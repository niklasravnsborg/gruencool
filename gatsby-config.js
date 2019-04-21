module.exports = {
  plugins: [
    'gatsby-plugin-emotion',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/images`,
        name: 'images'
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      }
    },
    {
      resolve: `gatsby-plugin-react-svg`
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Gruencool 2019',
        short_name: 'Gruencool',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#ffffff',
        display: 'minimal-ui',
        icon: 'src/icon.png'
      },
    },
    'gatsby-plugin-offline',
  ],
}
