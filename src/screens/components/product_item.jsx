import logo from '../../assets/logo.jpg'

export default function ProductCard({ product }) {
  return (
    <div className="product-card rounded-xl shadow hover:shadow-lg transition bg-white max-w-3xs w-full">
        <div>
            <img className=' w-full rounded-t-xl' src={logo} alt="" />
        </div>
        <div className=' rounded-b-xl flex flex-col pb-1.5 pt-1.5'>
            <p className="font-light text-black">{product.p_name}</p>
            <h2 className="text-black text-xl font-semibold">{product.price}</h2>
        </div>
    </div>
  )
}
