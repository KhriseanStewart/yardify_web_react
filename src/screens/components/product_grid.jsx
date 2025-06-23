import React from 'react'
import ProductCard from './product_item'
import products from './productlist'

function ProductGrid() {
  return (
    <div className='flex flex-row justify-center'>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 p-4 xl:max-w-7xl lg:max-w-8xl w-full justify-center items-center ">
        {products.map((product) => (
            <ProductCard key={product.id} product={product} />
            ))}
        </div>
    </div>
  )
}

export default ProductGrid