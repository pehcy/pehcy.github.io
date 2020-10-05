import React from 'react'
import { Container } from '../Container' 
import { useStaticQuery, graphql } from 'gatsby'
import styled from '@emotion/styled'

const githubQuery = graphql`
{
  github {
    viewer {
      repositories (first: 10) {
        edges {
          node {
            id
            name
            description
            forkCount
            primaryLanguage {
              name
            }
            stargazers {
              totalCount
            }
            url
          }
        }
      }
    }
  }
}
`

const RepositoriesList = () => {
  const { 
    github:{
      viewer: {
        repositories: { edges },
      },
    },
  } = useStaticQuery(githubQuery)

  return (
    <Container>
      <h2>Repositories</h2>
      <Grid>
        { edges.map(({ node }) => (
            <a href={node.url} target="_blank" rel="noopener noreferrer">
              <GridItem>
                <GridContent>
                <h3>{ node.name }</h3>
                <p>{node.description}</p>
                </GridContent>
              </GridItem>
            </a>
          ))
        }
      </Grid>
    </Container>
  )
} 

export default RepositoriesList 

const Grid = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 8fr;
  gap: 1.2rem 1.2rem;

  @media (max-width: 960px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 680px) {
    grid-template-columns: 1fr;
  }
`

const GridItem = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  box-shadow: 0 1px 6px 0 rgba(0, 0, 0, .11);
`

const GridContent = styled.div`
  padding: 1rem 1rem;
`