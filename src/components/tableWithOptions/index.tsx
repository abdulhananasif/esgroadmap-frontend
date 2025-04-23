import TableHeader from '../tableHeader';
import Table from '../table';
import Pagination from '../pagination';
import {useState} from 'react';
import {rowData, tableHeaders} from '../../pages/carbonReduction/constant';

const TableWithOptions = () => {
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;

  const filteredData = rowData.filter((item) =>
    item.targetSentence.toLowerCase().includes(search.toLowerCase())
  );

  const pageCount = Math.ceil(filteredData.length / rowsPerPage);
  const currentData = filteredData.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  return (
    <div className="border-3 border-gray-200 tablebg rounded-lg mx-3">
      <TableHeader search={search} setSearch={setSearch} />
      <Table currentData={currentData} tableHeaders={tableHeaders} />
      <Pagination
        handlePageChange={handlePageChange}
        currentPage={currentPage}
        pageCount={pageCount}
      />
    </div>
  );
};

export default TableWithOptions;
