const path = require('path')

module.exports = async ({ graphql, actions: { createPage } }) => {
  
  const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
        limit: 1000
      )
      {
        edges {
          node {
            tableOfContents(
              absolute: true
              maxDepth: 2
            )
            fields {
              slug
            }
            frontmatter {
              template
            }
          }
        }
      }
    }
  `)
  
  const templatesDirectory = path.resolve(__dirname, './src/templates') 
  const templates = {
    page: path.resolve(templatesDirectory, 'page-template.tsx'),
    post: path.resolve(templatesDirectory, 'blog-post.tsx'),
  }

  const edges = result.data.allMarkdownRemark.edges

  edges.forEach(edge => {
    createPage({
      path: edge.node.fields.slug,
      component: templates[edge.node.frontmatter.template],
      context: { slug: edge.node.fields.slug }
    })
  })

  {/*
  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node
    const next = index === 0 ? null : posts[index - 1].node

    createPage({
      path: post.node.fields.slug,
      component: blogPost,
      context: {
        slug: post.node.fields.slug,
        //previous,
        //next,
      },
    })
  })
*/}
}