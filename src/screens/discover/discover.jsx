import Header from '../components/header'
import Ads from '../components/ads'
import '../discover/discover.css'
import ProductGrid from '../components/product_grid'
import CategoryRow from '../components/categorylist'
import MobileCategory  from '../components/mobile_category'

function Discover() {

  return (
    <>
      <div className="top-0 left-0 w-full p-0.5 md:p-3">
        <Header />
        <div className='p-2.5'>
          <div className='sm:hidden'>
            <MobileCategory />
          </div>
          <div className='hidden sm:flex'>
            <CategoryRow></CategoryRow>
          </div>
          <br />
          <div className='flex flex-row text-start justify-between items-center'>
            <h4 className=' text-2xl font-medium'>Special Offers</h4>
            <h4 className=' text-end'>See all</h4>
          </div>
          <br />
          <Ads></Ads>
          <br />
          <div>
            <h1 className=" text-2xl font-medium text-start">All</h1>
            <br />
              <ProductGrid />
            </div>
        </div>
      </div>
    </>
  )
}

export default Discover

