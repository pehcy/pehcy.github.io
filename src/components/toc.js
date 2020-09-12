import React, { useEffect, useMemo } from "react"
import { useActiveHash } from "../components/use-active-hash"
import { css } from "@emotion/core"
//import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser'

function TableOfContents({ html }) {
  //var parseToHTML = require('react-html-parser');

  // toc styled css 
  const tocStyle = css`
    position: sticky;
    top: 0;
    font-size: 85%;
    height: 0px;
    > ul {
      transform: translateX(calc(-100% - 4em)) translateY(6em);
      padding-left: 0px;
    };
    ul {
      width: calc(-4em - 340px + 50vw);
      li{
        display: inline-block;
        list-style: outside none none;
      
        a {
          color: #88A0A8;
          box-shadow: none;
        }

        .isActive{
          color: black;
        }
      }
    };
  `

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