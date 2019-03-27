module.exports = {
  siteMetadata: {
    title: 'Grüncool 2019',
  },
  plugins: [
    'gatsby-plugin-tailwindcss',
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
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Nachhaltigkeitsfreunde Wilhelmshaven',
        short_name: 'Nachhaltigkeitsfreunde',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#ffffff',
        display: 'minimal-ui',
        icon: 'src/images/plant-icon.png'
      },
    },
    'gatsby-plugin-offline',
  ],
}
