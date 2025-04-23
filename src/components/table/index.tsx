import {TableProps} from '../../pages/carbonReduction/type';

const Table = ({currentData, tableHeaders}: TableProps) => {
  return (
    <div className="w-full overflow-x-auto">
      <div className="xs:h-[515px] h-full overflow-y-auto">
        <table className="min-w-[768px] sm:min-w-full table-auto border-collapse">
          <thead className="bg-gray-100 text-xs sm:text-sm sticky top-0 z-10">
            <tr>
              {tableHeaders.map((header: string, idx: number) => (
                <th
                  key={idx}
                  className="font-semibold border border-gray-200 bg-white text-gray-600 px-2 py-2"
                >
                  <div className="flex items-center justify-between w-full">
                    <span className="break-words whitespace-normal block text-center mx-auto text-xs sm:text-sm w-full">
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
                        className="w-3.5 h-3.5 ml-1 sm:w-4 sm:h-4"
                      />
                    )}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {currentData.map((row, index) => {
              const rowValues = [
                row.id,
                row.company,
                <a href={row.docURL} target="_blank" rel="noopener noreferrer">
                  <img
                    src="/icons/share.svg"
                    alt="Share"
                    className="h-5 w-5 mx-auto"
                  />
                </a>,
                row.targetSentence.length > 15
                  ? `${row.targetSentence.slice(0, 15)}...`
                  : row.targetSentence,
                `[${row.targetYears.join(', ')}]`,
                row.country,
                row.sectorCode,
                row.sectorName.length > 15
                  ? `${row.sectorName.slice(0, 15)}...`
                  : row.sectorName,
                row.uploadDate,
              ];

              return (
                <tr
                  key={row.id}
                  className={`${
                    index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                  } border border-gray-200 text-xs sm:text-base text-gray-600`}
                >
                  {rowValues.map((value, i) => (
                    <td
                      key={i}
                      className="px-2 sm:px-4 py-2 sm:py-5 text-center border border-gray-200 min-w-[120px] whitespace-nowrap"
                    >
                      {value}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
