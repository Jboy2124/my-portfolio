import React from 'react'

const Footer = () => {
  return (
    <div className='bg-gray-300'>
        <div className='container mx-auto'>
            <div className='grid grid-cols-1 place-items-center'>
                <div className='h-[60px]'>
                    <div className='h-full flex justify-center items-center space-x-1'>
                        <div className='text-[25px] text-slate-600 cursor-pointer font-poppins hover:text-slate-800 antialiased transition-all duration-300 ease-in-out'><ion-icon name="logo-facebook"></ion-icon></div>
                        <div className='text-[24px] text-slate-600 cursor-pointer font-poppins hover:text-slate-800 antialiased transition-all duration-300 ease-in-out'><ion-icon name="logo-google"></ion-icon></div>
                        <div className='text-[24px] text-slate-600 cursor-pointer font-poppins hover:text-slate-800 antialiased transition-all duration-300 ease-in-out'><ion-icon name="logo-linkedin"></ion-icon></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer