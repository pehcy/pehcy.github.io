/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { FaGithub, FaTwitter, FaLinkedinIn, FaRss, FaDiscord } from "react-icons/fa"
import { IconContext } from "react-icons"
import Avatar from "../components/avatar"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `)

  const { author, social } = data.site.siteMetadata
  
  const socialIconsBar = (social) => {
    
    return (
      <IconContext.Provider value={{ style: {fontSize: '23px', color: "#bcc7daa1"}}}>
        <div>
          <a href={`https://twitter.com/${social.twitter}`} style={{boxShadow: 'none'}}>
            <FaGithub />
          </a>
        </div>
        <div>
          <a href={`https://twitter.com/${social.twitter}`} style={{boxShadow: 'none'}}>
            <FaTwitter />
          </a>
        </div>
        <div>
          <a href={`https://twitter.com/${social.twitter}`} style={{boxShadow: 'none'}}>
            <FaLinkedinIn />
          </a>
        </div>
        <div>
          <a href={``} style={{boxShadow: 'none'}}><FaDiscord /></a>
        </div>
        <div>
          <a href={``} style={{boxShadow: 'none'}}><FaRss /></a>
        </div>
      </IconContext.Provider>
    )
  }

  return (
    <div>
      <div 
        style={{
          display: `flex`,
          flexDirection: `row`,
          position: `relative`,
          boxShadow: `none`
        }}
      >
        <Avatar/>
        { socialIconsBar(social) }
        </div>
        <div>
          <p>
            <strong>{author.name}</strong> {author.summary}
            {` `}
          </p>
      </div>
    </div>
  )
}

export default Bio
