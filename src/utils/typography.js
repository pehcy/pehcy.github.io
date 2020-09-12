import Typography from "typography"
import Wordpress2016 from "typography-theme-wordpress-2016"
import { render } from "react-dom"

Wordpress2016.overrideThemeStyles = ({rhythm}, styles) => ({
  "a.gatsby-resp-image-link": {
    boxShadow: `none`,
  },
  "h1,h2,h3,h4,h5,h6": {
    fontFamily: `inherit`,
  },
  blockquote: {
    borderLeft: `${rhythm(1/5.45)} solid black`,
  },
});

delete Wordpress2016.googleFonts

const typography = new Typography(Wordpress2016)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
