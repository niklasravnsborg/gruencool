import React from 'react'
import { Link } from 'gatsby'
import { Location } from '@reach/router'
import { Flex, Box } from '@rebass/emotion'
import AnchorLink from 'react-anchor-link-smooth-scroll'

import Container from '../Container'
import UnderlineLink from '../UnderlineLink'
import Wordmark from '../../images/logo/wordmark.svg'

const FallbackAnchorLink = ({ href, children, ...props }) => (
  <Location>
    {locationProps => {
      if (locationProps.location.pathname === '/') {
        return (
          <AnchorLink
            href={href}
            children={children}
            {...props}
          />
        )
      } else {
        return (
          <Link
            to={`/${href}`}
            children={children}
          />
        )
      }
    }}
  </Location>
)

const NavLink = ({ children }) => (
  <UnderlineLink mx="3" children={children}/>
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
              <Link to="programm" children="Programm"/>
            </NavLink>
            <NavLink>
              <FallbackAnchorLink offset="200" href="#team" children="Team"/>
            </NavLink>
          </Flex>
        </Box>
      </Flex>
    </Container>
  </Box>
)
