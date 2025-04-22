import {TableProps} from '../../pages/carbonReduction/type';

const Table = ({currentData, tableHeaders}: TableProps) => {
  return (
    <div className="overflow-x-auto">
      <div className="h-[405px] sm:h-[525px] overflow-y-auto">
        <table className="min-w-full text-sm table-auto">
          <thead className="bg-gray-100 sticky top-0 z-10">
            <tr>
              {tableHeaders.map((header: string, idx: number) => (
                <th
                  key={idx}
                  className="font-bold text-xs border border-gray-200 text-gray-600 px-2 py-3 text-center bg-gray-100"
                >
                  <div className="flex items-center justify-between w-full">
                    <span className="break-words whitespace-normal text-center block mx-auto w-full">
                      {header}
                    </span>
                    {[
                      'ID',
                      'Company',
                      'Target Sentence',
                      'Target Year(s)',
                      'Country',
                      'sector code #1',
                      'sector name #1 (NAICS)',
                      'Upload Date',
                    ].includes(header) && (
                      <img
                        src="/icons/filters.svg"
                        alt="Filter icon"
                        className="w-3 h-3 ml-1"
                      />
                    )}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {currentData.map((row, index) => (
              <tr
                key={row.id}
                className={`${
                  index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                } border border-gray-200 text-gray-500`}
              >
                <td className="px-2 py-1.5 border border-gray-200 text-center min-w-[100px]">
                  {row.id}
                </td>
                <td className="px-2 py-1.5 border border-gray-200 text-left min-w-[100px]">
                  {row.company}
                </td>
                <td className="px-2 py-3 flex items-center justify-center min-w-[100px]">
                  <a
                    href={row.docURL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="/icons/share.svg"
                      alt="Share"
                      className="h-6 w-6"
                    />
                  </a>
                </td>
                <td className="px-4 py-1.5 border border-gray-200 truncate text-left min-w-[150px]">
                  {row.targetSentence.length > 15
                    ? `${row.targetSentence.slice(0, 15)}...`
                    : row.targetSentence}
                </td>
                <td className="px-4 py-1.5 border border-gray-200 whitespace-nowrap text-center min-w-[120px]">
                  [{row.targetYears.join(', ')}]
                </td>
                <td className="px-4 py-1.5 border border-gray-200 text-center min-w-[100px]">
                  {row.country}
                </td>
                <td className="px-4 py-1.5 border border-gray-200 text-center min-w-[100px]">
                  {row.sectorCode}
                </td>
                <td className="px-4 py-1.5 border border-gray-200 text-left min-w-[150px]">
                  {row.sectorName.length > 15
                    ? `${row.sectorName.slice(0, 15)}...`
                    : row.sectorName}
                </td>
                <td className="px-4 py-1.5 border border-gray-200 text-center min-w-[120px]">
                  {row.uploadDate}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
