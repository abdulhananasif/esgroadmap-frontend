import {Select} from 'antd';
import {PaginationProps} from './type';

const Pagination = ({
  handlePageChange,
  currentPage,
  pageCount,
}: PaginationProps) => {
  return (
    <div className="flex justify-center gap-2 py-1 items-center bg-white">
      <div className="flex items-center gap-2">
        <button
          className="p-2 hover:bg-gray-100 rounded-full cursor-pointer"
          onClick={() => handlePageChange(1)}
          disabled={currentPage === 1 || pageCount === 0}
        >
          <img src="/icons/angle-left.svg" className="h-8 w-8" />
        </button>
        <button
          className="p-2 hover:bg-gray-100 rounded-full cursor-pointer"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1 || pageCount === 0}
        >
          <img src="/icons/angle-prev.svg" className="h-7 w-7" />
        </button>
        <div className="hidden sm:flex gap-1">
          {Array.from({length: pageCount}, (_, i) => (
            <button
              key={i}
              className={`px-4 py-2 hover:bg-gray-100 rounded-full cursor-pointer text-xl ${
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
          className="p-2 hover:bg-gray-100 rounded-full cursor-pointer"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === pageCount}
        >
          <img src="/icons/angle-next.svg" className="h-8 w-8" />
        </button>
        <button
          className="p-2 hover:bg-gray-100 rounded-full cursor-pointer"
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
              className="px-4 py-2 rounded text-gray-700 appearance-none"
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
      <div className="hidden sm:block text-lg text-gray-500 mt-0">
        ({currentPage} of {pageCount})
      </div>
    </div>
  );
};

export default Pagination;
