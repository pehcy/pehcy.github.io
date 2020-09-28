import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

const pageTemplate = ({data}) => (
  <Layout>
    <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
  </Layout>
)

export default pageTemplate

export const query = graphql`
  query PageBySlug($slug: String!) {
    markdownRemark( fields: { slug: { eq: $slug } }){
      id
      html
      frontmatter {
        title
        date
        description
      }
    }
  }
`