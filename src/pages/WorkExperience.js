import React from 'react'
import ExpCard from '../components/ExpCard'
import Footer from '../components/Footer'
import NavbarFinal from '../components/NavbarFinal'
import { exp } from '../utils/exp-utils'

const WorkExperience = () => {
  return (
    <div className='bg-white'>
        <NavbarFinal />
        <div className='container mx-auto'>
           <div className='min-h-screen'>
                <div className='min-h-[10vh] flex justify-center items-center '>
                    <span className='text-[22px] text-slate-600 font-poppins font-semibold'>PROFESSIONAL WORK EXPERIENCES</span>
                </div>
                <div className='min-h-[55vh] grid place-items-center gap-5 m-5 mobileSM:grid-cols-1 mobileMD:grid-cols-1 mobileLG:grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 desktop:grid-cols-4'>
                    {exp.map(items => {
                        return(
                            <div key={items.id}>
                                <ExpCard 
                                    image={items.image}
                                    company={items.company}
                                    position={items.position}
                                    duration={items.duration}
                                />
                            </div>   
                        )
                    })}
                </div>
           </div>
        </div>
        <Footer />
    </div>
  )
}

export default WorkExperience