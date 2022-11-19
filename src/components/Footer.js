import React from 'react'

const Footer = () => {
  return (
    <div className='bg-gray-200'>
        <div className='container mx-auto'>
            <div className='h-[200px]'>
                <div className='grid grid-cols-2 gap-5 place-items-center py-5'>
                    <div className=''>
                        Send me a message
                        <div className='flex items-center w-[300px] h-[30px] bg-gray-300'>
                            <input type="email" 
                                    name="email" 
                                    placeholder='example@email.com' 
                                    className='px-2 h-full text-[14px] outline-none font-poppins'
                                    />
                        </div>
                    </div>
                    <div>Right Side</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer