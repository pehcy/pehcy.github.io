import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { Wrapper, IntroWrapper, DetailsContainer } from './styles'
import { Container } from '../Container'
import { Button } from '../Button'
import { authorProps } from '../../types'

const IntroContext = () => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            author {
              name
              summary
            }
          }
        }  
      }
    `
  )
  const author : authorProps = data.site.siteMetadata.author

  return (
    <Wrapper>
      <IntroWrapper>
      <DetailsContainer>
        <Container>
        <h1 className="Hero__summary" dangerouslySetInnerHTML={{ __html:author.summary}}/>
        <Button>
          Resume
        </Button>
        </Container>
      </DetailsContainer>
      </IntroWrapper>
    </Wrapper>
  )
}

export default IntroContext