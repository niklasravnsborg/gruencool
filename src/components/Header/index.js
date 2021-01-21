import React from 'react'
import { Link } from 'gatsby'
import { Location } from '@reach/router'
import { Flex, Box } from '@rebass/emotion'
import AnchorLink from 'react-anchor-link-smooth-scroll'

import Container from '../Container'
import LogoLight from '../../images/logo/logo_light.svg'
import LogoDark from '../../images/logo/logo_dark.svg'

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

export default ({ floating }) => (
  <Box
    as="header"
    py={[null, 2]}
    mb="4"
    bg={floating ? '' : 'accent'}
    css={{
      position: floating && 'absolute',
      width: '100%'
    }}
  >
    <Container py="3">
      <Flex justifyContent="space-between" alignItems="center" flexWrap="wrap" mx={-2}>
        <Box px="2">
          <Link to="/">
            {floating ? <LogoLight width="128"/> : <LogoDark width="128"/>}
          </Link>
        </Box>
      </Flex>
    </Container>
  </Box>
)
