import TableHeader from '../tableHeader';
import Table from '../table';
import Pagination from '../pagination';
import {TableWithOptionsProps} from './type';
import {useState} from 'react';
import {extractors} from './constants';
import {SentenceType} from '../../types/data';

const TableWithOptions = ({
  data,
  dataKey,
  currentPage,
  setCurrentPage,
}: TableWithOptionsProps) => {
  const [search, setSearch] = useState('');
  const extractor = extractors[dataKey] as (d: typeof data) => SentenceType[];
  const sentenceData = extractor(data);

  return (
    <div className="border-3 bordergray tablebg rounded-lg mx-3">
      <TableHeader search={search} setSearch={setSearch} />
      <div className="overflow-y-auto max-h-[calc(97vh-200px)]">
        <Table data={sentenceData} />
      </div>
      <Pagination
        totalPages={data.totalPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default TableWithOptions;
