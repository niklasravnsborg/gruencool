import React from 'react'
import Helmet from 'react-helmet'
import { Box } from '@rebass/emotion'
import { ThemeProvider } from 'emotion-theming'

import 'typeface-montserrat'

import theme from '../../utils/theme.js'
import Header from '../Header'
import Footer from '../Footer'

export default ({ floatingHeader, footerBg, title, desc, children, ...props }) => (
  <ThemeProvider theme={theme}>
    <Box {...props}>
      <Helmet
        defaultTitle="Grüncool – Nachhaltigkeitsevent in Wilhelmshaven"
        titleTemplate="Grüncool %s"
        title={title}
        meta={[{ name: 'description', content: desc }]}
        htmlAttributes={{'lang': 'de'}}
      />
      <Header floating={floatingHeader}/>
      {children}
      <Footer bg={footerBg}/>
    </Box>
  </ThemeProvider>
)
