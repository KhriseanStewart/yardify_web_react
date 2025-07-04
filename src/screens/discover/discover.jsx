import Header from '../components/header'
import Ads from '../components/ads'
import '../discover/discover.css'
import ProductGrid from '../components/product_grid'
import CategoryRow from '../components/categorylist'
import MobileCategory  from '../components/mobile_category'
import { getAuth } from 'firebase/auth'

const auth = getAuth()

function Discover() {
  const user = auth.currentUser;

  return (
    <>
      <div className="top-0 left-0 w-full p-0.5 md:pl-10 md:pr-10">
        <Header uid={user.uid} />
        <div className='p-2.5'>
          <br />
          <Ads></Ads>
          <br />
          <div>
            <br />
              <ProductGrid />
            </div>
        </div>
      </div>
    </>
  )
}

export default Discover

