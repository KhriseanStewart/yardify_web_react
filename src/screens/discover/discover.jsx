import Header from '../components/header'
import Ads from '../components/ads'
import '../discover/discover.css'
import ProductGrid from '../components/product_grid'
import CategoryRow from '../components/categorylist'

function Discover() {

  return (
    <>
      <div className="top-0 left-0 w-full p-0">
        <Header />
        <br />
        <CategoryRow></CategoryRow>
        <br />
        <div className='flex flex-row text-start justify-between items-center'>
          <h4 className='pl-2.5 text-2xl font-medium'>Special Offers</h4>
          <h4 className='pr-4.5 text-end'>See all</h4>
        </div>
        <Ads></Ads>
        <div>
      <h1 className="text-2xl font-bold mb-4 text-center">Product Grid</h1>
      <ProductGrid />
    </div>
      </div>
    </>
  )
}

export default Discover

