import React from "react"
import { Link, graphql } from "gatsby"
import IntroContext from "../components/Intro"
import Layout from "../components/Layout"
import Header from "../components/Header"
import Footer from "../components/Footer"
import SocialLinks from "../components/SocialLinks"
import ArticleFeed from "../components/Articles"
import { Global } from '@emotion/core'
import { globalStyles } from '../utils/global-css' 
//import SEO from "../components/SEO"
//import { rhythm } from "../utils/typography"

const BlogIndex = ({ data, pageContext }) => {
  //const siteTitle = data.site.siteMetadata.title

  return (
    <Layout>
      <Global styles={ globalStyles } />
      <Header/>
      <IntroContext/>
      <SocialLinks social={data.site.siteMetadata.social}/>
      <ArticleFeed edges={data.allMarkdownRemark.edges}/>
      <Footer/>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        author {
          name
          summary
        }
        social {
          twitter
          linkedin
          discord
          rss
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
