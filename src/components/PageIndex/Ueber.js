import React from 'react'
import Img from 'gatsby-image'
import styled from '@emotion/styled'
import { Box } from '@rebass/emotion'

import { useStaticQuery, graphql } from 'gatsby'

const Team = styled.div`
  float: right;
  width: 100%;
  margin-bottom: 20px;
  @media(min-width: 750px) {
    max-width: 460px;
    margin: 0 0 20px 20px;
  }
  @media(min-width: 1000px) {
    max-width: 500px;
    margin-right: -60px;
  }
  border-radius: 4px;
  overflow: hidden;
`

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
    <Box>
      <h2>Ueber Gruencool</h2>
      <Team>
        <Img fluid={data.team.childImageSharp.fluid} alt="Richard, Niklas, Francesco, Sophie"/>
      </Team>
      <p>
        Ausschlaggebender Impuls für unseren Zusammenschluss war ein Videowettbewerb namens „Lass ma’ nachhaltig“, bei dem wir uns bewarben. Von etwa 600 Bewerbern <a href="https://youtu.be/wGqCjiW0nVA" target="_blank">haben wir es unter die 20 Finalisten geschafft</a>. Und plötzlich war unser Video mit über 10.000 Views viral – für uns Landeier ist das eine echte Hausnummer!
        Wenig später meldeten wir uns beim Förderprojekt „Frieslands Helden der Heimat“ an, denn eines war sicher: Unabhängig davon, ob wir den Videocontest gewinnen oder nicht, wollen wir das Umweltbewusstsein in Wilhelmshaven vorantreiben. Der Ideenfunke war angefacht. Nun verfolgen wir ehrgeizig unser Ziel, knüpfen Kontakte und feilen an durchführbaren Aktionen. Im Sommer wollen wir ein Event starten, welches möglichst viele Menschen anzieht, und Lust auf umweltbewusste Alternativen machen. Zusammen können wir dafür sorgen, dass Wilhelmshaven tatsächlich eine „grüne Stadt am Meer“ wird!
      </p>
    </Box>
  )
}
