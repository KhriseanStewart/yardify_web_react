import ProductCard from './product_item'
// import products from './productlist'
import React, { useEffect, useState } from 'react';
import { collection, getDocs, onSnapshot  } from 'firebase/firestore';
import { db } from '../../firebase/firebase';

function ProductGrid() {
    const [products, setItems] = useState([]);

    useEffect(() => {
  const fetchItems = onSnapshot(collection(db, 'products'), (snapshot) => {
    const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    setItems(data);
  });
  return () => fetchItems();
}, []);

    
  return (
    <div className=''>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 xl:max-w-7xl lg:max-w-8xl gap-3 w-full justify-center items-center">
            {products.length === 0 ? (
                <div className="pt-7  col-span-full text-center text-black text-4xl">No items available</div>
            ): (
                products.map(product => (
                    <ProductCard key={product.id} product={product}/>
                ))
            )}
        </div>
    </div>
  )
}

export default ProductGrid