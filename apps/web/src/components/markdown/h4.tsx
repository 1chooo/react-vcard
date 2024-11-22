import React from 'react';
import '@/styles/h4-about.css';

interface H4Props {
  text: string;
}

const H4: React.FC<H4Props> = ({ text }) => {
  return (
    <h4 className="h4-about">
      <code>{text}</code>
    </h4>
  );
};

export default H4;
