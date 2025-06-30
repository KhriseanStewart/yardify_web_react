import React from 'react'
import { FaUser } from 'react-icons/fa'

export default function UserProfile() {
  return (
    <div className='text-black'>
        {/* Profile Picture */}
        <div className='flex justify-center items-center'>
            <div className='bg-gray-400 rounded-full p-4 '>
                <FaUser size={70}></FaUser>
            </div>
            <br />
            <br />
            <div className='text-start '>
                <h1 className='font-bold text-2xl mb-3'>Basic Information</h1>
                <h3 className='font-normal'>Khrisean Stewart</h3>
                <h4 className='font-light'>Bybrook Park, Santa Cruz P.O</h4>
            </div>
        </div>
        <br />
        <br />
        {/* Text Fields */}
        <div className='flex justify-center items-center'>
        <form className="form max-w-screen w-full sm:max-w-3xs md:max-w-96 " onSubmit={null}>
            <p className='text-2xl'>Change Information</p>
            <label>
                <input className="input" type="email" placeholder="" value={null} onChange={(e) => { e.null}} required/>
                <span>Name</span>
            </label> 

            <label>
                <input className="input" type="password" placeholder="" value={null} onChange={(e) => {e.null}} required/>
                <span>Username</span>
            </label>

            <label>
                <input className="input" type="password" placeholder="" value={null} onChange={(e) => {e.null}} required/>
                <span>Location</span>
            </label>

            <button type="submit" className={`w-full px-4 py-2 text-white font-medium rounded-lg bg-zinc-500`}>
                Change Info...
            </button>
        </form>
        <br />
        </div>

        {/* Update Button Picture */}
        {/* Location */}
    </div>
  )
}
