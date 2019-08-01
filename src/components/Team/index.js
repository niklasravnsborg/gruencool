import React from 'react'
import Img from 'gatsby-image'
import { Flex, Box, Text } from '@rebass/emotion'
import { useStaticQuery, graphql } from 'gatsby'

import SectionHeading from '../SectionHeading'
import StyledImageBox from '../StyledImageBox'

const ImageAndNameArrrangement = ({ person, ...props }) => (
  <Box css={{ position: 'relative' }} {...props}>
    <StyledImageBox width={170} alt mb={3}>
      <Img fluid={person.node.frontmatter.image.childImageSharp.fluid}/>
    </StyledImageBox>
    <SectionHeading css={{
      position: 'absolute',
      bottom: 10,
      left: -18,
      textShadow: '1px 2px 4px rgba(0,0,0,.5)'
    }}>{person.node.frontmatter.name}</SectionHeading>
  </Box>
)

export default () => {
  const data = useStaticQuery(graphql`
    query TeamQuery {
      persons: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/src/persons/" } },
        sort: {fields: frontmatter___order }
      ) {
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
        <Box width={[1, null, 10/12, 1/4]} mx="auto" p={3} key={person.node.frontmatter.name}>
          <Flex flexWrap="wrap" mx={-3}>
            <Box width={[1, 'auto', null, 1]} order={[0, 1, null, 0]} px={3}>
              <ImageAndNameArrrangement
                person={person}
                css={{ display: 'table' }}
                ml={'auto'}
                mr={[5, 3, 4]}
              />
            </Box>
            <Box flex={[null, '1', null, '0 1 auto']} width={[1, 3/4, null, 1]} px={3}>
              <Text
                textAlign={['left', 'right', null, 'left']}
                fontSize="2"
                dangerouslySetInnerHTML={{ __html: person.node.html}}
              />
            </Box>
          </Flex>
        </Box>
      ))}
    </Flex>
  )
}
