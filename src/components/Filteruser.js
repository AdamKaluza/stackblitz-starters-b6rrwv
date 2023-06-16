import React, { useContext } from 'react';
import { FilterContext } from '../contexts/FilterContext';


const FilterUser = () => {
  const [filter, setFilter] = useContext(FilterContext);

  return (
      <input 
          type="text" 
          placeholder="Filtruj użytkowników"
          value={filter}
          onChange={e => setFilter(e.target.value)} 
      />
  );
};

export default FilterUser;