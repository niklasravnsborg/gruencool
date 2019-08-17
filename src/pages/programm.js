import React from 'react'
import { Heading } from '@rebass/emotion';

import Layout from '../components/Layout'
import Container from '../components/Container'
import ThemedSection from '../components/ThemedSection'

import Staende from '../components/Sections/Staende'
import Programm from '../components/Sections/Programm';
import Workshops from '../components/Sections/Workshops';

export default _ => (
  <Layout
    title="Programm"
    desc="Unsere Partner und unser Team haben ein reichhaltiges Programm für den 18. August im Strandcafé Fährhaus vorbereitet"
  >
    <Container mb="5">
      <Heading mb="4">Bühnenprogramm</Heading>
      <Programm/>
    </Container>
    <Container mb="5">
      <Heading mb="4">Workshops</Heading>
      <Workshops/>
    </Container>
    <Container mb="5" wide>
      <Heading mb="4">Stände</Heading>
      <Staende/>
    </Container>
  </Layout>
)
