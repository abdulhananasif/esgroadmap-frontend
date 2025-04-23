import {TableRowType} from '../../pages/carbonReduction/type';

export interface TableWithOptionsProps {
  search: string;
  setSearch: (value: string) => void;
  currentData: TableRowType[];
  tableHeaders: string[];
  handlePageChange: (value: number) => void;
  currentPage: number;
  pageCount: number;
}
