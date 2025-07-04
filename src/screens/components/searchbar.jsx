import { useState } from 'react';
import { useEffect } from 'react';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '../../firebase/firebase';

function SearchBar({onsearchResults}) {

    
  const [products, setItems] = useState([]);
     useEffect(() => {
  const fetchItems = onSnapshot(collection(db, 'products'), (snapshot) => {
      const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setItems(data);
    });
    return () => fetchItems();
  }, []);

  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    // You can also filter products based on searchTerm here if needed
    const filteredProducts = products.filter(product => 
      product.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    console.log(filteredProducts);
    onsearchResults(filteredProducts); // Pass filtered results to parent component
  };

  const [filteredProducts, setFilteredProducts] = useState([]);
  const performSearch = () => {
  const results = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  setFilteredProducts(results);
}

const handleKeyDown = (e) => {
  if (e.key === 'Enter') {
    performSearch();
  }
};

  return (
<>
    <div className="flex max-w-3xl">
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleChange}//handleChange}
        onKeyDown={handleKeyDown}  //handleKeyDown
        //   
        className="border border-gray-300 rounded-2xl px-6 py-2 min-w-12 max-w-3xl w-full bg-white text-black lg:min-w-96 "
      />
      <button
        onClick={performSearch} //performSearch}
        className="ml-2 bg-blue-500 text-white px-4 py-2 rounded"
      >
        Search
      </button>
    </div>
</>
  );
}

export default SearchBar;