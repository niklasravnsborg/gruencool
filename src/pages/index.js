import React from 'react'
import Img from 'gatsby-image'
import { ThemeProvider } from 'emotion-theming'
import { useStaticQuery, graphql } from 'gatsby'
import { Flex, Box, Card, Button, Heading, Text } from '@rebass/emotion'

import Layout from '../components/Layout'
import Nobreak from '../components/Nobreak'
import Container from '../components/Container'
import EventFeatures from '../components/PageIndex/EventFeatures'
import NetworkSection from '../components/PageIndex/NetworkSection'

import KyleDart from '../images/logo/kyle_dart.svg'
import EdgeLeft from '../images/patterns/edge_left.svg'
import TriangleRight from '../images/patterns/triangle_right.svg'

import FacebookIcon from '../images/icons/facebook.svg'
import InstagramIcon from '../images/icons/instagram.svg'

import eventBackground from '../images/backgrounds/event.jpg'

const ThemedSection = ({ primary, accent, text, bgImg, ...props }) => (
  <ThemeProvider theme={{
    colors: { primary, accent }
  }}>
    <Card
      pt="5"
      pb="5"
      color={text ? text : 'white'}
      bg="primary"
      css={{
        position: 'relative',
        zIndex: -20,
        ...bgImg && {
          backgroundSize: 'cover',
          backgroundBlendMode: 'color-burn',
          backgroundImage: `url(${bgImg})`
        }
      }}
      {...props}
    />
  </ThemeProvider>
)

const SectionHeading = props => (
  <Heading
    color="accent"
    mb={3}
    {...props}
  />
)

const IndentedText = props => (
  <Flex>
    <Box
      flex="none"
      bg="accent"
      ml="4"
      mr="3"
      css={{
        width: 2,
        height: 40
      }}
    />
    <Text
      {...props}
    />
  </Flex>
)

const StyledImageBox = props => (
  <Box
    {...props}
    css={theme => ({
      position: 'relative',
      ':after': {
        content: '""',
        position: 'absolute',
        top: 12,
        left: 12,
        width: '100%',
        height: '100%',
        borderBottom: `3px solid ${theme.colors.accent}`,
        borderRight: `3px solid ${theme.colors.accent}`,
      }
    })}
  />
)

