import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { menu } from '../utils/menu-utils'

const Navbar = () => {
    const [arrowMenu, setArrowMenu] = useState(true)
    const [hambMenu, setHambMenu] = useState(true)
  return (
    <div className='bg-gray-200'>
        <div className='container mx-auto'>
            <div className='relative w-full py-6'>
                <div className='flex justify-between items-center'>
                    <div className='flex justify-start items-center space-x-1'>
                        <div className='flex text-[35px] text-slate-500 items-center'>
                            <ion-icon name="newspaper-sharp"></ion-icon>
                        </div>
                        <div>
                            <span className='text-slate-500 text-[30px] font-poppins font-semibold antialiased'>portfolio.</span>
                        </div>
                    </div>
                    <div className='flex justify-end items-center space-x-14'>
                        <div className='mobileLG:hidden tablet:block'>
                            <ul className='flex justify-end items-center space-x-4 text-slate-500 font-poppins text-[15px]'>
                                {menu.map(items => {
                                    return(
                                        <li key={items.id} className='hover:text-slate-900'><Link to={items.link}>{items.name}</Link></li>
                                    )
                                })}
                            </ul>
                        </div>
                        <div className='mobileLG:hidden tablet:hidden laptop:flex justify-center items-center hover:cursor-pointer hover:bg-slate-200'>
                            <div className='px-10 py-2 text-slate-500 font-poppins text-[14px] rounded border border-spacing-1 border-slate-500 transition-all duration-300 ease-in-out'>Download CV</div>
                        </div>
                        <div className='tablet:hidden mobileLG:block'>
                            <div className='rounded-full w-[30px] h-[30px] grid place-items-center hover:bg-gray-300 transition-all duration-300 ease-in-out'>
                                <span className='text-[23px] text-slate-500 cursor-pointer' onClick={() => setHambMenu(value => !value)}>
                                    { (hambMenu) ? <ion-icon name="menu-sharp"></ion-icon> : <ion-icon name="close-sharp"></ion-icon>}
                                </span>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
            <div className='relative tablet:block mobileLG:hidden laptop:hidden'>
                <div className={`absolute top-0 left-0 right-0 ${(arrowMenu) ? 'h-[30px]' : 'h-[80px]'} flex justify-center items-start`}>
                    <div className='grid grid-cols-1 place-items-center gap-2'>
                        <span className={`${(arrowMenu) ? 'hidden' : 'block'} px-10 py-2 text-slate-500 font-poppins text-[14px] rounded border border-spacing-1 border-slate-500 hover:cursor-pointer hover:bg-slate-200 transition-all duration-300 ease-in-out`}>Download CV</span>
                        <div className='rounded-full w-[28px] h-[28px] hover:bg-gray-300 transition-all duration-300 ease-in-out grid place-items-center'>
                            <span className='hover:cursor-pointer text-slate-500 text-[20px]' onClick={() => { setArrowMenu(value => !value) } }>{(arrowMenu) ? <ion-icon name="chevron-down-outline"></ion-icon> : <ion-icon name="chevron-up-outline"></ion-icon>}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='relative mobileLG:block tablet:hidden'>
                <div className='absolute top-0 left-0 right-0'>
                    <ul className={`grid grid-cols-1 place-items-center gap-1 ${(hambMenu) ? 'hidden' : 'block'} text-slate-500 font-poppins text-[15px]`}>
                        {menu.map(items => {
                            return(
                                <li key={items.id} className='hover:text-slate-900'><Link to={items.link}>{items.name}</Link></li>
                            )
                        })}
                    </ul>
                    <div className='grid grid-cols-1 gap-1 py-2 place-items-center'>
                        <span className={`${(hambMenu) ? 'hidden' : 'block'} px-10 py-2 text-slate-500 font-poppins text-[14px] rounded border border-spacing-1 border-slate-500 hover:cursor-pointer hover:bg-slate-200 transition-all duration-300 ease-in-out`}>Download CV</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar