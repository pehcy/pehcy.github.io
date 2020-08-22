import React from "react"
import { Link } from "gatsby"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import Bio from "../components/bio"
import { rhythm, scale } from "../utils/typography"
import { useColorMode } from 'theme-ui'
import { FaAdjust } from 'react-icons/fa'

const Layout = ({ location, title, children}) => {
  const rootPath = `${__PATH_PREFIX__}/`

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
      color:red;
    }
  `

  const SideBar = ({rootPath, sidebar}) => {
    {/*
    const [listItems, setListItems] = useState(null);
    useEffect(() => {
        var headingList = document.querySelectorAll('h3');
        setListItems([...headingList].map(i => <li>{ i.textContent }</li>));
      }, []
    );
    */}

    if (location.pathname === rootPath) {
      return (
        <>
          <Bio />
          <ul css={ sectionStyling }>
            <Link to="/"><li>Article</li></Link>
            <Link to="/"><li>Self-learning notes</li></Link>
          </ul>
        </>
      );
    }
    else {
      return (
        <></>
      );
    }
    {/*
      else{
      // If not homepage, display toc for posts
      return (
        <div className="toc" dangerouslySetInnerHTML={{ __html: sidebar }} />
      );
    }
      */
    }
  }

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
        id = "layout-aside__sticky"
        style={{
          float: `left`,
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
          maxWidth: rhythm(12.85),
          position: `sticky`,
          height: `calc(100% - 2em - 2em)`,
          top: 0,
        }}>
          <SideBar rootPath={rootPath}/>
      </div>
      <div
        style={{
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(1 / 2)}`,
          float: `right`,
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
