import React from 'react';
import SubHeader from './SubHeader';
import MarkdownRenderer from '../MarkdownRenderer';

import { abouts } from '../../config/about';

const AboutText: React.FC = () => {
  const { subHeader, description } = abouts;

  // TODO: move to utils
  const renderDescription = () =>
    description.map((item, index) => (
      <MarkdownRenderer
        key={`${item}-${index}`}
        content={item}
      />
    ));

  return (
    <section className="about-text">
      <SubHeader text={subHeader} />
      <br />
      {renderDescription()}
    </section>
  );
};

export default AboutText;
