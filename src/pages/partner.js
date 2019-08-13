import React from 'react'

import Layout from '../components/Layout'
import Partners from '../components/Partners'
import Container from '../components/Container'
import ThemedSection from '../components/ThemedSection'

export default _ => (
  <Layout
    title="Team"
    desc="Wir sind eine junge motivierte Truppe aus Wilhelmshaven. Unser Ziel ist es, das Nachhaltigkeitsbewusstsein in der Stadt zu stärken."
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
