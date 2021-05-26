import React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Img from 'gatsby-image'
import Header from '../components/Header'
import Articles from '../components/Articles'
import { MDXProvider } from '@mdx-js/react'

const BlogPostTemplate = ({data, pageContext}) => {
  const { frontmatter, body, excerpt, tableOfContents } = data.mdx
  let featuredImgFluid = frontmatter.featuredImage.childImageSharp.fluid

  return (
    <>
      <Header />
      <Articles>
        <h1>{frontmatter.title}</h1>
        <Img fluid={featuredImgFluid} />
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
      </Articles>
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
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        date(formatString: "YYYY MM DD")
      }
    }
  }
`