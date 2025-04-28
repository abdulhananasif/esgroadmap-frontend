import TableHeader from '../tableHeader';
import Table from '../table';
import Pagination from '../pagination';
import {TableWithOptionsProps} from './type';
import {useState} from 'react';

const TableWithOptions = ({
  data,
  dataKey,
  currentPage,
  setCurrentPage,
}: TableWithOptionsProps) => {
  const [search, setSearch] = useState('');

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
