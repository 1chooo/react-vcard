import React from 'react';
import MarkdownRenderer from '@/components/markdown/markdown-renderer';

import "@/styles/about/about-text.css"

interface AboutTextProps {
  introduction: string;
}

const AboutText: React.FC<AboutTextProps> = ({ introduction }) => {
  return (
    <section className="about-text">
      <MarkdownRenderer content={introduction} />
    </section>
  );
}

export default AboutText;
