import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Anchor from '../Anchor';

import { abouts } from '../../config/about';

const AboutText: React.FC = () => {
  const { subHeader, description } = abouts;

  const renderDescription = () =>
    description.map((item, index) => (
      <ReactMarkdown
        key={index}
        children={item}
        remarkPlugins={[remarkGfm]}
        components={{ a: ({ node, ...props }) => <Anchor {...props} /> }}
      />
    ));

  return (
    <section className="about-text">
      <p>
        <h3><code>{subHeader}</code></h3>
      </p>
      {renderDescription()}
    </section>
  );
};

export default AboutText;
