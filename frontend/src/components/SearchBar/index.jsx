import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

function SearchBar() {
  const [searchText, setSearchText] = useState('');
  const [, setUrlParams] = useSearchParams();

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      if (searchText) {
        setUrlParams({ section: searchText });
      } else {
        setUrlParams({});
      }
    }
  };

  return (
    <>
      <input
        type="text"
        className="py-2 px-3 rounded"
        placeholder="Search for section..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        onKeyDown={handleKeyDown}
      />
    </>
  );
}

export default SearchBar;
