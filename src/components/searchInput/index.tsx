import {FunctionComponent} from 'react';
import {SearchInputProps} from './type';

const SearchInput: FunctionComponent<SearchInputProps> = ({
  search,
  setSearch,
}) => {
  return (
    <div className="border border-gray-200 px-2 py-2 rounded-md w-64 flex items-center gap-2">
      <img src="/icons/search.svg" alt="search" className="h-5 w-5" />
      <input
        type="text"
        placeholder="Keyword search"
        className="placeholder:font-bold text-sm outline-none w-full"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchInput;
