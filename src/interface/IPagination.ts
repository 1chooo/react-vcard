// IPaginationProps.ts
export interface IPagination {
  totalPages: number;
  currentPage: number;
  handlePageChange: (pageNumber: number) => void;
}
