import React from 'react';

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  handlePageChange: (pageNumber: number) => void;
}

const Pagination: React.FC<PaginationProps> = (
  { totalPages, currentPage, handlePageChange }
) => {
  const handlePageClick = (pageNumber: number) => {
    handlePageChange(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <div className="pagination">
      {[...Array(totalPages)].map((_, index) => (
        <button
          key={index}
          className={`pagination-btn ${currentPage === index + 1 ? 'active' : ''}`}
          onClick={() => handlePageClick(index + 1)}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
