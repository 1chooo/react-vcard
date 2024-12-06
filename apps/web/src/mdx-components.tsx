import type { MDXComponents } from 'mdx/types'
import AnchorHeader from '@/components/markdown/anchor-header'
import MarkdownImage from '@/components/markdown/markdown-image'
import Anchor from '@/components/markdown/anchor'

// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including inline styles,
// components from other libraries, and more.
const components: MDXComponents = {
  // Allows customizing built-in components, e.g. to add styling.
  h1: ({ children, ...props }) => <AnchorHeader level={1} {...props}>{children}</AnchorHeader>,
  h2: ({ children, ...props }) => <AnchorHeader level={2} {...props}>{children}</AnchorHeader>,
  h3: ({ children, ...props }) => <AnchorHeader level={3} {...props}>{children}</AnchorHeader>,
  ul: (props) => (
    <ul
      {...props}
      style={{
        paddingLeft: '1.0rem',
      }}
    />
  ),
  ol: (props) => (
    <ol
      {...props}
      style={{
        paddingLeft: '1.0rem',
      }}
    />
  ),
  li: (props) => (
    <li
      {...props}
      style={{
        marginBottom: '0.15rem',
      }}
    />
  ),
  a: (props) => <Anchor {...props} />,
  sup: 'sup',
  sub: 'sub',
  img: (props) => <MarkdownImage src={props.src ?? ''} alt={props.alt} />,
}

export function useMDXComponents(
  otherComponents: MDXComponents,
): MDXComponents {
  return {
    ...otherComponents,
    ...components,
  };
}
