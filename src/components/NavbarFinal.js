import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { menu } from '../utils/menu-utils'
import Resume from '../assets/downloads/ResumeJBAbecia.pdf'

const NavbarFinal = () => {
    const [arrowMenu, setArrowMenu] = useState(true)
  return (
    <div className='bg-gray-300'>
        <div className='container mx-auto'>
            <div className='flex justify-between items-center py-5'>
                <div className='flex justify-start items-center space-x-1 cursor-pointer'>
                    <div className='text-slate-600 text-[30px] font-poppins antialiased flex items-center'>
                        <ion-icon name="newspaper-sharp"></ion-icon>
                    </div>
                    <div className='flex items-center'>
                        <span className='text-slate-600 text-[27px] font-poppins font-semibold'>portfolio.</span>
                    </div>
                </div>
                <div className='flex justify-end items-center space-x-10'>
                    <div className='mobileSM:hidden mobileMD:hidden mobileLG:hidden tablet:block'>
                        <ul className='flex items-center space-x-4 text-[15px] text-slate-600 font-poppins'>
                            {menu.map(items => {
                                return(
                                    <li key={items.id} className='hover:text-slate-400 transition-all duration-300'><Link to={items.link}>{items.name}</Link></li>
                                )
                            })}
                        </ul>
                    </div>
                    <div className='mobileSM:hidden mobileMD:hidden mobileLG:hidden tablet:hidden laptop:block rounded border border-slate-600 cursor-pointer hover:bg-slate-300 hover:border-slate-500'>
                        <div className='text-slate-600 text-[15px] px-10 py-2 font-poppins'><Link to={Resume} target='_blank' download>Download CV</Link></div>
                    </div>
                    <div className='laptop:hidden desktop:hidden'>
                        <div className='text-[23px] text-slate-600 cursor-pointer hover:text-slate-500' onClick={() => { setArrowMenu(value => !value) }}>
                            { (arrowMenu) ? <ion-icon name="menu-sharp"></ion-icon> : <ion-icon name="close-sharp"></ion-icon> }
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-center items-center'>
                <div className={`desktop:hidden laptop:hidden tablet:${(arrowMenu) ? 'hidden' : 'block'} mobileLG:${(arrowMenu) ? 'hidden' : 'block'} mobileMD:${(arrowMenu) ? 'hidden' : 'block'} mobileSM:${(arrowMenu) ? 'hidden' : 'block'}`}>
                    <div className='desktop:hidden laptop:hidden tablet:hidden w-full'>
                        <ul className='grid place-items-center gap-1 text-[15px] text-slate-600 font-poppins'>
                            {menu.map(items => {
                                return(
                                    <li key={items.id} className='hover:text-slate-400 transition-all duration-300'><Link to={items.link}>{items.name}</Link></li>
                                )
                            })}
                        </ul>
                    </div>
                    <div className='rounded border border-slate-600 cursor-pointer hover:bg-slate-300 hover:border-slate-500 my-3'>
                        <div className='text-slate-600 text-[15px] px-10 py-2 font-poppins'><Link to={Resume} target='_blank' download>Download CV</Link></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NavbarFinal