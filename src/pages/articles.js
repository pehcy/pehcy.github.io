import React from "react"
import SEO from "../components/seo"
import Layout from "../components/Layout"
import Header from "../components/Header"

const NotesPage = ({data}) => {

  return (
    <Layout>
      <Header/>
      <SEO title="Notes" />
      <h3>Self-learning Notes</h3>
    </Layout>
  )
}

export default NotesPage