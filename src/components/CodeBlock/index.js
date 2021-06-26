import React from 'react'
import rangeParser from 'parse-numeric-range'
import Highlight, { defaultProps } from 'prism-react-renderer'
import theme from 'prism-react-renderer/themes/vsDark'

function getCodeParams(className) {
  const [lang, params] = className.split(':')

  return [lang.split('language-').pop().split('{').shift() ].concat(
    params.split('&').reduce((merged, param) => {
      const [key, value] = param.split('=')
      merged[key] = value
      return merged
    }, {})
  )
}

function getLinesToHighlight(meta) {
  const RE = /{([\d,-]+)}/
  if (RE.test(meta)) {
    const strLineNums = RE.exec(meta)[1]
    const lineNumbers = rangeParser(strLineNums)
    return (index) => (lineNumbers.includes(index + 1))
  }
  else {
    return () => false
  }
}

const SyntaxHighlight = (props) => {
  const className = props.children.props.className || ''
  const [language, {title}] = getCodeParams(className)
  const metaString = props.children.props.metastring || ''
  const shouldHighlightLine = getLinesToHighlight(metaString)

  return (
    <Highlight
      {...defaultProps}
      theme={theme}
      code={props.children.props.children.trim()}
    >
      {({className, style, tokens, getLineProps, getTokenProps}) => (
        <pre className={className} style={style}>
          { tokens.map((line, i) => {
            const lineProps = getLineProps({ line, key:i })
            if (shouldHighlightLine(i)) {
              lineProps.className = `${lineProps.className} bg-green-100 block`
            }
            return (
              <div key={i} {...lineProps}>
                {line.map((token, key) => (
                  <span {...getTokenProps({token, key})} />
                ))}
              </div>
            )
          })}
        </pre>
      )}
    </Highlight>
  )
}

const Code = (props) => <SyntaxHighlight {...props} />

export default Code