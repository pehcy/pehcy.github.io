import React from "react"
import SEO from "../components/SEO"
import Layout from "../components/Layout"
import Header from "../components/Header"
import ArticleFeed from "../components/Articles"
import { Container } from "../components/Container"
import { graphql } from "gatsby"

import { Global } from '@emotion/core'
import { globalStyles } from '../utils/global-css' 

const NotesPage = ({data}) => {

  return (
    <Layout>
      <Global styles={ globalStyles } />
      <Header/>
      <SEO title="Notes" />
      <Container>
        <h3>Articles</h3>
      </Container>
      <ArticleFeed edges={data.allMarkdownRemark.edges}/>
    </Layout>
  )
}

export default NotesPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        author {
          name
          summary
          contacts {
            twitter
            linkedin
            discord
            rss
          }
        }
        social {
          twitter
        }
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC },
      filter: { frontmatter: { template: { eq: "post" }}}
      ){
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