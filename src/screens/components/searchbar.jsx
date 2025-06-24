import { useState } from 'react';

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = () => {
    // You can perform actions here with searchTerm
    alert(`Searching for: ${searchTerm}`);
  };

  return (
    <div className="flex items-">
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleChange}
        className="border border-gray-300 rounded-2xl px-6 py-2 min-w-2.5 max-w-4xl w-full bg-white text-black"
      />
      {/* <button
        onClick={handleSearch}
        className="ml-2 bg-blue-500 text-white px-4 py-2 rounded"
      >
        Search
      </button> */}
    </div>
  );
}

export default SearchBar;