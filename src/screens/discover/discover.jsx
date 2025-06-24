import Header from '../components/header'
import Ads from '../components/ads'
import '../discover/discover.css'
import ProductGrid from '../components/product_grid'
import CategoryRow from '../components/categorylist'

function Discover() {

  return (
    <>
      <div className="top-0 left-0 w-full p-1 md:p-3">
        <Header />
        <div className=''>
          <br />
          <div className='flex flex-row text-start justify-between items-center'>
            <h4 className='pl-2.5 text-2xl font-medium'>Special Offers</h4>
            <h4 className='pr-4.5 text-end'>See all</h4>
          </div>
          <br />
          <Ads></Ads>
          <br />
          <div>
            <h1 className="pl-2.5 text-2xl font-medium text-start">All</h1>
            <br />
              <ProductGrid />
            </div>
        </div>
      </div>
    </>
  )
}

export default Discover

