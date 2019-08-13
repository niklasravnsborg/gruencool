import React from 'react'
import { Card } from '@rebass/emotion'
import { ThemeProvider } from 'emotion-theming'

export default ({ primary, accent, text, bgImg, ...props }) => (
  <ThemeProvider theme={{
    colors: { primary, accent }
  }}>
    <Card
      pt="5"
      pb="5"
      color={text ? text : 'white'}
      bg="primary"
      css={{
        ...bgImg && {
          position: 'relative',
          zIndex: -20,
          backgroundSize: 'cover',
          backgroundImage: `url(${bgImg})`
        }
      }}
      {...props}
    />
  </ThemeProvider>
)
