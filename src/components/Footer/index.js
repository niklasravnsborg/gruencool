import React from 'react'
import { Link } from 'gatsby'
import { Box } from '@rebass/emotion'

import Container from '../Container'

export default _ => (
  <Box
    as="footer"
    py={4}
    px={3}
    bg="primary"
    css={theme => ({
      'a': {
        color: 'inherit',
        borderBottom: `1px solid ${theme.colors.dark}`
      }
    })}
  >
    <Container>
      <Link to="/team/">Team</Link><br/>
      <br/>
      <Link to="/impressum/">Impressum</Link><br/>
      <br/>
      <a href="https://friesland.heldenderheimat.de/" target="_blank">Frieslands Helden der Heimat</a>
    </Container>
  </Box>
)
