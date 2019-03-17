import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styled from 'react-emotion'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import './layout.css'

const Content = styled.div`
  ${tw`px-8 py-8 font-sans`};
  @media(min-width: 600px) {
    ${tw`px-32`};
  }
`

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Wir sind die Nachhaltigkeitsfreunde, eine junge motivierte Truppe aus Wilhelmshaven. Unser Ziel ist es das Nachhaltigkeitsbewusstsein in der Stadt zu stärken.' }
          ]}
          htmlAttributes={{"lang": "de"}}
        />
        <Header siteTitle={data.site.siteMetadata.title} />
        <Content>{children}</Content>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
