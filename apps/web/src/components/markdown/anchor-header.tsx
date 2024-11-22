import React from 'react';
import slugify from '@/lib/utils/slugify';
import { IoLink } from "react-icons/io5";

interface HeaderProps {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
}

const AnchorHeader: React.FC<HeaderProps> = ({ level, children, ...props }) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements; // Dynamically choose the header tag
  const id = slugify(children?.toString() ?? '', { lower: true });

  const getMargins = (level: number) => {
    switch (level) {
      case 1:
        return { marginTop: '3.0rem', marginBottom: '2.0rem' };
      case 2:
        return { marginTop: '2.5rem', marginBottom: '1.5rem' };
      case 3:
        return { marginTop: '2.0rem', marginBottom: '1.0rem' };
      case 4:
        return { marginTop: '1.5rem', marginBottom: '0.8rem' };
      case 5:
        return { marginTop: '1.2rem', marginBottom: '0.6rem' };
      case 6:
        return { marginTop: '1.0rem', marginBottom: '0.5rem' };
      default:
        return {};
    }
  };

  const margins = getMargins(level);

  return (
    <Tag id={id} className="anchor-header" style={margins} {...props}>
      <a href={`#${id}`}>
        <span className="hash"><IoLink /></span>
      </a>
      {children}
    </Tag>
  );
};

export default AnchorHeader;
