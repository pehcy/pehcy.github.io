import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'

const IndexPage = ({ data }) => (
  <Layout>
    <div>
      {
        data.allMdx.nodes.map(({excerpt, frontmatter, fields}) => (
          <Link to={fields.slug}>
            <h1>{ frontmatter.title }</h1>
            <p>{ frontmatter.date }</p>
            <p>{ excerpt }</p>
          </Link>
        ))
      }
    </div>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { published: { eq: true } }}
    ) {
      nodes {
        id
        excerpt(pruneLength: 160)
        frontmatter {
          title
          date
        }
        fields {
          slug
        }
      }
    }
  }
`
