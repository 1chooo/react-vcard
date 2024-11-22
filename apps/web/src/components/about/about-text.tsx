import React from 'react';
import MarkdownRenderer from '@/components/markdown/markdown-renderer';

import config from '@/config';
import "@/styles/about/about-text.css"

const { introductions } = config.about;

const AboutText: React.FC = () => {

  const renderIntroduction = () =>
    introductions.map((item, index) => (
      <MarkdownRenderer key={`${item}-${index}`} content={item} />
    ));

  return (
    <section className="about-text">
      {renderIntroduction()}
    </section>
  );
};

export default AboutText;
