import React from 'react'

const SkillsCard = ({ type, skills }) => {
  return (
    <div className='rounded w-[250px] h-[300px] shadow-lg bg-gray-300'>
        <div className='w-full h-[45px] bg-gray-500 rounded-t'>
            <div className='h-full flex justify-center items-center'>
                <span className='text-[13px] text-white font-poppins'>{ type }</span>
            </div>
            <div>
                <ul className='list-disc px-10 py-4 text-[14px] text-slate-600 font-poppins'>
                    {skills.map((items, index) => {
                        return(
                            <li key={index}>{items}</li>
                        )
                    })}
                </ul>
            </div>
        </div>
    </div>
  )
}

export default SkillsCard