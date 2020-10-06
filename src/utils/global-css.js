import { css } from '@emotion/core'

const path = require('path')

export const globalStyles = css`
  @font-face {
    font-family: "Inter", "system-ui", "-apple-system", 
      "BlinkMacSystemFont", "Segoe UI", "Roboto", 
      "Helvetica Neue", "sans-serif";
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    fontfamily: JetBrainsMono;
    font-weight: 400;
    font-style: normal;
    src: url("");
    font-display: swap;
  }

  a {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }

  body {
    font-family: "Inter", "system-ui", "-apple-system", 
      "BlinkMacSystemFont", "Segoe UI", "Roboto", 
      "Helvetica Neue", "sans-serif";
    font-weight: 400;
  }
`
