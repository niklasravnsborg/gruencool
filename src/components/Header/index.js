import React from 'react'
import { Link } from 'gatsby'
import { Flex, Box } from '@rebass/emotion'

import Container from '../Container'
import Wordmark from '../../images/logo/wordmark.svg'

export default ({ floating }) => (
  <Box
    as="header"
    py="4"
    css={{
      position: floating && 'absolute',
      width: '100%'
    }}
  >
    <Container>
      <Flex mx={-2}>
        <Box width={3/12} px="2">
          <Link to="/">
            <Wordmark width="140"/>
          </Link>
        </Box>
      </Flex>
    </Container>
  </Box>
)
