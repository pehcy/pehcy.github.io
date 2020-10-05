import React from "react"
import { graphql } from "gatsby"

import SEO from "../components/SEO"
import IntroContext from "../components/Intro"
import Layout from "../components/Layout"
import Header from "../components/Header"
import Footer from "../components/Footer"
import SocialLinks from "../components/SocialLinks"
import RepositoriesList from "../components/Repo"

import { Global } from '@emotion/core'
import { globalStyles } from '../utils/global-css'

const BlogIndex = ({ data, pageContext }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout>
      <SEO title={ siteTitle } />
      <Global styles={ globalStyles } />
      <Header/>
      <IntroContext/>
      <SocialLinks social={data.site.siteMetadata.author.contacts}/>
      <RepositoriesList/>
      <Footer/>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
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
