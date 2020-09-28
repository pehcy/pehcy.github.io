import { css } from '@emotion/core'

export const globalStyles = css`
  @font-face {
    font-family: "Inter", "system-ui", "-apple-system", 
      "BlinkMacSystemFont", "Segoe UI", "Roboto", 
      "Helvetica Neue", "sans-serif";
    font-weight: 400;
    font-style: normal;
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
