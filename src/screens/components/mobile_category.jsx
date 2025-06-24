import React from 'react'
import { FaFilter } from 'react-icons/fa'

export default function mobileCategory() {
  return (
    <div className='max-w-screen flex flex-row justify-between items-center'>
        <div className='bg-white p-2 rounded-2xl'>
            <FaFilter size={18} color='black'></FaFilter>
        </div>
        <div className='bg-white p-2 rounded-2xl'>
            <h1 className='font-semibold'>Categories</h1>
        </div>
    </div>
  )
}
