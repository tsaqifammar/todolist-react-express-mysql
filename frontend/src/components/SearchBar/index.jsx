import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

function SearchBar() {
  const [urlParams, setUrlParams] = useSearchParams();
  const [searchText, setSearchText] = useState(urlParams.get('section') || '');

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      if (searchText) {
        const newUrlParams = urlParams;
        newUrlParams.set('section', searchText);
        setUrlParams(newUrlParams);
      } else {
        if (urlParams.has('section')) {
          const newUrlParams = urlParams;
          newUrlParams.delete('section');
          setUrlParams(newUrlParams);
        }
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
