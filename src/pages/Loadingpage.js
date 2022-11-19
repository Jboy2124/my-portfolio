import React, { useEffect, useState } from 'react'
import ScaleLoader from 'react-spinners/ScaleLoader'

const Loadingpage = () => {
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
    }, [])
  return (
    <div className='bg-white'>
        <div className='container mx-auto'>
            <div className='min-h-screen flex justify-center items-center'>
                <div>
                    <ScaleLoader color='#D1D5DB' loading={loading} height={35} width={4} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Loadingpage