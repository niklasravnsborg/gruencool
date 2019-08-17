import React from 'react'
import { Heading } from '@rebass/emotion';

import Layout from '../components/Layout'
import Container from '../components/Container'
import ThemedSection from '../components/ThemedSection'

import Partner from '../components/Sections/Partner'
import Programm from '../components/Sections/Programm';
import Workshops from '../components/Sections/Workshops';

export default _ => (
  <Layout
    title="Programm"
    desc="Unsere Partner und unser Team haben ein reichhaltiges Programm für den 18. August im Strandcafé Fährhaus vorbereitet"
  >
    <Container mb="4">
      <Programm/>
    </Container>
    <Container>
      <Workshops/>
    </Container>
    <ThemedSection
      primary="#ffe51f"
      accent="#162135"
    >
      <Container>
        <Heading mb="4" color="accent">Mit dabei sind außerdem:</Heading>
      </Container>
      <Container wide>
        <Partner/>
      </Container>
    </ThemedSection>
  </Layout>
)
