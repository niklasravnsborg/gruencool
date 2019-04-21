import React from 'react'
import Helmet from 'react-helmet'
import { Box } from '@rebass/emotion'
import { ThemeProvider } from 'emotion-theming'

import 'typeface-muli'

import theme from '../../utils/theme.js'
import Header from '../Header'
import Footer from '../Footer'

export default ({ floatingHeader, children, ...props }) => (
  <ThemeProvider theme={theme}>
    <Box {...props}>
      <Helmet
        title="Gruencool"
        meta={[
          { name: 'description', content: 'Wir sind die Gruencool, eine junge motivierte Truppe aus Wilhelmshaven. Unser Ziel ist es das Nachhaltigkeitsbewusstsein in der Stadt zu stärken.' }
        ]}
        htmlAttributes={{'lang': 'de'}}
      />
      <Header floating={floatingHeader}/>
      {children}
      <Footer/>
    </Box>
  </ThemeProvider>
)
