import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import { Container } from '../Container'
import NightModeToggle from './ToggleTheme'

const Header = () => {
  return (
    <Wrapper>
      <WrapperOverlay>
        <Container>
        <AnchorContainer>
        <a href="https://github.com/pehcy" rel="noopener noreferrer" target="_blank">GitHub</a>
        <Link to="/">Home</Link>
        <Link to="/articles">Articles</Link>
        <NightModeToggle/>
        </AnchorContainer>
        </Container>
      </WrapperOverlay>
    </Wrapper>
  )
}

export default Header

const Wrapper = styled.div`
  background: transparent;
  width: 100%;
`

const AnchorContainer = styled.div`
  align-items: center;
  display: flex;
  margin-left: auto;
  margin-right: 1rem;
  width: max-content;

  @media (max-width: 960px) {
    display: block;
  }

  a {
    color: inherit;
    margin-right: 2.5rem;

    &:last-child {
      margin-right: unset;
    }

    &:hover {
      text-decoration: none;
    }
  }
`

const WrapperOverlay = styled.div`
  padding: 1.5rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`