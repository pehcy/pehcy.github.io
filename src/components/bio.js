/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { FaGithub, FaTwitter, FaLinkedinIn } from "react-icons/fa"
import { IconContext } from "react-icons"
import Image from "gatsby-image"

import { rhythm } from "../utils/typography"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
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
      </IconContext.Provider>
    )
  }

  return (
    <div
      style={{
        marginBottom: rhythm(2.5),
      }}
    >
      <div 
        style={{
          display: `flex`,
          flexDirection: `row`,
          position: `relative`,
          boxShadow: `none`
        }}
      >
        <Image
          fixed={data.avatar.childImageSharp.fixed}
          //alt={author.name}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            minWidth: 50,
            borderRadius: `100%`,
          }}
          imgStyle={{
            borderRadius: `50%`,
          }}
        />
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
