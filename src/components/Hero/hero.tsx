import React from 'react'
import styled from '@emotion/styled'
import { graphql, useStaticQuery } from 'gatsby'

const heroQuery = useStaticQuery(graphql`
  query {
    site {
      siteMetadata{
        social {
          twitter
        }
      }
    }
  }
`)

const HeroContext = ({ data }) => (
  <HeadingContainer>
    <HeroHeading dangerouslySetInnerHTML={{ __html: data.twitter}}/>
  </HeadingContainer>
)

export default HeroContext

const HeadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const HeroHeading = styled.h1`
  font-weight: 600;

`