import Typography from 'typography'

export default new Typography({
  baseFontSize: '18px',
  headerFontFamily: ['Montserrat', 'sans-serif'],
  bodyFontFamily: ['Montserrat', 'sans-serif'],
  bodyWeight: 300,
  overrideStyles: _ => ({
    body: {
      overflowX: 'hidden'
    },
    'p': {
      hyphens: 'auto'
    },
    'p a, ul a': {
      borderBottom: '1px solid'
    },
    a: {
      color: 'inherit',
      textDecoration: 'none',
      transition: 'color 0.4s'
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
