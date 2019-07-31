import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Container from '../components/Container'

const page = ({ title, desc, html }) => (
	<Layout title={title} desc={desc}>
		<Container page>
			<div style={{ maxWidth: 800 }}>
				<h1>{title}</h1>
				<div dangerouslySetInnerHTML={{ __html: html }} />
			</div>
		</Container>
	</Layout>
)

export default ({ data }) => page({
	title: data.markdownRemark.frontmatter.title,
	desc:  data.markdownRemark.frontmatter.desc,
	html:  data.markdownRemark.html
})

export const query = graphql`
	query($slug: String!) {
		markdownRemark(fields: { slug: { eq: $slug } }) {
			id
			html
			frontmatter {
				title
			}
		}
	}
`
