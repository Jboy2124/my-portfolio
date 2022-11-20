import React from 'react'
import Footer from '../components/Footer'
import NavbarFinal from '../components/NavbarFinal'
import ProjectCard from '../components/ProjectCard'
import { proj } from '../utils/proj-utils'

const Projects = () => {
  return (
    <div className='bg-white'>
        <NavbarFinal />
        <div className='container mx-auto'>
            <div className='min-h-[90vh] flex flex-col justify-center items-start'>
                <div className='flex justify-center items-center w-full'>
                  <span className='text-[22px] text-slate-600 font-poppins font-semibold'>PROJECTS</span>
                </div>
                <div className='min-h-[70vh] w-full py-10 grid mobileSM:grid-cols-1 mobileMD:grid-cols-1 mobileLG:grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-2 desktop:grid-cols-3 gap-5 place-items-center'>
                    {proj.map(items => {
                        return(
                          <div key={items.id}>
                            <ProjectCard
                                type={items.type}
                                name={items.name}
                                stack={items.stack}
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

export default Projects