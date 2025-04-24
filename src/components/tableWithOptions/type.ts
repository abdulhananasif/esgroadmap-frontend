export interface TableWithOptionsProps {
  search: string;
  setSearch: (value: string) => void;
  currentData: any[];
  tableHeaders: string[];
  handlePageChange: (value: number) => void;
  currentPage: number;
  pageCount: number;
}
