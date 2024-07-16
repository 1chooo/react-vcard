import React from 'react';

interface SubHeaderProps {
  text: string;
}

const SubHeader: React.FC<SubHeaderProps> = ({ text }) => {
  return (
    <h3>
      <code>{text}</code>
    </h3>
  );
};

export default SubHeader;
