import React from 'react'
import logo from '../../assets/logo.jpg'

export default function AdsCard() {
  return (
    <div className='flex flex-row p-4 rounded-2xl bg-white max-w-2xl w-full'>
        <div className='flex flex-col text-start max-w-2xs w-full gap-5 justify-center'>
            <h2 className='font-bold text-6xl'>55%</h2>
            <h2 className='font-semibold'>Two Week Discount</h2>
            <p>Discount on furniture and Appliances only at Pricemart Stores</p>
        </div>
        <div>
            <img className='max-w-2xs w-full rounded-2xl' src={logo} alt="" />
        </div>
    </div>
  )
}
