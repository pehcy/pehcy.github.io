import React from 'react'
import { useStaticQuery } from 'gatsby'

const Avatar = props => (
  <div>
  </div>
)

export default Avatar

const avatarQuery = graphql`
  query {
    site{
      siteMetadata
    }
  }
`
