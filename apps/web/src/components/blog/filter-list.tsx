import React from 'react';
import Link from 'next/link';

interface FilterListProps {
  selectedTag: string;
  blogTags: string[];
}

const FilterList: React.FC<FilterListProps> = ({ 
  selectedTag,
  blogTags
}) => {

  return (
    <ul className="filter-list">
      {blogTags.map((tag, index) => (
        <li className="filter-item" key={index}>
          <Link
            href={`/blog?tag=${encodeURIComponent(tag || '')}`}
            className={`filter-btn ${selectedTag === tag ? 'active' : ''}`}
          >
            {tag}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default FilterList;