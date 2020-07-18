import React from "react"
import { Link } from "gatsby"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import Bio from "../components/bio"
import { rhythm, scale } from "../utils/typography"
import { useColorMode } from 'theme-ui'
import { FaAdjust } from 'react-icons/fa'

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  
  const [colorMode, setColorMode] = useColorMode()
  const nextColorMode = colorMode === 'light' ? 'dark' : 'light'

  let header

  const AdjustButton = styled.button`
    border: none;
    background-color: transparent;
    color: inherit;
    cursor: pointer;
  `

  if (location.pathname === rootPath) {
    header = (
    <>
      <AdjustButton 
        onClick={e => {
        setColorMode(nextColorMode)
      }}>
        <FaAdjust />
      </AdjustButton >
      <h1
        style={{
          ...scale(1.5),
          marginBottom: rhythm(1.5),
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h1>
    </>
    )
  } else {
    header = (
    <>
      <AdjustButton 
        onClick={e => {
        setColorMode(nextColorMode)
      }}>
        <FaAdjust />
      </AdjustButton >
      <h3
        style={{
          fontFamily: `Montserrat, sans-serif`,
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h3>
    </>
    )
  }

  // CSS-in-JS with gatsby emotion
  const LayoutWrapper = styled.div`
    box-flex: 1;
    flex-grow: 1;
    margin: auto;
  `

  const ContentWrapper = styled.div`
    display: flex;
    margin: 0 auto;
    justify-content: center;
  `

  const footerStyling = css`
    text-decoration: none;
    color: inherit;
    &:a {
      box-shadow: none;
    }
  `

  const SectionPage = () => {
    return (
      <ul>
        <li><Link to="/">Article</Link></li>
        <li><Link to="/">Self-learning notes</Link></li>
      </ul>
    )
  }

  // render view webpage
  return (
    <LayoutWrapper>
      <ContentWrapper>
      <div
        className = "layout-aside-bio"
        style={{
          float: `left`,
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
          maxWidth: rhythm(12.85),
          position: `sticky`,
          height: `calc(100% - 2em - 2em)`,
          top: 0,
        }}>
          <Bio />
          <SectionPage />
      </div>
      <div
        style={{
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
          float: `right`,
        }}
      >
        <header>{header}</header>
        <main>{children}</main>
        <footer css={ footerStyling }>
          © pehcy {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
      </ContentWrapper>
    </LayoutWrapper>
  )
}

export default Layout
