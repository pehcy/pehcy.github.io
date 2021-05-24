import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import Header from '../components/Header'

const IndexPage = ({ data }) => (
  <Layout>
    <Header />
    <div className="m-auto md:max-w-5xl py-6">
      <h1>Recent Posts</h1>
      <div>
        {
          data.allMdx.nodes.map(({ excerpt, frontmatter, fields }) => (
            <Link to={fields.slug}>
              <h2>{frontmatter.title}</h2>
              <div className="grid grid-cols-2 gap-1 box-border md:w-9/12">
                <div className="text-sm font-sans">Last updated on {new Date(frontmatter.date).toLocaleString('en-GB')}</div>
                <div className="text-sm font-sans">5 min read</div>
              </div>
              <p>{excerpt}</p>
            </Link>
          ))
        }
      </div>
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
