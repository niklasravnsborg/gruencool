import React from 'react'
import { Link } from 'gatsby'
import { Flex, Box } from '@rebass/emotion'

import Container from '../Container'

export default ({ bg = '#ffe51f' }) => (
  <Box
    as="footer"
    py={4}
    px={3}
    bg={bg}
    css={theme => ({
      a: {
        color: 'inherit',
        borderBottom: `1px solid ${theme.colors.dark}`,
      },
    })}
  >
    <Container>
      <Flex
        flexWrap="wrap"
        justifyContent="space-between"
        mx="auto"
        css={{ maxWidth: 450 }}
      >
        <a href="https://www.facebook.com/gruencool.event/">Facebook</a> |
        <a href="https://www.instagram.com/gruencoolwhv/">Instagram</a> |
        <a href="mailto:info@gruen.cool">E-Mail</a> |
        <Link to="/impressum/">Impressum</Link>
      </Flex>
    </Container>
  </Box>
)
