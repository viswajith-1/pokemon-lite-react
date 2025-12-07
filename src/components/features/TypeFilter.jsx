import { useEffect, useState } from 'react';
import {  getPokemonTypes } from '../../api/pokeApi';

const TypeFilter = ({ selectedType, onSelectType }) => {
  const [types, setTypes] = useState([]);

  useEffect(() => {
    getPokemonTypes().then(data => setTypes(data.results));
  }, []);

  return (
    <select 
      className="p-2 border rounded-lg bg-white shadow-sm capitalize"
      value={selectedType}
      onChange={(e) => onSelectType(e.target.value)}
    >
      <option value="">All Types</option>
      {types.map(t => (
        <option key={t.name} value={t.name}>{t.name}</option>
      ))}
    </select>
  );
};
export default TypeFilter;
