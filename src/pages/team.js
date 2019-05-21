import React, { useLayoutEffect } from 'react'
import Img from 'gatsby-image'
import { Box } from '@rebass/emotion'
import { useStaticQuery, graphql } from 'gatsby'

import Layout from '../components/Layout'
import Container from '../components/Container'

const Team = props => (
  <Box
    css={{
      float: 'right',
      width: '100%',
      marginBottom: 20,
      '@media(min-width: 750px)': {
        maxWidth: 460,
        margin: '0 0 20px 20px'
      },
      '@media(min-width: 1000px)': {
        maxWidth: 500,
        marginRight: -60
      },
      borderRadius: 4,
      overflow: 'hidden'
    }}
    {...props}
  />
)

export default _ => {
  const data = useStaticQuery(graphql`
    query {
      team: file(absolutePath: { regex: "/team/" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  return (
    <Layout
      title="Team"
      desc="Wir sind eine junge motivierte Truppe aus Wilhelmshaven. Unser Ziel ist es das Nachhaltigkeitsbewusstsein in der Stadt zu stärken."
    >
    <Container>
      <h2>Über Grüncool</h2>
      <Team>
        <Img fluid={data.team.childImageSharp.fluid} alt="Richard, Niklas, Francesco, Sophie"/>
      </Team>
      <p>
        Moin! Wir sind eine junge motivierte Truppe aus Wilhelmshaven. Unser Ziel ist es das Nachhaltigkeitsbewusstsein in der Stadt zu stärken. Dies wollen wir durch coole Aktionen erreichen, die die Menschen zum Nachdenken anregen und gleichzeitig Spaß machen. Zum Beispiel Workshops, Kunstaktionen und Diskussionsrunden. Besonders liegt uns am Herzen, umweltinteressierte Menschen in der Region miteinander zu vernetzen, sowie neue Interessierte ins Boot zu holen.
      </p>
      <p>
        Ausschlaggebender Impuls für unseren Zusammenschluss war ein Videowettbewerb namens „Lass ma’ nachhaltig“, bei dem wir uns bewarben. Von etwa 600 Bewerbern <a href="https://youtu.be/wKvgh36-Dgw" target="_blank">haben wir es unter die 20 Finalisten geschafft</a>. Und plötzlich war unser Video mit über 10.000 Views viral – für uns Landeier ist das eine echte Hausnummer!
        Wenig später meldeten wir uns beim Förderprojekt „Frieslands Helden der Heimat“ an, denn eines war sicher: Unabhängig davon, ob wir den Videocontest gewinnen oder nicht, wollen wir das Umweltbewusstsein in Wilhelmshaven vorantreiben. Der Ideenfunke war angefacht. Nun verfolgen wir ehrgeizig unser Ziel, knüpfen Kontakte und feilen an durchführbaren Aktionen. Im Sommer wollen wir ein Event starten, welches möglichst viele Menschen anzieht, und Lust auf umweltbewusste Alternativen machen. Zusammen können wir dafür sorgen, dass Wilhelmshaven tatsächlich eine „grüne Stadt am Meer“ wird!
      </p>
    </Container>
    </Layout>
  )
}
