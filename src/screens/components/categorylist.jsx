import React from 'react';

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
    <div style={{
      display: 'flex',
      flexWrap: 'nowrap',
      overflowX: 'auto',
      padding: '10px',
    }}>
      {categories.map((category, index) => (
        <div className='sm:w-7 min-w-16'
          key={index}
          style={{
            flex: '0 0 auto',
            marginRight: '10px',
            padding: '8px 10px',
            backgroundColor: 'white',
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
  );
}

export default CategoryRow;