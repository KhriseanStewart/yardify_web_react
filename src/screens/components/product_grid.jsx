import ProductCard from './product_item'
import React, { useEffect, useState } from 'react';
import { collection, onSnapshot  } from 'firebase/firestore';
import { db } from '../../firebase/firebase';

function ProductGrid() {

const categories = [
  "All",
  "Electronics",
  "Vehicles",
  "Property for Sale",
  "Property for Rent",
  "Home Appliances",
  "Furniture",
  "Clothing & Accessories",
  "Baby & Kids",
  "Sports & Outdoors",
  "Toys & Games",
  "Garden & Outdoor",
  "Tools & Equipment",
  "Pets",
  "Hobbies & Leisure",
  "Collectibles & Art",
  "Business & Industrial",
  "Services",
  "Jobs",
  "Miscellaneous",
  "Others"
];
  
  const [products, setItems] = useState([]);
    useEffect(() => {
  const fetchItems = onSnapshot(collection(db, 'products'), (snapshot) => {
    const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    setItems(data);
  });
  return () => fetchItems();
}, []);

  const [category, setCategory] = useState(products);

  React.useEffect(() => {
  setCategory(products); // Show all products on load
}, [products]);
  
  const handleCategoryClick = (productCategory) => {
    let word=productCategory;
    if (!word){
      word = 'All'
    }
    console.log("Word is", word);
    
    try{

      if(word === "All"){
        setCategory(products)
      }
      else {
        const filtered = products.filter(item=>item.category === word);
        setCategory(filtered)
      }
    } catch (e){
      // TODO: REMOVE BEFORE LAUNCH
      console.log(e);
    }
  }
  

    
  return (
    <div className=''>
      <div className='flex whitespace-nowrap pb-4 overflow-auto'>
        {categories.map((category, index) => (
          <button key={index} onClick={() => handleCategoryClick(category)}
              className={`mr-4 cursor-pointer rounded  text-black transition bg-transparent underline `}>{category}</button>
        ))}
      </div>
      
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-6 gap-3 w-full justify-center items-center">
          {category.length === 0 ?(
            <div className="pt-7  col-span-full text-center text-black text-4xl">No items available</div>
          ): (
            category.map((item) => (
              <div key={item.id}>
                 <ProductCard key={item.id} product={item}/>
              </div>
            ))
          )}
        </div>
    </div>
  )
}

export default ProductGrid