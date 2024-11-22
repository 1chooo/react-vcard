import React from 'react';

interface ParagraphProps {
  node: any;
  children: React.ReactNode;
  [key: string]: any;
}

const isImageNode = (node: any): boolean => {
  return node &&
    node.type === 'element' &&
    node.tagName === 'img';
};

/**
 * A functional component that renders a paragraph element.
 * If the paragraph contains an image node, it will render the children directly without a <p> tag.
 *
 * @param props - The properties passed to the component.
 * @param props.node - The node object which may contain children nodes.
 * @param props.children - The child elements to be rendered inside the paragraph.
 * @param rest - Any additional properties passed to the paragraph element.
 *
 * @returns A JSX element representing the paragraph or its children.
 */
const Paragraph: React.FC<ParagraphProps> = (props) => {
  const { node, children, ...rest } = props;
  const hasImage = node &&
    node.children &&
    node.children.some(isImageNode);

  if (hasImage) {
    return <>{children}</>;
  }

  return <p {...rest}>{children}</p>;
};

export default Paragraph;
