import React from 'react'
import { Link } from 'gatsby'
import styled from 'react-emotion'

import Container from './container'

const Header = styled.div`
  ${tw`px-8`};
`
const Title = styled.div`
  ${tw`text-grey-darkest py-8 m-0 font-sans text-3xl leading-tight`};

`
const StyledLink = styled(Link)`
  ${tw`no-underline text-inherit`};
`

export default ({ siteTitle }) => (
  <Header>
    <Container>
      <StyledLink to="/">
        <Title>{siteTitle}</Title>
        <hr style={{ background: '#00ac22', height: 3, marginBottom: '.5em' }}/>
      </StyledLink>
    </Container>
  </Header>
)
