import React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Img from 'gatsby-image'
import Articles from '../components/Articles'
import { MDXProvider } from '@mdx-js/react'
import Layout from '../components/Layout'
import Toc from '../components/Toc'
import CodeBlock from '../components/CodeBlock'
//import Highlight, { defaultProps } from 'prism-react-renderer'; // eslint-disable
//import theme from 'prism-react-renderer/themes/oceanicNext'

/*
const component = {
  pre: props => {
    const className = props.children.props.className || '';
    const matches = className.match(/language-(?<lang>.*)/);
    return (
      <Highlight
        {...defaultProps}
        theme={theme}
        code={props.children.props.children}
        language={
          matches && matches.groups && matches.groups.lang
            ? matches.groups.lang
            : ''
        }
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre className={className} style={style}>
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
    );
  }
}
*/

const component = {
  pre: CodeBlock
}

const BlogPostTemplate = ({data, pageContext}) => {
  const { frontmatter, body, excerpt, tableOfContents } = data.mdx
  let featuredImgFluid = frontmatter.featuredImage.childImageSharp.fluid

  return (
    <Layout>
      <div className="m-auto md:max-w-5xl w-full flex flex-row">
        <Articles>
          <h1>{frontmatter.title}</h1>
          <Img fluid={featuredImgFluid} />
          <MDXProvider components={component}>
            <MDXRenderer>{body}</MDXRenderer>
          </MDXProvider>
          </Articles>
        <Toc contents={tableOfContents} />
      </div>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query PostBySlug($slug: String!) {
    mdx(fields: { slug:{eq: $slug} }){
      body
      excerpt(pruneLength: 160)
      tableOfContents
      fields {
        slug
      }
      frontmatter {
        title
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        date(formatString: "YYYY MM DD")
      }
    }
  }
`