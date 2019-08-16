import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Flex, Box, Text, Link } from '@rebass/emotion'

import IndentedText from '../IndentedText'
import UnderlineLink from '../UnderlineLink'
import SectionHeading from '../SectionHeading'

export default () => {
  const data = useStaticQuery(graphql`
    query PartnersQuery {
      partners: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/src/partners/" } },
        sort: { fields: fileAbsolutePath }
      ) {
        edges {
          node {
            frontmatter {
              name
              website
            }
            html
          }
        }
      }
    }
  `)
  return (
    <Flex flexWrap="wrap" mx={-3}>
      {data.partners.edges.map(partner => (
        <Box width={[1, null, 1/2, 1/3]} mx="auto" p={3} key={partner.node.frontmatter.name}>
          <SectionHeading>{partner.node.frontmatter.name}</SectionHeading>
          <IndentedText>
            <Text
              fontSize="2"
              dangerouslySetInnerHTML={{ __html: partner.node.html}}
              color="accent"
              css={{ 'p': { marginBottom: '.5em' } }}
            />
            {partner.node.frontmatter.website &&
              <UnderlineLink>
                <Link
                  href={partner.node.frontmatter.website}
                  target="_blank"
                  color="accent"
                  children="Zur Website"
                />
              </UnderlineLink>
            }
          </IndentedText>
        </Box>
      ))}
    </Flex>
  )
}
