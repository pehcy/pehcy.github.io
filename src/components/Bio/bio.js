import React from 'react'
import Avatar from '../components/avatar'
import { useStaticQuery, graphql } from 'gatsby'

const Bio = () => {
  const data = useStaticQuery(
    graphql`
      query BioDataQuery {
        site {
          siteMetadata {
            author {
              name
              summary
            }
            social {
              twitter
            }
          }
        }
      }
    `
  )
  
  const {author, social} = data.site.siteMetadata

  return (
    <>
      <Avatar/>
      <div>
      <p>{author.name}</p>{author.summary}
      </div>
    </>
  )
}

export default Bio