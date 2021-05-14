import React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { MDXProvider } from '@mdx-js/react'

const BlogPostTemplate = ({data, pageContext}) => {
  const { frontmatter, body, excerpt, tableOfContents } = data.mdx
  console.info("toc: ", tableOfContents)

  return (
    <>
      <h1>{frontmatter.title}</h1>
      <MDXRenderer>{body}</MDXRenderer>
      <hr/>
      <ul>
      {
        tableOfContents.items.map(i => (
            <li>
              {i.title}
            </li>
          )
        )
      }
      </ul>
    </>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query PostBySlug($slug: String!) {
    mdx(fields: { slug:{eq: $slug} }){
      body
      excerpt(pruneLength: 160)
      tableOfContents
      fields {
        slug
      }
      frontmatter {
        title
        date(formatString: "YYYY MM DD")
      }
    }
  }
`