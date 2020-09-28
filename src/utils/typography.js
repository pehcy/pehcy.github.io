import Typography from "typography"
import Wordpress2016 from "typography-theme-wordpress-2016"
import { render } from "react-dom"

delete Wordpress2016.googleFonts
Wordpress2016.headerFontFamily = [`inherit`]
Wordpress2016.headerWeight = 700

Wordpress2016.overrideThemeStyles = ({rhythm}, styles) => ({
  "a.gatsby-resp-image-link": {
    boxShadow: `none`,
  },
  blockquote: {
    borderLeft: `${rhythm(1/5.45)} solid black`,
  },
});

const typography = new Typography()

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
