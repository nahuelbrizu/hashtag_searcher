import React from 'react';
import { useSearch } from '../context/SearchContext';

const SearchComponent = () => {
  const { searchQuery, setSearchQuery } = useSearch();

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div>
      <input type="text" placeholder="Buscar..." value={searchQuery} onChange={handleSearch} />
    </div>
  );
};

export default SearchComponent;
