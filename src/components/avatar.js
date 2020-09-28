import React from "react"
import { useStaticQuery, graphql } from "gatsby"
//import { rhythm } from "../utils/typography"
import Image from "gatsby-image"

function Avatar(props) {
    const data = useStaticQuery(graphql`
        query {
            avatar: file(relativePath: { regex: "/pehcy.jpg/" }) {
                childImageSharp {
                    fixed(width: 75, height: 75) {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
        }
    `);

    const { url, altText, title } = props
    const styles = {
        //marginRight: rhythm(1/2),
        marginBottom: 0,
        width: `75px`,
        height: `75px`,
        borderRadius: `100%`,
    }
    return <Image fixed={data.avatar.childImageSharp.fixed}
                alt={altText}
                style={styles}
                title={title}
                url={url}
                fadeIn={false}
                imgStyle={{ borderRadius: `50%`,}}
            />
}

export default Avatar