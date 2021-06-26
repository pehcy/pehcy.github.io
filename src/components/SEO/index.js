import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

const SEO = ({
  description,
  lang,
  meta,
  title
}) => {
  const siteSchema = `{
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "",
    "sameAs": [
    ],
    "logo": {}
  }`

  return (
    <Helmet>
      <script type="application/ld+json">{siteSchema}</script>
    </Helmet>
  )
}

SEO.defaultProps = {
  lang: 'en',
  meta: [],
  description: ''
}