import React from 'react'
import Img from 'gatsby-image'
import { Flex, Box } from '@rebass/emotion'
import { useStaticQuery, graphql } from 'gatsby'

import SectionHeading from '../SectionHeading'

export default () => {
  const data = useStaticQuery(graphql`
    query TeamQuery {
      persons: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/src/persons/" } }) {
        edges {
          node {
            frontmatter {
              image {
                childImageSharp {
                  fluid(maxWidth: 500, maxHeight: 500, quality: 80) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
              name
            }
            html
          }
        }
      }
    }
  `)
  return (
    <Flex flexWrap="wrap" mx={-3}>
      {data.persons.edges.map(person => (
        <Box width={1/4} p={3}>
          <Img fluid={person.node.frontmatter.image.childImageSharp.fluid} css={{
            borderRadius: '50%'
          }}/>
          <SectionHeading>{person.node.frontmatter.name}</SectionHeading>
          <div dangerouslySetInnerHTML={{ __html: person.node.html}}></div>
        </Box>
      ))}
    </Flex>
  )
}
