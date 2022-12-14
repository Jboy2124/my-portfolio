import React from 'react'
import Hero from '../components/Hero'
import JBA from '../assets/my-image/JBA.jpg'
import Footer from '../components/Footer'
import NavbarFinal from '../components/NavbarFinal'
const Homepage = () => {
  return (
    <div className='bg-white'>
        <NavbarFinal />
        <Hero />
       <div className='container mx-auto'>
            <div className='flex justify-center min-h-[50vh]'>
                <div className='mt-[-140px]'>
                  <div className='flex justify-center items-center'>
                      <div className='rounded-full w-[300px] h-[300px] ring-8 ring-gray-200 bg-white overflow-hidden shadow-lg'>
                        <img className='object-center object-cover' src={JBA} alt='my pic' />
                      </div>
                  </div>
                  <div className='flex justify-center items-center mt-3'>
                    <span className='text-[30px] antialiased text-slate-600 font-poppins font-bold'>Jufel Bacalso Abecia</span>
                  </div>
                  <div className='flex justify-center items-center overflow-hidden'>
                    <span className='text-[12px] antialiased text-slate-600 font-poppins font-bold'>FULL-STACK WEB DEVELOPER</span>
                  </div>
                  <div className='flex flex-wrap justify-center items-center mt-3'>
                    <span className='text-[12px] text-slate-600 font-poppins italic'>"Web design is not about making a website—it’s 
                      about making an investment in your organization. Successful web design takes into account more than just aesthetics… 
                      It’s a reflection of you, your company, and your vision."
                    </span>
                  </div>
                  <div className='flex justify-end items-center mt-3'>
                    <span className='text-[12px] text-slate-600 font-poppins'>-unknown-</span>
                  </div>
                </div>
            </div>
       </div>
       <Footer />
    </div>
  )
}

export default Homepage