const { createFilePath } = require('gatsby-source-filesystem')

const onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === 'MarkdownRemark') {

    function relDirectoryName(node){
      const dirName = getNode(node.parent).relativeDirectory
      return `/${dirName}/${node.frontmatter.slug}`
    }

    const nodeFieldValue = typeof node.frontmatter.slug !== 'undefined'
                          ? relDirectoryName( node )
                          : createFilePath({ node, getNode })
    
    createNodeField({
      node,
      name: 'slug',
      value: nodeFieldValue,
    })

    {/*
    if (typeof node.frontmatter.slug !== 'undefined'){
      const dirName = getNode(node.parent).relativeDirectory
      createNodeField({
        node,
        name: 'slug',
        value: `/${dirName}/${node.frontmatter.slug}`,
      })
    } else {
      const value = createFilePath({ node, getNode })
      createNodeField({
        node,
        name: 'slug',
        value
      })
    }
    */}
  }
}

module.exports = onCreateNode