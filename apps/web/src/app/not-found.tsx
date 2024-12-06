'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import PageContent from '@/components/page-content';
import MarkdownRenderer from '@/components/markdown/markdown-renderer';
import config from '@/config';


const { title } = config;

const errorMessages = [
  'This page doesn\'t exist.',
  'If this is a mistake, [let us know](https://github.com/1chooo/1chooo.com/issues/new), and we will try to fix it!',
];

const NotFound: React.FC = () => {
  const pathname = usePathname();

  const renderErrorMessage = () =>
    errorMessages.map((item, index) => (
      <MarkdownRenderer key={`${item}-${index}`} content={item} />
    ));

  return (
    <PageContent
      documentTitle='Not Found'
      title={title}
      header="404 Not Found"
      page="404"
      pathName={pathname}
    >
      <section className="text-light-gray leading-relaxed">
        {renderErrorMessage()}
      </section>
    </PageContent>
  )
}

export default NotFound
