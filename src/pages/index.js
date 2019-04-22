import React from 'react'
import Img from 'gatsby-image'
import { ThemeProvider } from 'emotion-theming'
import { useStaticQuery, graphql } from 'gatsby'
import { Flex, Box, Card, Button, Heading, Text } from '@rebass/emotion'

import Layout from '../components/Layout'
import Nobreak from '../components/Nobreak'
import Container from '../components/Container'
import EventFeatures from '../components/PageIndex/EventFeatures'

import EdgeLeft from '../images/patterns/edge_left.svg'
import EdgeRight from '../images/patterns/edge_right.svg'
import TriangleRight from '../images/patterns/triangle_right.svg'

import FacebookIcon from '../images/icons/facebook.svg'
import InstagramIcon from '../images/icons/instagram.svg'

import eventBackground from '../images/backgrounds/event.jpg'
import foodBackground from '../images/backgrounds/food.jpg'

const ThemedSection = ({ primary, accent, bgImg, ...props }) => (
  <ThemeProvider theme={{
    colors: { primary, accent }
  }}>
    <Card
      pt="5"
      pb="5"
      color="white"
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
    fontWeight="900"
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
          fluid(maxWidth: 500) {
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
      zIndex: 0
    }}
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
        <Text as="p" mb="3" color="accent">Das coolste Nachhaltigkeits-Event <Nobreak>der Nordseeküste!</Nobreak></Text>
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
          Gruencool hat das Ziel Gespräche anzustubsen. Wir stehen für eine <b>lebenswerte Zukunft</b> und möchten Ideen darüber verbreiten, was wir heute für diese tun können!<br/>
          Deswegen planen wir das grünste Event der Nordseeküste in unser Heimatstadt Wilhelmshaven – mit spannenden Aktionen ist das Event ein Erlebnis für Studenten, Familien, Umweltinteressierte und Menschen die die Welt ein kleines bisschen besser machen wollen.
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
      primary="#812198"
      accent="#8ee643"
      bgImg={foodBackground}
      pb={256}
    >
      <Container>
        <SectionHeading>Vegane Kost für Alle</SectionHeading>
        <IndentedText>
          Für den Mampf ist gesorgt! Natürlich hochwertig hergestellt, natürlich vegan. Unsere Speisekarte füllt sich und wir sind noch auf der Suche nach ambitionierten Partnergastromen aus der Region.
        </IndentedText>
      </Container>
      <BackgroundArtifact
        bottom="-1px"
        fill="#162135"
        children={<EdgeRight/>}
      />
    </ThemedSection>
    <ThemedSection
      primary="#162135"
      accent="#FF9D94"
      pb={2}
    >
      <Container>
        <StyledImageBox mt={-256} mb={4}>
          <Img fluid={data.team.childImageSharp.fluid} alt="Niklas, Richard, Francesco, Kadija, Sophie"/>
        </StyledImageBox>
        <SectionHeading>Starkes Team sucht nach Mitstreitern</SectionHeading>
        <IndentedText>
          Das klingt cool und Du willst mithelfen zu organisieren? Kontakte uns, und wir schauen, wie wir Dich einbeziehen.
        </IndentedText>
      </Container>
    </ThemedSection>
    <Img
      fluid={data.planning.childImageSharp.fluid}
      alt="Das Team"
      css={{
        margin: '-1px 0',
        '> div': {
          backgroundImage: 'linear-gradient(#162135, #FF9C96)'
        }
      }}
    />
    <ThemedSection
      primary="#FF9C96"
      accent="#162135"
    >
      <SectionHeading textAlign="center">Sei live dabei!</SectionHeading>
      <Flex justifyContent="center">
        <Box as="a" href="https://www.facebook.com/gruencool.event/" target="_blank">
          <FacebookIcon width="50"/>
        </Box>
        <Box as="a" href="https://www.instagram.com/gruencoolwhv/" target="_blank">
          <InstagramIcon width="50"/>
        </Box>
      </Flex>
    </ThemedSection>
  </Layout>
)
