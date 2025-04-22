import {useState} from 'react';
import DashboardLayout from '../dashboardlayout';
import {rowData, tableHeaders} from './constant';
import SearchInput from '../../components/searchInput';
import DropdownButton from '../../components/dropdownButton';
import {Select} from 'antd';
import Table from '../../components/table';
const CarbonReduction = () => {
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
    <DashboardLayout>
      <div>
        <h1 className="text-3xl font-bold px-5 pt-5 pb-4 themetext">
          Carbon Reduction
        </h1>
        <div className="border-3 border-gray-200 tablebg rounded-lg mx-3">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-6 p-3 rounded-t-lg">
            <div className="flex gap-4 sm:gap-6">
              <DropdownButton image={'/icons/download.svg'} />
              <DropdownButton image={'/icons/filter.svg'} />
            </div>
            <SearchInput setSearch={setSearch} search={search} />
          </div>

          <Table currentData={currentData} tableHeaders={tableHeaders} />

          <div className="flex justify-center gap-2 py-1 items-center bg-white">
            <div className="flex items-center gap-2">
              <button
                className="p-2 hover:bg-gray-100 rounded-full"
                onClick={() => handlePageChange(1)}
                disabled={currentPage === 1}
              >
                <img src="/icons/angle-left.svg" className="h-8 w-8" />
              </button>
              <button
                className="p-2 hover:bg-gray-100 rounded-full"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
              >
                <img src="/icons/angle-prev.svg" className="h-8 w-8" />
              </button>
              <div className="hidden sm:flex gap-1">
                {Array.from({length: pageCount}, (_, i) => (
                  <button
                    key={i}
                    className={`px-4 py-2 rounded-full text-lg ${
                      currentPage === i + 1
                        ? 'bg-cyan-50 text-cyan-700'
                        : 'text-gray-500'
                    }`}
                    onClick={() => handlePageChange(i + 1)}
                  >
                    {i + 1}
                  </button>
                )).slice(0, 6)}
              </div>
              <button
                className="p-2 hover:bg-gray-100 rounded-full"
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === pageCount}
              >
                <img src="/icons/angle-next.svg" className="h-8 w-8" />
              </button>
              <button
                className="p-2 hover:bg-gray-100 rounded-full"
                onClick={() => handlePageChange(pageCount)}
                disabled={currentPage === pageCount}
              >
                <img src="/icons/angle-right.svg" className="h-8 w-8" />
              </button>
              <div>
                <div className="hidden sm:flex gap-1">
                  <Select
                    value={currentPage}
                    onChange={(value) => handlePageChange(Number(value))}
                    className="px-4 py-2 rounded text-lg text-gray-700"
                  >
                    {Array.from({length: pageCount}, (_, i) => (
                      <option key={i} value={i + 1}>
                        {i + 1}
                      </option>
                    ))}
                  </Select>
                </div>
              </div>
            </div>
            <div className="hidden sm:block text-sm text-gray-500 mt-0">
              ({currentPage} of {pageCount})
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default CarbonReduction;
