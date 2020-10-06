import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/Layout"
//import Bio from "../components/Bio"
import SEO from "../components/SEO"
import TableOfContents from "../components/Toc"
import Header from "../components/Header"
import Footer from '../components/Footer'

import styled from '@emotion/styled'
import { Global } from "@emotion/core"
import { globalStyles } from '../utils/global-css'

const BlogPostTemplate = ({ data, pageContext }) => {
  const post = data.markdownRemark
  //const siteTitle = data.site.siteMetadata.title
  const { previous, next } = pageContext

  return (
    <Layout>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <Global styles={ globalStyles }/>
      <Header/>
      <Wrapper>
      <TableOfContents html={post.tableOfContents}/>
      <BlogBody>
        <header>
          <h1
            style={{
              marginBottom: 0,
            }}
          >
            {post.frontmatter.title}
          </h1>
          <p
            style={{
              display: `block`,
            }}
          >
            {post.frontmatter.date}
          </p>
        </header>
        <section dangerouslySetInnerHTML={{ __html: post.html }}/>
        <hr/>
        <footer>
          <Bio />
        </footer>
      </BlogBody>
      </Wrapper>

      <nav>
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
      <Footer/>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      excerpt(pruneLength: 160)
      tableOfContents
      fields {
        slug
      }
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`

export default BlogPostTemplate

const Wrapper = styled.div`
  justify-content: center;
  display: flex;
`

const BlogBody = styled.article`
  position: relative;
  transition: background 0.2s linear;
  margin: 0px 64px;
  max-width: 680px;
  width: 100%;
  min-width: 0px;

  a {
    color: #4361ee;
  }
`