const BackgroundArtifact = ({ top = null, bottom = null, left = 0, right = 0, fill, ...props }) => (
  <Box
    css={{
      position: 'absolute',
      top, bottom, left, right,
      zIndex: -10,
      'svg': { fill },
      '@media(min-width: 500px)': {
        display: 'none'
      }
    }}
    {...props}
  />
)

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
    footerBg="#ff9c96"
    css={{
      position: 'relative',
      zIndex: 0
    }}
    desc="Ein Event für eine grüne Zukunft in Wilhelmshaven am 18. August 2019!"
  >
    <ThemedSection
      primary="#ffe51f"
      accent="#162135"
      py={192}
      bgImg={eventBackground}
      backgroundPosition="center"
    >
      <Container>
        <SectionHeading as="h1" fontSize="5" mb="2">
          Ein Event für eine <Nobreak>nachhaltige Zukunft</Nobreak>
        </SectionHeading>
        <Text as="p" mb="3" color="accent">Das grünste Event der Nordseeküste <Nobreak>am 18. August 2019!</Nobreak></Text>
        <Button href="https://www.youtube.com/embed/Q3BGmVdjmiw?autoplay=true" target="_blank" as="a" variant="outline">Video ansehen</Button>
      </Container>
    </ThemedSection>
    <ThemedSection
      primary="green"
      accent="#fff03d"
      backgroundImage="linear-gradient(#19acbd, #62b61b)"
    >
      <Container>
        <SectionHeading>
          Bewusstsein schaffen,<br/>
          Umwelt einbeziehen
        </SectionHeading>
        <IndentedText mb="4">
          Grüncool hat das Ziel Gespräche anzustubsen. Wir stehen für eine <b>lebenswerte Zukunft</b> und möchten Ideen darüber verbreiten, was wir heute für diese tun können!<br/>
          Deswegen planen wir das grünste Event der Nordseeküste in unserer Heimatstadt Wilhelmshaven – mit spannenden Aktionen ist das Event ein Erlebnis für Studierende, Familien, Umweltinteressierte und Menschen, die die Welt ein kleines bisschen besser machen wollen.
        </IndentedText>
        <EventFeatures/>
      </Container>
      <BackgroundArtifact
        top="0"
        fill="#53d0ff4d"
        children={<EdgeLeft/>}
      />
      <BackgroundArtifact
        top="30%"
        left="200px"
        fill="#9cf9524f"
        children={<TriangleRight/>}
      />
      <BackgroundArtifact
        bottom="-14%"
        left="100px"
        fill="#53d0ff4d"
        children={<TriangleRight/>}
      />
    </ThemedSection>
    <ThemedSection
      primary="#ffe411"
      accent="#162135"
      text="#162135"
    >
      <Container css={{ maxWidth: 1000 }}>
        <Flex flexWrap="wrap" alignItems="center">
          <Box width={[1, 2/5]} m="0 auto" mb={[4, 0]} style={{ maxWidth: 300 }}>
            <KyleDart/>
          </Box>
          <Box width={[1, 3/5]}>
            <SectionHeading>Unser Maskottchen: Kyle der Kohl</SectionHeading>
            <IndentedText>
              Das ist Kyle, unser Maskottchen! Er ist ebenso Kohl wie er cool ist. Und auch wenn Kohl eigentlich nichts mit unserer Veranstaltung zu tun hat, symbolisiert er doch den friesischen Freigeist. Er begleitet Dich durch das Event und tut dieses und jenes.
            </IndentedText>
          </Box>
        </Flex>
      </Container>
    </ThemedSection>
    <ThemedSection
      primary="white"
      accent="#162135"
      text="#162135"
      pb={[192, 216, 232]}
    >
      <Container>
        <SectionHeading>Unser Netzwerk <Nobreak>wächst und gedeiht</Nobreak></SectionHeading>
        <IndentedText>
          Für ein besonderes Event braucht es starke Partner und gute Unterstützung. Wir freuen uns, mit diesen engagierten Organisationen etwas auf die Beine stellen zu können. In den nächsten Wochen wird sich diese Liste weiter füllen.
        </IndentedText>
      </Container>
      <Container css={{ maxWidth: 1000 }}>
        <NetworkSection/>
      </Container>
    </ThemedSection>
    <ThemedSection
      primary="#162135"
      accent="#FF9D94"
      pb={2}
    >
      <Container>
        <StyledImageBox mt={-256} mb={4}>
          <Img fluid={data.team.childImageSharp.fluid} alt="Luca, Richard, Niklas, Andreas, Maurice, Francesco, Sophie"/>
        </StyledImageBox>
        <SectionHeading>Starkes Team mit einer Vision</SectionHeading>
        <IndentedText>
          Wir glauben, dass der menschengemachte Klimawandel eine der größten Herausforderungen unserer Generation ist und wir ihn nur gemeinsam eindämmen können. Unsere Mission ist es, Menschen zusammenzubringen und eine Bewegung zu starten, damit wir in einer guten Zukunft leben können.
        </IndentedText>
      </Container>
    </ThemedSection>
    <Img
      fluid={data.planning.childImageSharp.fluid}
      alt="Das Team"
      css={{
        margin: '-1px 0',
        '> div': {
          backgroundImage: 'linear-gradient(#162135, #ff9c96)'
        }
      }}
    />
    <ThemedSection
      primary="#ff9c96"
      accent="#162135"
    >
      <SectionHeading textAlign="center">Sei live dabei!</SectionHeading>
      <Flex justifyContent="center">
        <Box as="a" href="https://www.instagram.com/gruencoolwhv/" target="_blank">
          <InstagramIcon width="50"/>
        </Box>
        <Box as="a" href="https://www.facebook.com/gruencool.event/" target="_blank">
          <FacebookIcon width="50"/>
        </Box>
      </Flex>
    </ThemedSection>
  </Layout>
)
