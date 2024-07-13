import React from 'react';

interface IPaginationProps {
  totalPages: number;
  currentPage: number;
  handlePageChange: (pageNumber: number) => void;
}

const Pagination: React.FC<IPaginationProps> = (
  { totalPages, currentPage, handlePageChange }
) => {
  const handlePageClick = (pageNumber: number) => {
    handlePageChange(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPageButtons = () => {
    return [...Array(totalPages)].map((_, index) => {
      const pageNumber = index + 1;
      return (
        <button
          key={pageNumber}
          className={`pagination-btn ${currentPage === pageNumber ? 'active' : ''}`}
          onClick={() => handlePageClick(pageNumber)}
        >
          {pageNumber}
        </button>
      );
    });
  };

  return (
    <div className="pagination">
      {renderPageButtons()}
    </div>
  );
};

export default Pagination;
