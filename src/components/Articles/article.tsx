import React, { useEffect } from 'react'
import { Link } from 'gatsby'
import { Container } from '../Container'
//import { GridLayoutContext } from '../components/GridLayout'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'


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


const ArticleFeed = ({edges}) => {

  return (
    <Container>
    <Grid>
    { edges.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug
        return (
          <Link to={node.fields.slug}>
          <GridItem>
          <GridContent>
            <h3 style={{ marginBottom: 10, }}>{title}</h3>
            <small>{ node.frontmatter.date }</small>
            <section>
              <p
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.description || node.excerpt,
                }}
              />
            </section>
          </GridContent>
          </GridItem>
          </Link>
        )
      })
    }
    </Grid>
    <Grid>
      <a href="https://observablehq.com/@pehcy/monte-carlo-simulation-serving-time-in-bank" target="_blank" rel="noopener noreferrer">
      <GridItem>
        <GridContent>
          <h3>Monte-Carlo Simulation: Serving Time in Bank</h3>
          <small>August 30, 2020</small>
          <section>
            <p>Visualize the serving time of a poorly maintained bank in Observable Notebook.</p> 
          </section>
        </GridContent>
      </GridItem>
      </a>
    </Grid>
    </Container>
  )
}

export default ArticleFeed