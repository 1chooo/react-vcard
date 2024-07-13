// src/components/Header.js
import React from 'react';

const Header = ({ title }: { title: string }) => (
  <header>
    <h2 className="h2 article-title">
      {title}
    </h2>
  </header>
);

export default Header;
