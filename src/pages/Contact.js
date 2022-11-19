import React from 'react'
import Footer from '../components/Footer'
import NavbarFinal from '../components/NavbarFinal'


const Contact = () => {
  return (
    <div className='bg-white'>
        <NavbarFinal />
        <div className='container mx-auto'>
            <div className='min-h-screen flex justify-center items-center'>
                <div className='w-[400px] h-[500px] bg-gray-200 rounded shadow-md'>
                    <div className='mt-3 text-center'>
                        <span className='text-[18px] text-slate-500 px-2 font-poppins'>Send Me A Message</span>
                    </div>
                    <div className='grid grid-cols-1 gap-3 place-items-center'>
                        <div className='flex items-center w-[350px] mt-5'>
                            <span className='px-2 text-[13px] text-slate-500 py-1 font-poppins'>Firstname </span>
                            <input type='text' 
                                    name='firstname' 
                                    placeholder='' 
                                    className='px-2 text-[13px] w-full py-1 font-poppins h-full outline-none'
                                    />
                        </div>
                        <div className='flex items-center w-[350px]'>
                            <span className='px-2 text-[13px] text-slate-500 py-1 font-poppins'>Lastname </span>
                            <input type='text' 
                                    name='lastname' 
                                    placeholder='' 
                                    className='px-2 text-[13px] w-full py-1 font-poppins h-full outline-none'
                                    />
                        </div>
                        <div className='flex items-center w-[350px]'>
                            <span className='px-2 text-[13px] text-slate-500 py-1 font-poppins'>Email Address</span>
                            <input type='email' 
                                    name='email' 
                                    placeholder='example@email.com' 
                                    className='px-2 text-[13px] w-full py-1 font-poppins h-full outline-none'
                                    />
                        </div>
                        <div className='flex w-[350px] h-[220px]'>
                            <span className='px-2 text-[13px] text-slate-500 py-1 font-poppins'>Message </span>
                            <textarea name='txtarea' rows='5' cols='10' className='h-full w-full outline-none text-[13px] font-poppins text-slate-500] resize-none px-2'>

                            </textarea>
                        </div>
                        <div className='mt-5'>
                            <span className='rounded px-12 py-2 mt-10 border border-gray-400 text-slate-500 text-[13px] font-poppins cursor-pointer hover:bg-gray-300'>Submit</span>
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