import React from 'react'
import { Link } from 'gatsby'
import { Flex, Box } from '@rebass/emotion'

import Container from '../Container'
import Wordmark from '../../images/logo/wordmark.svg'

const NavLink = ({ children }) => (
  <Box
    mx="2"
    css={{
      borderBottom: '2px solid black'
    }}
    children={children}
  />
)

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
      <Flex justifyContent="space-between" flexWrap="wrap" mx={-3}>
        <Box px="3">
          <Link to="/">
            <Wordmark width="140"/>
          </Link>
        </Box>
        <Box px="3" mt="2">
          <Flex mx={-2}>
            <NavLink>
              <a href="https://goo.gl/maps/AibFeaWfJB7cuAj46" target="_blank" children="Location"/>
            </NavLink>
            <NavLink>
              <Link to="/team/" children="Team"/>
            </NavLink>
          </Flex>
        </Box>
      </Flex>
    </Container>
  </Box>
)
