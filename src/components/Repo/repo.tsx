import React from 'react'
import { Container } from '../Container' 
import { useStaticQuery, graphql } from 'gatsby'
import styled from '@emotion/styled'

const RepositoriesList = () => {
  const { 
    github:{
      viewer: {
        repositories: { edges },
      },
    },
  } = useStaticQuery(
    graphql`
    {
      github {
        viewer {
          repositories (first: 8) {
            edges {
              node {
                id
                name
                url
                description
                forkCount
              }
            }
          }
        }
      }
    }
    `
  )

  return (
    <Container>
      <Grid>
        { edges.map(({ node }) => (
            <a href={node.url} target="_blank" rel="noopener noreferrer">
              <GridItem>
                <GridContent>
                <h3>{ node.name }</h3>
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
  padding: 1rem 0;
`