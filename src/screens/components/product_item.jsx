import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function ProductCard({ product }) {
    
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    navigate(`/productpage/${product.id}`);
  };

  return (
    <div onClick={handleClick} className="product-card rounded-xl shadow hover:shadow-lg transition bg-white max-w-3xs w-full">
        <div className=''>
            <img className=' w-full h-64 rounded-t-xl object-cover' src={product.imageUrl} alt="" />
        </div> 
        <div className=' rounded-b-xl flex flex-col pb-1.5 pt-1.5 pl-3 pr-3 text-start'>
            <h2 className="font-light text-black">{product.name}</h2>
            <h4 className="text-black text-xl font-semibold">{product.price}</h4>
            <p className="text-gray-600 text-sm">{product.location}</p>
        </div>
    </div>
  )
}
