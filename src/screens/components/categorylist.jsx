import React from 'react';
import { FaFilter  } from 'react-icons/fa'

function CategoryRow() {
  const categories = [
    "All",
    "Vehicles",
    "Electronics",
    "Furniture",
    "Clothing",
    "Real Estate",
    "Jobs",
    "Pets",
    "Services",
    "Toys & Games",
    "Appliances",
    "Tools",
    "Sports",
    "Art & Crafts",
    "Musical Instruments",
    "Garden",
    "Baby Items",
    "Collectibles",
    "Computers",
    "Cameras",
    "Bikes",
    "Antiques",
    "Jewelry",
    "Health & Beauty",
    "Food & Beverages",
    "Office Supplies",
    "Luggage",
    "Party Supplies",
    "Construction",
    "Industrial",
    "Other"
  ];

  return (
    <>
    <div className='flex'>
        <div style={{
            display: 'flex',
            flexWrap: 'nowrap',
            overflowX: 'auto',
            padding: '10px',
        }}>
            <div style={{
                flex: '0 0 auto',
                marginRight: '320px',
                padding: '8px 10px',
                borderRadius: '15px',
                border: '1px solid #ccc',
                minWidth: '70px',
                textAlign: 'center',
                color: 'black',
                userSelect: 'none'
            }} className='bg-white p3 flex justify-center items-center min-w-2.5 max-w-5.5' ><FaFilter size={30} color='black'></FaFilter></div>
        {categories.map((category, index) => (
            <div className='bg-white transition ease-in duration-200  hover:bg-gray-100 shadow hover:shadow-lg'
            key={index}
            style={{
                flex: '0 0 auto',
                marginRight: '10px',
                padding: '8px 10px',
                borderRadius: '15px',
                border: '1px solid #ccc',
                minWidth: '70px',
                textAlign: 'center',
                color: 'black',
                userSelect: 'none'
            }}
            >
            {category}
            </div>
        ))}
        </div>
                </div>
    </>
  );
}

export default CategoryRow;