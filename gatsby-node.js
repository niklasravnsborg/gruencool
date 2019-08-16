const path = require('path')

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === 'File') {
    const parsedFilePath = path.parse(node.absolutePath)
    const slug = `/${parsedFilePath.dir.split('---')[1]}/`
    createNodeField({ node, name: 'slug', value: slug })
  } else if (
    node.internal.type === 'MarkdownRemark' &&
    typeof node.slug === 'undefined'
  ) {
    const fileNode = getNode(node.parent)
    let slug = fileNode.fields.slug
    if (typeof node.frontmatter.path !== 'undefined') {
      slug = node.frontmatter.path
    }
    createNodeField({
      node,
      name: 'slug',
      value: slug
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions

  const redirects = [
    { f: '/partner/', t: '/programm/' },
  ]

  redirects.forEach(({ f, t }) => createRedirect({
    fromPath: f,
    toPath: t,
    isPermanent: true
  }))

  return new Promise((resolve, reject) => {
    const pageTemplate = path.resolve('./src/templates/page.js')

    graphql(`
      {
        allMarkdownRemark(
          limit: 1000,
          filter: { frontmatter: { } },
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                layout
              }
            }
          }
        }
      }
    `).then(result => {
      if (result.errors) {
        console.error(result.errors)
        reject(result.errors)
      }

      result.data.allMarkdownRemark.edges.forEach(edge => {
        if (edge.node.frontmatter.layout === 'page') {
          createPage({
            path: edge.node.fields.slug,
            component: pageTemplate,
            context: { slug: edge.node.fields.slug }
          })
        }
      })

      resolve()
    })
  })
}
