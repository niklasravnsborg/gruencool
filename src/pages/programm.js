import React from 'react'

import Layout from '../components/Layout'
import Partners from '../components/Partners'
import Container from '../components/Container'
import ThemedSection from '../components/ThemedSection'

export default _ => (
  <Layout
    title="Programm"
    desc="Unsere Partner und unser Team haben ein reichhaltiges Programm für den 18. August im Strandcafé Fährhaus vorbereitet"
  >
    <ThemedSection
      primary="#ffe51f"
      accent="#162135"
    >
      <Container wide>
        <Partners/>
      </Container>
    </ThemedSection>
  </Layout>
)
