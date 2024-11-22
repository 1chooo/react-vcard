import React from 'react';

interface BlockQuoteProps {
  children: React.ReactNode;
}

const BlockQuote: React.FC<BlockQuoteProps> = ({ children }) => (
  <blockquote style={{ borderLeft: '4px solid #ccc', paddingLeft: '1em', color: '#666' }}>
    {children}
  </blockquote>
);

export default BlockQuote;
