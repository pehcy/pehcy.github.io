import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"

const NotesPage = ({data, location}) => {
  return (
    <Layout location={location}>
      <SEO title="Notes" />
      <h3>Self-learning Notes</h3>
    </Layout>
  )
}

export default NotesPage