import React from 'react'
import Footer from '../components/Footer'
import NavbarFinal from '../components/NavbarFinal'
import SkillsCard from '../components/SkillsCard'
import { skills } from '../utils/skills-utils'

const Skills = () => {
  return (
    <div className='bg-white'>
        <NavbarFinal />
        <div className='container mx-auto'>
            <div className='flex justify-center items-end mt-6 '>
              <span className='text-[22px] text-slate-600 font-poppins font-semibold'>MY SKILLS</span>
            </div>
            <div className='min-h-screen flex justify-center items-center w-full'>
                <div className='min-h-[60vh] w-[60%] grid place-items-center gap-5 my-5 mobileSM:grid-cols-1 mobileMD:grid-cols-1 mobileLG:grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-2 desktop:grid-cols-3'>
                    {skills.map(items => {
                        return(
                            <div key={items.id}>
                              <SkillsCard
                                type={items.type}
                                skills={items.skills}
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

export default Skills