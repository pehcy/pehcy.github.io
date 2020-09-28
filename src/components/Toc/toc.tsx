import React, { useEffect, useMemo } from "react"
import { useActiveHash } from "./use-active-hash"
import { css } from "@emotion/core"

//import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser'

function TableOfContents({ html }) {
  //var parseToHTML = require('react-html-parser');

  const targetedIds = useMemo(() => {
    let val = []
    if(typeof document !== 'undefined'){
      var dummyDOM = document.createElement("html")
      dummyDOM.innerHTML = html
      const justAnchors = dummyDOM.querySelectorAll(`a`)
    
      justAnchors.forEach(a => {
        val.push(a.hash.replace("#", ""))
      });
    }

    return val;
  }, [])

  const activeHash = useActiveHash(targetedIds)

  useEffect(() => {
    const ToClinks = document.querySelectorAll(`.Toc a`)

    ToClinks.forEach(a => {
      a.classList.remove("isActive")
    })

    const activeLink = document.querySelectorAll(
      `.Toc a[href$="${"/#" + activeHash}"]`
    )

    if (activeLink.length) {
      activeLink[0].classList.add("isActive")
    }
  }, [activeHash])

  return (
    <div className="Toc" dangerouslySetInnerHTML={{ __html: html }} css={tocStyle}/>
  )
}

export default TableOfContents

const tocStyle = css`
  position: sticky;
  top: 76px;
  font-size: 85%;
  height: 0px;
  font-weight: 600;
  
  @media (max-width: 960px) {
    display: none;
  }
  
  > ul::before { 
    content: "contents";
    letter-spacing: 1px;
    text-transform: uppercase;
    line-height: 1.2;
  };
  > ul { padding-left: 0; }
  ul {
    width: 187px;

    li{
      display: inline-block;
      list-style: outside none none;
      margin-bottom: 12.5px;
      a {
        color: #88A0A8;
        box-shadow: none;
      }

      .isActive{
        color: black;
      }
    }

    li:last-child {
      margin-bottom: 0px;
    }
  };
`