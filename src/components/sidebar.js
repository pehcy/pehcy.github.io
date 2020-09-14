import React from "react"
import { Link } from "gatsby"
import Bio from "../components/bio"
import { rhythm, scale } from "../utils/typography"

function SideBar(props){
  const rootPath = `${__PATH_PREFIX__}/`
  const isMainpage = props.pathName === rootPath || props.pathName === rootPath+'notes'

  return (
    <>
    { isMainpage &&
      <div
      id = "layout-aside__sticky"
      style={{
        float: `left`,
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        maxWidth: rhythm(12.85),
        position: `sticky`,
        height: `calc(100% - 2em - 2em)`,
        top: 0,
      }}
    >
      <Bio />
      <ul>
        <Link to="/" activeClassName="active"><li>Article</li></Link>
        <Link to="/notes" activeClassName="active"><li>Self-learning notes</li></Link>
      </ul>
    </div>      
    }
    </>
  )
}

export default SideBar