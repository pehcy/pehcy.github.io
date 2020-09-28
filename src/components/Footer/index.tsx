import React from 'react'
import styled from '@emotion/styled'
import Copyright from './Copyright'
import { Container } from '../Container'
import { useStaticQuery, graphql } from 'gatsby'

const Footer = () => {
  const pageQuery = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            copyright
          }
        }  
      }
    `
  )
  
  return(
    <HorizontalRule>
      <Container>
        <FooterWrapper>
          <Copyright copyright={ pageQuery.site.siteMetadata.copyright } />
        </FooterWrapper>
      </Container>
    </HorizontalRule>
  )
}

export default Footer

const FooterWrapper = styled.div`
  display: flex;
  bottom: 0;
  align-items: center;
  padding: 1.5rem 0 4rem 0;
  justify-content: space-between;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`

const HorizontalRule = styled.div`
  position: relative;
  margin: 140px auto 50px;
`