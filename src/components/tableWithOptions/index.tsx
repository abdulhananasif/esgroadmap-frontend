import TableHeader from '../tableHeader';
import Table from '../table';
import {useState} from 'react';
import Pagination from '../pagination';
import {TableWithOptionsProps} from './type';

const TableWithOptions = ({data, dataKey}: TableWithOptionsProps) => {
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState<number>(1);
  return data ? (
    <div className="border-3 bordergray tablebg rounded-lg mx-3">
      <TableHeader search={search} setSearch={setSearch} />
      <div className="overflow-y-auto max-h-[calc(97vh-200px)]">
        <Table data={data[dataKey]} />
      </div>
      <Pagination
        totalPages={data.totalPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  ) : (
    <p>No data</p>
  );
};

export default TableWithOptions;
