import React from 'react'

const ProjectCard = ({ type, name, stack }) => {
   
  return (
    <div className='rounded bg-gray-300 w-[350px] h-[180px] cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out shadow-lg'>
        <div className='bg-gray-500 w-full h-[30px] rounded-t flex items-center justify-center'>
            <span className='text-[14px] text-white font-poppins'>{type}</span>
        </div>
        <div className='flex justify-center items-center h-[35px] w-full mt-5'>
            <span className='text-[16px] text-slate-600 font-poppins font-semibold antialiased'>{ name }</span>
        </div>
        <div className='text-center w-full px-2'>
            <span className='text-[12px] text-slate-500 font-poppins italic'>{ stack }</span>
        </div>
    </div>
  )
}

export default ProjectCard