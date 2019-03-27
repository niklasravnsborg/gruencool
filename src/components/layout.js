import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styled from '@emotion/styled'
import { StaticQuery, graphql } from 'gatsby'

import 'typeface-muli'

import Container from './container'
import Header from './header'
import Footer from './footer'
import './layout.css'

const Content = styled.div`
  ${tw`px-8 py-8 font-sans`};
`

const PushFooter = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
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
        <PushFooter>
          <Header siteTitle={data.site.siteMetadata.title}/>
          <Content>
            <Container>
              {children}
            </Container>
          </Content>
          <Footer/>
        </PushFooter>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
