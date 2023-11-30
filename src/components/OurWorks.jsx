import AOS from 'aos'
import  'aos/dist/aos.css'
import { useEffect } from 'react'

const OurWorks = () => {

  useEffect(()=>{
    AOS.init()
  },[])
  return (
    <div>
        <h1 className='text-5xl max-w-[50%] font-semibold text-center text-yellow-400  lg:ml-80 md:ml-64 md:text-3xl lg:text-5xl' data-aos='fade-up'>SMM-HAL QILADIGAN NARSALAR</h1>

        <div>
          <div>
            
          </div>
        </div>
    </div>
  )
}

export default OurWorks