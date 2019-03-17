import React from 'react'
import { Link } from 'gatsby'
import styled from 'react-emotion'

import Container from './container'
import plantIcon from '../images/plant-icon.svg'

const Footer = styled.footer`
  ${tw`font-sans px-8 py-8 text-center text-white`};
  a { color: inherit; border-bottom: 1px solid white; }

  position: relative;
  margin-top: auto;
  background-color: #936e43;
  &:before {
    position: absolute;
    z-index: -100;
    left: 50%;
    top: -38px;
    transform: translateX(-50%);
    content: "";
    height: 50px;
    width: 50px;
    display: block;
    background-image: url(${plantIcon});
  }
`
const Title = styled.div`
  ${tw`text-grey-darkest m-0 font-sans text-3xl leading-tight text-white`};
`
const StyledLink = styled(Link)`
  ${tw`no-underline text-inherit`};
`

export default _ => (
  <Footer>
    <Container>
      <Link to="/impressum/">Impressum</Link> | <a href="https://friesland.heldenderheimat.de/" target="_blank">Frieslands Helden der Heimat</a>
    </Container>
  </Footer>
)
