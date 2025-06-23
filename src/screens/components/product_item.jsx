import logo from '../../assets/logo.jpg'

export default function ProductCard({ product }) {
  return (
    <div className="border rounded-xl shadow hover:shadow-lg transition bg-white max-w-3xs w-full">
        <div>
            <img className=' w-full rounded-t-xl' src={logo} alt="" />
        </div>
        <div className=''>
            <h3 className="font-bold text-lg mb-2 text-white">{product.name}</h3>
            <p className="text-white">{product.description}</p>
        </div>
    </div>
  )
}
