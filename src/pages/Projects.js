import React from 'react'
import Footer from '../components/Footer'
import NavbarFinal from '../components/NavbarFinal'

const Projects = () => {
  return (
    <div className='bg-white'>
        <NavbarFinal />
        <div className='container mx-auto'>
            <div className='min-h-screen flex justify-center items-center'>
                <div>List of Projects</div>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Projects