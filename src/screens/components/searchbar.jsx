import { useState } from 'react';
import { useEffect } from 'react';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '../../firebase/firebase';
import ProductCard from './product_item';

function SearchBar(props) {

    
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
    <div className="flex items-">
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleChange}//handleChange}
        onKeyDown={props.handleKeyDown}  //handleKeyDown
        //   
        className="border border-gray-300 rounded-2xl px-6 py-2 min-w-2.5 max-w-4xl w-full bg-white text-black"
      />
      <button
        onClick={props.performSearch} //performSearch}
        className="ml-2 bg-blue-500 text-white px-4 py-2 rounded"
      >
        Search
      </button>
    </div>
    <div>
  {filteredProducts.length > 0 ? (
    filteredProducts.map(product => (
      <ProductCard key={product.id} product={product} />
    ))
  ) : (
    <p>No results</p>
  )}
</div>
</>
  );
}

export default SearchBar;