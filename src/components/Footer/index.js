import React from 'react'
import { Link } from 'gatsby'
import { Flex, Box } from '@rebass/emotion'

import Container from '../Container'

export default _ => (
  <Box
    as="footer"
    py={4}
    px={3}
    bg="#FF9C96"
    css={theme => ({
      'a': {
        color: 'inherit',
        borderBottom: `1px solid ${theme.colors.dark}`
      }
    })}
  >
    <Container>
      <Flex flexWrap="wrap" justifyContent="space-between" mx="auto" css={{ maxWidth: 500 }}>
        <Link to="/team/">Team</Link> |
        <a href="https://friesland.heldenderheimat.de/" target="_blank">Frieslands Helden der Heimat</a> |
        <Link to="/impressum/">Impressum</Link>
      </Flex>
    </Container>
  </Box>
)
