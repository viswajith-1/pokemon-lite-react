import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchBar = ({ onSearch }) => {
  const [term, setTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(term);
  };

  return (
    <form onSubmit={handleSubmit} className="relative w-full md:w-1/3">
      <input 
        type="text" 
        placeholder="Search Pokemon..." 
        className="w-full p-2 pl-10 rounded-lg text-gray-800 focus:outline-none"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      />
      <FaSearch className="absolute left-3 top-3 text-gray-500" />
    </form>
  );
};
export default SearchBar;