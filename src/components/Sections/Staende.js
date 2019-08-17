import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Flex, Box, Text, Heading, Link } from '@rebass/emotion'

import IndentedText from '../IndentedText'
import UnderlineLink from '../UnderlineLink'

export default () => {
  const data = useStaticQuery(graphql`
    query StaendeQuery {
      staende: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/src/staende/" } },
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
    <Flex flexWrap="wrap" m={-4}>
      {data.staende.edges.map(item => (
        <Box width={[1, null, 1/2]} mx="auto" p={4} key={item.node.frontmatter.name}>
          <Heading mb="3" fontSize="3">{item.node.frontmatter.name}</Heading>
          <IndentedText>
            <Text
              dangerouslySetInnerHTML={{ __html: item.node.html}}
              css={{ 'p': { marginBottom: '.5em' } }}
            />
            {item.node.frontmatter.website &&
              <UnderlineLink>
                <Link
                  href={item.node.frontmatter.website}
                  target="_blank"
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
