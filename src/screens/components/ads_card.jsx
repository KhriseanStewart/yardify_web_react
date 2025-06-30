import React from 'react'

export default function AdsCard(props) {
  return (
    <div className='ad-card flex flex-row p-4 rounded-xl bg-white max-w-lg w-full'>
        <div className='flex flex-col text-start max-w-3xs w-full gap-5 justify-center'>
            <h2 className='font-semibold text-black  text-3xl sm:text-5xl mb-2'>{props.name}</h2>
            <h2 className='font-medium text-black'>{props.timer}</h2>
            <p className='text-black' >{props.describe}</p>
        </div>
        <div className='w-full'>
            <img className='max-w-3xs w-full rounded-2xl' src={props.image} alt="" />
        </div>
    </div>
  )
}
