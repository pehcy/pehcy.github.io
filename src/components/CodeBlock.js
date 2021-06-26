import React from 'react'
import Highlight, { defaultProps } from 'prism-react-renderer'
import rangeParser from 'parse-numeric-range'
import theme from 'prism-react-renderer/themes/oceanicNext'

function getLinesToHighlight(meta) {
  const RE = /{([\d,-]+)}/
  if (RE.test(meta)) {
    const strLineNumbers = RE.exec(meta)[1]
    const lineNumbers = rangeParser(strLineNumbers)
    return (i) => lineNumbers.includes(i + 1)
  } else {
    return () => false
  }
}

export default (props) => {
  const className = props.children.props.className || ''
  const matches = className.match(/language-(?<lang>.*)/)
  return (
    <Highlight
      {...defaultProps}
      theme={theme}
      code={props.children.props.children.trim()}
      language={
        matches?.groups?.lang
          ? matches.groups.lang
          : ''
      }
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={`${className} py-2.5 rounded-md`} style={style}>
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  )
}