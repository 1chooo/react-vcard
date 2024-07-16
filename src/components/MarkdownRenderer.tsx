import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Anchor from './Anchor';

interface MarkdownRendererProps {
  content: string;
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content }) => (
  <ReactMarkdown
    children={content}
    remarkPlugins={[remarkGfm]}
    components={{ a: (props) => <Anchor {...props} /> }}
  />
);

export default MarkdownRenderer;
