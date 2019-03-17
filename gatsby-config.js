module.exports = {
  siteMetadata: {
    title: 'Nachhaltigkeitsfreunde Wilhelmshaven',
  },
  plugins: [
    'gatsby-plugin-tailwindcss',
    'gatsby-plugin-emotion',
    'gatsby-plugin-react-helmet',
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
