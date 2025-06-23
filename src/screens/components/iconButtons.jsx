import { FaHeart, FaRegComment, FaUser } from 'react-icons/fa'
function IconButton(props) {

  return (
    <div className="flex items-center rounded-md" onClick={() => console.log('Hello world')}>
        <div className='flex items-center rounded-md'>
            <FaHeart color='red' size={30}></FaHeart>
            <div className='mr-2' ></div>
            <FaRegComment color='black' size={30} />
        </div>
        <div className='mr-3'></div>
        <div className='flex items-center rounded-xl bg-white p-2'>
            <FaUser color='black' size={30}></FaUser>
            <br />
            <h4 className='text-lg font-medium'>{props.name}</h4>
        </div>
    </div>
  );
}

export default IconButton;