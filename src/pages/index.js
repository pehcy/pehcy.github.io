import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout location={location} title={siteTitle}>
      <h3>Experience</h3>
      I previously interned as Java and PHP full-stack developer in a startup company for 3 months.
      I'm helping to develop web application and Android mobile apps for 
      cryptocurrency mining (legally) and a real-time airflight booking system during 
      this period.
      <br/><br/>
      <strong>Softwares:</strong>{` `}
      Java and Android Studio, PHP, MySQL for back-end, CSS and Laravel Framework for front end. 

      <h3>Affiliation</h3>
      I am one of the members of Functional Programming Club Malaysia.
      <br/><br/>
      <hr/>
      <h3>Posts</h3>
      <SEO title="All posts" />
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug
        return (
          <article key={node.fields.slug}>
            <header>
              <h3
                style={{
                  marginBottom: rhythm(1 / 4),
                }}
              >
                <Link style={{ 
                    boxShadow: `none`,
                  }}                  
                  to={node.fields.slug}>
                  {title}
                </Link>
              </h3>
              <small>{node.frontmatter.date}</small>
            </header>
            <section>
              <p
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.description || node.excerpt,
                }}
              />
            </section>
          </article>
        )
      })}
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
