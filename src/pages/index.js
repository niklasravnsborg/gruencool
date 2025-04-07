import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Box, Button, Text } from '@rebass/emotion'

import Layout from '../components/Layout'
import Container from '../components/Container'
import ThemedSection from '../components/ThemedSection'
import SectionHeading from '../components/SectionHeading'

export default _ => {
  const data = useStaticQuery(graphql`
    query {
      team: file(absolutePath: { regex: "/photos/team/" }) {
        childImageSharp {
          fluid(maxWidth: 768) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      planning: file(absolutePath: { regex: "/photos/planning/" }) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
    }
  `)
  return render(data)
}

const render = data => (
  <Layout
    floatingHeader
    css={{
      position: 'relative',
      zIndex: 0,
    }}
    desc="Das grünste Event der Nordseeküste!"
  >
    <ThemedSection
      primary="#162135"
      accent="white"
      py={5}
      css={{
        display: 'flex',
        alignItems: 'center',
        minHeight: 'calc(100vh - 91px)',
      }}
    >
      <Container>
        <SectionHeading as="h1" fontSize="5" mb={4}>
          Das war Grüncool
        </SectionHeading>
        <Text as="p" mt="3" mb="3" css={{ hyphens: 'none' }}>
          2019 haben wir mit vielen tollen Menschen das „grünste Event der
          Nordseeküste“ veranstaltet. Mitgenommen haben wir viele Erinnerungen,
          Freundschaften und ein cooles grünes Netzwerk. Wie geht es jetzt
          weiter? Kontaktiere uns gerne, wenn Du Lust hast Nachhaltigkeit in
          Wilhelmshaven mitzugestalten!
        </Text>
        <Box m={-2}>
          <Button
            css={{ color: 'white', boxShadow: 'inset 0 0 0 2px white' }}
            m={2}
            as="a"
            variant="outline"
            target="_blank"
            href="https://gruencool2019.netlify.app/"
          >
            Grüncool 2019 Website
          </Button>
        </Box>
      </Container>
    </ThemedSection>
  </Layout>
)
