import TableHeader from '../tableHeader';
import Table from '../table';
import {useState} from 'react';
import {tableHeaders} from '../../pages/carbonReduction/constant';
import Pagination from '../pagination';

const TableWithOptions = ({carbonData}: {carbonData: any}) => {
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState<number>(1);
  return (
    <div className="border-3 bordergray tablebg rounded-lg mx-3">
      <TableHeader search={search} setSearch={setSearch} />
      <div className="overflow-y-auto max-h-[calc(97vh-200px)]">
        <Table
          currentData={carbonData.carbonSentence}
          tableHeaders={tableHeaders}
        />
        <Pagination
          totalPages={carbonData.totalPages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default TableWithOptions;
