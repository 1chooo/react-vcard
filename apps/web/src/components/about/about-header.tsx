import React from 'react';

interface H4Props {
  text: string;
}

const AboutHeader: React.FC<H4Props> = ({ text }) => {
  return (
    <h2 className="text-light-gray text-lg font-bold mt-[30px] mb-[30px]">
      <code>{text}</code>
    </h2>
  );
};

export default AboutHeader;
