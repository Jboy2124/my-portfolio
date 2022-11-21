import React from 'react'
import Footer from '../components/Footer'
import NavbarFinal from '../components/NavbarFinal'


const Contact = () => {
  return (
    <div className='bg-white'>
        <NavbarFinal />
        <div className='container mx-auto'>
            <div className='min-h-screen flex justify-center items-center'>
                <div className='bg-gray-300 rounded w-[650px] h-[400px] shadow-lg flex items-center'>
                    <div className='w-full h-full bg-gray-300 rounded'>
                        <div className='w-full h-[40px] bg-gray-500 flex justify-center items-center rounded-t'>
                            <span className='text-[18px] text-white font-poppins font-semibold'>Send Message</span>
                        </div>
                        <div className='w-full h-[35px] mt-7 flex items-center space-x-3 px-16'>
                            <div className='flex items-center h-full w-[90px]'>
                                <label className='text-[14px] text-slate-600 font-poppins'>Name:</label>
                            </div>
                            <input type='text' name='name' className='w-full h-full text-[14px] text-slate-600 font-poppins outline-none px-2' />
                        </div>
                        <div className='w-full h-[35px] mt-2 flex items-center space-x-3 px-16'>
                            <div className='flex items-center h-full w-[90px]'>
                                <label className='text-[14px] text-slate-600 font-poppins'>Email:</label>
                            </div>
                            <input type='email' name='name' placeholder='example@email.com' className='w-full h-full text-[14px] text-slate-600 font-poppins outline-none px-2' />
                        </div>
                        <div className='w-full h-[180px] mt-2 flex px-16'>
                            <div className='flex h-full w-[105px]'><label className='text-[14px] text-slate-600 font-poppins'>Message:</label></div>
                            <textarea className='text-[14px] text-slate-600 font-poppins resize-none w-full h-full outline-none px-2 py-1'></textarea>
                        </div>
                        <div className='w-full h-[40px] mt-2 px-16'>
                            <div className='flex justify-end items-center h-full'>
                                <button className='text-[14px] text-slate-600 font-poppins border border-gray-500 rounded px-12 py-[6px] hover:bg-gray-500 hover:text-white transition-all duration-300 ease-in-out'>Send</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Contact