import {useState} from 'react';
import DashboardLayout from '../dashboardlayout';
import {rowData, tableHeaders} from './constant';
import SearchInput from '../../components/searchInput';
import DropdownButton from '../../components/dropdownButton';
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
          <div className="flex items-center justify-between p-3  rounded-t-lg">
            <div className="flex gap-6">
              <DropdownButton image={'/icons/download.svg'} />
              <DropdownButton image={'/icons/filter.svg'} />
            </div>
            <SearchInput setSearch={setSearch} search={search} />
          </div>

          <div className="overflow-auto shadow">
            <table className="min-w-full text-sm table-auto border border-gray-200  ">
              <thead className="bg-gray-100">
                <tr>
                  {tableHeaders.map((header, idx) => (
                    <th
                      key={idx}
                      className="px-4 py-4 font-semibold text-left whitespace-nowrap"
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {currentData.map((row) => (
                  <tr key={row.id} className="border-t">
                    <td className="px-4 py-2">{row.id}</td>
                    <td className="px-4 py-2">{row.company}</td>
                    <td className="px-4 py-2">
                      <a
                        href={row.docURL}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src="/icons/share.svg"
                          alt="share"
                          className="h-7 w-7"
                        />
                      </a>
                    </td>
                    <td className="px-4 py-2 truncate max-w-xs">
                      • {row.targetSentence}
                    </td>
                    <td className="px-4 py-2 whitespace-nowrap">
                      [{row.targetYears.join(', ')}]
                    </td>
                    <td className="px-4 py-2">{row.country}</td>
                    <td className="px-4 py-2">{row.sectorCode}</td>
                    <td className="px-4 py-2">{row.sectorName}</td>
                    <td className="px-4 py-2">{row.uploadDate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex justify-between items-center mt-4">
            <div className="text-sm">{`(${currentPage} of ${pageCount})`}</div>
            <div className="flex items-center gap-2">
              <button
                className="px-2 py-1 border rounded disabled:opacity-50"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
              >
                &laquo;
              </button>
              {Array.from({length: pageCount}, (_, i) => (
                <button
                  key={i}
                  className={`px-3 py-1 border rounded ${
                    currentPage === i + 1 ? 'bg-blue-500 text-white' : ''
                  }`}
                  onClick={() => handlePageChange(i + 1)}
                >
                  {i + 1}
                </button>
              )).slice(0, 6)}
              <button
                className="px-2 py-1 border rounded disabled:opacity-50"
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === pageCount}
              >
                &raquo;
              </button>
              <select
                className="border px-2 py-1 rounded"
                value={rowsPerPage}
                onChange={() => {}}
              >
                <option value="10">10</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default CarbonReduction;
