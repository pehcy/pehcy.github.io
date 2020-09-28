import React from "react"
import { Link } from "gatsby"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
//import { rhythm, scale } from "../utils/typography"
import { useColorMode } from 'theme-ui'
import { FaAdjust } from 'react-icons/fa'

const Layout = ({ location, children}) => {
  
  const [colorMode, setColorMode] = useColorMode();
  const nextColorMode = colorMode === 'light' ? 'dark' : 'light';
  
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

  const headerSticky = css`
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    text-align: right;
  `

  const footerStyling = css`
    text-decoration: none;
    color: inherit;
    &:a {
      box-shadow: none;
    }
  `

  const AdjustButton = styled.button`
    border: none;
    background-color: transparent;
    font-size: 24px;
    color: inherit;
    cursor: pointer;
  `

  const sectionStyling = css`
    list-style: none;
    &:a {
      menuLinks:[
        {
          name:'home',
          link:'/',
        },
        {
          name:'notes',
          link:'/notes',
        }
      ],
      color:red;
    }
  `

  const header = (
    <>
      <AdjustButton
        onClick = {e => {
          setColorMode(nextColorMode)
        }}>
          <FaAdjust />{ colorMode }
      </AdjustButton>
    </>
  )

  // render view webpage
  return (
    <LayoutWrapper>
      <header css={ headerSticky }>{header}</header>
      <ContentWrapper>
      <div
        style={{
          //maxWidth: rhythm(26),
          //padding: `${rhythm(1.5)} ${rhythm(1 / 2)}`,
          float: `right`,
          margin: `0rem 0rem 0rem 4rem`,
        }}
      >
        <main>{children}</main>
        <footer css={ footerStyling }>
          © pehcy (CheeYung) {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
      </ContentWrapper>
    </LayoutWrapper>
  )
}

export default Layout
