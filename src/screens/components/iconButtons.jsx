import { FaHeart, FaRegComment, FaUser } from 'react-icons/fa'
function IconButton(props) {

  return (
    <div className="flex" onClick={() => console.log('Hello world')}>
        <div className='flex items-center'>
            <div className='bg-white p-2.5 rounded-3xl'>
                <FaHeart color='black' size={26}></FaHeart>
            </div>
            <div className='bg-white p-2.5 rounded-3xl'>
                <FaRegComment color='black' size={26} />
            </div>
        </div>
        <div className='hidden sm:flex sm:mr-2'></div>
        <div className='flex items-center rounded-xl bg-white p-2 min-w-fit'>
            <div className='bg-black p-1.5 rounded-2xl'>
                <FaUser color='white' size={16}></FaUser>
            </div>
            <br />
            <h4 className='hidden sm:flex text-lg font-medium text-black'>{props.name}</h4>
        </div>
    </div>
  );
}

export default IconButton;