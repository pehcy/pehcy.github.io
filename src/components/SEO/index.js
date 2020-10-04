import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

const SEO = ({
    description,
    lang,
    meta,
    title,
}) => {
  const { site } = useStaticQuery(seoQuery)
  const metaDescription = description || site.siteMetadata.description
  const authorContacts = site.siteMetadata.author.contacts

  const siteSchema = `{
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "${site.siteMetadata.siteUrl}/#organization",
    "name": "${ site.siteMetadata.title }",
    "url": "${ site.siteMetadata.siteUrl }",
    "sameAs": [
      "${ authorContacts.discord }",
      "${ authorContacts.github }",
      "${ authorContacts.linkedin }",
      "${ authorContacts.twitter }",
    ],
    "logo": {},
  }`

  return ( 
    <Helmet
      title={ title }
      titleTemplate={ site.siteMetadata?.title ? title : null }
      htmlAttributes = {{ lang, }}
      meta={[
        { name: 'description', content: metaDescription },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: title },
        { property: 'og:description', content: metaDescription },
        { name: 'twitter:card', content: 'summary'},
        { name: 'twitter:creator', content: site.siteMetadata?.social?.twitter || ''},
        { name: 'twitter:title', content: title },
        { name: 'twitter:description', content: metaDescription },
      ].concat(meta)}
    > 
      <script type="application/ld+json">{ siteSchema }</script>
      { site.siteMetadata.canonical && 
        <link rel="canonical" href={site.siteMetadata.canonical }/>
      }
    </Helmet>
  )
}

SEO.defaultProps = {
  lang: 'en',
  meta: [],
  title: '',
  description: '',
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO

const seoQuery = graphql`
  query {
    site {
      siteMetadata {
        author {
          contacts {
            discord
            github
            linkedin
            twitter
          }
        }
        description
        canonical
        siteUrl
        social {
          twitter
        }
        title
      }
    }
  }
`