import React from 'react'

const ExpCard = ({ image, company, position, duration }) => {
  return (
    <div className='rounded w-[300px] h-[400px] bg-gray-300 cursor-pointer shadow-lg hover:scale-105 transition-all duration-300 ease-in-out'>
        <div className='h-2/3 rounded-t p-1 overflow-hidden'>
            <img className='object-center object-cover rounded' src={image} alt='Card Images'/>
        </div>
        <div className='flex justify-center items-center h-[35px] mt-6'>
            <span className='text-[15px] text-slate-600 font-poppins font-semibold'>{company}</span>
        </div>
        <div className='flex justify-center items-center'>
            <span className='text-[14px] text-slate-600 font-poppins'>{position}</span>
        </div>
        <div className='flex justify-center items-center'>
            <span className='text-[12px] text-slate-600 font-poppins italic'>{duration}</span>
        </div>
    </div>
  )
}

export default ExpCard