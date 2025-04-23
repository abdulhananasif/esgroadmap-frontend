export interface PaginationProps {
  handlePageChange: (value: number) => void;
  currentPage: number;
  pageCount: number;
}
