/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const blogPostTemplate = path.resolve('./src/templates/postTemplate.js')

  const result = await graphql(`
    {
      allMdx (
        sort: { fields: [frontmatter___date], order: DESC }
        filter: { frontmatter: { published: { eq: true } } }
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild('Error occured while running GraphQL query.')
    return
  }

  result.data.allMdx.edges.forEach(({node}, index) => {
    createPage({
      path: node.fields.slug,
      component: blogPostTemplate, 
      context: { slug: node.fields.slug }
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === 'Mdx') {
    const value = createFilePath({node, getNode})
    createNodeField({
      name: 'slug',
      node,
      value
    })
  }
}