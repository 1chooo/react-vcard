'use client';

import React from 'react';

const PageHeader = ({ header }: { header: string }) => (
  <header>
    <h2 className="h2 article-title">
      {header}
    </h2>
  </header>
);

export default PageHeader;
