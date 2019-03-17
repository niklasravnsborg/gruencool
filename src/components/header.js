import React from 'react'
import { Link } from 'gatsby'
import styled from 'react-emotion'

const Container = styled.div`
  ${tw`bg-grey-lightest px-8 py-8`};
  @media(min-width: 600px) {
    ${tw`px-32`};
  }
`
const Title = styled.div`
  ${tw`text-grey-darkest m-0 font-sans text-3xl leading-tight`};
`
const StyledLink = styled(Link)`
  ${tw`no-underline text-inherit`};
`

const Header = ({ siteTitle }) => (
  <Container>
    <StyledLink to="/">
      <Title>{siteTitle}</Title>
    </StyledLink>
  </Container>
)

export default Header
