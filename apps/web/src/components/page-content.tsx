import React, { useEffect } from 'react';
import PageHeader from '@/components/page-header';
import config from '@/config';



const PageContent: React.FC<{
  documentTitle: string;
  title: string;
  header: string;
  children: React.ReactNode;
  page?: string;
  pathName?: string;
}> = ({
  documentTitle,
  title,
  header,
  children,
  page,
  pathName
}) => {

  const isRootPage = pathName === '/' && page === 'about';

  if (isRootPage) {
    documentTitle = title;
  } else {
    documentTitle = `${documentTitle} | ${title}`;
  }

  useEffect(() => {
    document.title = documentTitle;
  }, [documentTitle]);

  return (
    <article data-page={isRootPage ? '' : page}>
      <PageHeader header={header} />
      {children}
    </article>
  );
};

export default PageContent;
