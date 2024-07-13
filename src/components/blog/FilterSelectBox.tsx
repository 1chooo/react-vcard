import React from 'react';
import { MdExpandMore } from 'react-icons/md';
import { blogTags } from '../../config/BlogData';
import { handleBlogPaginationFilter } from '../../utils/filterUtils';

interface FilterSelectBoxProps {
  selectedValue: string;
  setSelectedValue: React.Dispatch<React.SetStateAction<string>>;
  isSelectActive: boolean;
  setIsSelectActive: React.Dispatch<React.SetStateAction<boolean>>;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

const FilterSelectBox: React.FC<FilterSelectBoxProps> = ({
  selectedValue,
  setSelectedValue,
  isSelectActive,
  setIsSelectActive,
  setCurrentPage
}) => {

  return (
    <div className="filter-select-box">
      <button
        className={`filter-select ${isSelectActive ? 'active' : ''}`}
        onClick={() => setIsSelectActive(!isSelectActive)}
      >
        <div className="select-value">
          {selectedValue || 'Select category'}
        </div>
        <div className="select-icon">
          <MdExpandMore />
        </div>
      </button>
      {isSelectActive && (
        <ul className="select-list">
          {blogTags.map((tag: string) => (
            <li className="select-item" key={tag}>
              <button onClick={() => handleBlogPaginationFilter(tag, setSelectedValue, setCurrentPage)}>
                {tag}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FilterSelectBox;
