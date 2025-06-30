import ProductCard from './product_item'
// import products from './productlist'
import React, { useEffect, useState } from 'react';
import { collection, onSnapshot  } from 'firebase/firestore';
import { db } from '../../firebase/firebase';
import { HiH1 } from 'react-icons/hi2';


// firebase errors

function ProductGrid() {
// const products = [
//   { id: 1, category: 'Electronics', name: 'Electronics Product 1', description: '$15,000 JMD', price: 15000, image: '{logo}/product1.png' },
//   { id: 2, category: 'Vehicles', name: 'Vehicles Product 2', description: 'Premium quality item', price: 23000, image: '{logo}/product2.png' },
//   { id: 3, category: 'Property for Sale', name: 'Property for Sale Product 3', description: 'Limited edition offer', price: 18000, image: '{logo}/product3.png' },
//   { id: 4, category: 'Home Appliances', name: 'Home Appliances Product 4', description: 'Best seller product', price: 25000, image: '{logo}/product4.png' },
//   { id: 5, category: 'Clothing & Accessories', name: 'Clothing & Accessories Product 5', description: 'Exclusive deal', price: 20000, image: '{logo}/product5.png' },
//   { id: 6, category: 'Toys & Games', name: 'Toys & Games Product 6', description: 'New arrival', price: 22000, image: '{logo}/product6.png' },
//   { id: 7, category: 'Garden & Outdoor', name: 'Garden & Outdoor Product 7', description: 'New arrival', price: 22000, image: '{logo}/product7.png' },
// ]

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