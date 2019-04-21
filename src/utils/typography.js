import Typography from 'typography'

export default new Typography({
  baseFontSize: '20px',
  headerFontFamily: ['Muli', 'sans-serif'],
  bodyFontFamily: ['Muli', 'sans-serif'],
  overrideStyles: () => ({
    body: {
      overflowX: 'hidden'
    },
    'p a, ul a': {
      borderBottom: '1px solid'
    },
    a: {
      color: 'inherit',
      textDecoration: 'none',
      transition: 'color 0.4s'
    },
    'h1, h2': {
      fontWeight: '900'
    },
    '@media only screen and (max-width: 479px)': {
      html: {
        fontSize: '100%'
      },
      'h1, h2, h3, h4, h5, h6': {
        fontSize: '1.2em'
      }
    },
    'img, svg': {
      verticalAlign: 'middle'
    }
  })
})
