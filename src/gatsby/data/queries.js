module.exports.local = {
  allMarkdownRemark: `{
    allMarkdownRemark(
      sort:{
        fields: [frontmatter___date],
        order: DESC,
    }){
      edges{
        node {
          tableOfContents(
            absolute: true,
            maxDepth: 2,
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
  }`,
  siteData: `{
    site {
      siteMetadata {
        author {
          name
          summary
        }
        social {
          twitter
        }
      }
    }
  }`
};
