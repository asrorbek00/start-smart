import AOS from 'aos'
import  'aos/dist/aos.css'
import { useEffect, useState } from 'react'
import { useFetch } from '../hooks/useFetch'

const OurWorks = () => {

  useEffect(()=>{
    AOS.init()
  },[])

  const [url , setUrl] = useState('https://backend.startsmart.uz/smm-type/')
  const {data ,isPending , error} = useFetch(url)
  return (
    <div>
        <h1 className='text-5xl max-w-[50%]  font-semibold text-center text-yellow-400  lg:ml-80 md:ml-64 md:text-3xl lg:text-5xl sm:text-3xl sm:ml-[23%]' data-aos='fade-up'>SMM-HAL QILADIGAN NARSALAR</h1>


        <div className='ml-14 mt-12 grid lg:grid-cols-3 md:grid-cols-2'>
        {data && data.map((info) =>{

        return <div>
         <div className='border-2 w-fit px-4 py-5 border-gray-500 mb-4' data-aos='fade-right' key={info.id}>
            <div className='flex items-center gap-3'>
              <h1 className='lg:text-6xl md:text-4xl text-yellow-300'>{info.id}</h1>
              <hr className='border-[1px] w-32 border-gray-400'/>
            </div>
            <div className='w-72 mt-3'>
              <p>{info.text}</p>
            </div>
          </div>
          </div>
        })}
        </div>
        {/* 2 */}
        {/* <div className='ml-56  flex'>
          <div className='border-2 w-fit px-4 py-5 border-gray-500' data-aos='fade-right'>
            <div className='flex items-center gap-3'>
              <h1 className='lg:text-6xl md:text-4xl text-yellow-300'>04</h1>
              <hr className='border-[1px] w-32 border-gray-400'/>
            </div>
            <div className='w-72 mt-3'>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio perferendis cum consectetur reprehenderit modi deleniti nostrum cupiditate quam nemo eveniet.</p>
            </div>
          </div>
          <div className='border-2 w-fit px-4 py-5 border-gray-500' data-aos='fade-up'>
            <div className='flex items-center gap-3'>
              <h1 className='lg:text-6xl md:text-4xl text-yellow-300'>06</h1>
              <hr className='border-[1px] w-32 border-gray-400'/>
            </div>
            <div className='w-72 mt-3'>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio perferendis cum consectetur reprehenderit modi deleniti nostrum cupiditate quam nemo eveniet.</p>
            </div>
          </div>
          <div className='border-2 w-fit px-4 py-5 border-gray-500' data-aos='fade-up'>
            <div className='flex items-center gap-3'>
              <h1 className='lg:text-6xl md:text-4xl text-yellow-300'>05</h1>
              <hr className='border-[1px] w-32 border-gray-400'/>
            </div>
            <div className='w-72 mt-3'>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio perferendis cum consectetur reprehenderit modi deleniti nostrum cupiditate quam nemo eveniet.</p>
            </div>
          </div>
        </div> */}
        {/* 3 */}

        {/* <div className='ml-14  flex'>
          <div className='border-2 w-fit px-4 py-5 border-gray-500' data-aos='fade-right'>
            <div className='flex items-center gap-3'>
              <h1 className='lg:text-6xl md:text-4xl text-yellow-300'>07</h1>
              <hr className='border-[1px] w-32 border-gray-400'/>
            </div>
            <div className='w-72 mt-3'>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio perferendis cum consectetur reprehenderit modi deleniti nostrum cupiditate quam nemo eveniet.</p>
            </div>
          </div>
          <div className='border-2 w-fit px-4 py-5 border-gray-500' data-aos='fade-up'>
            <div className='flex items-center gap-3'>
              <h1 className='lg:text-6xl md:text-4xl text-yellow-300'>09</h1>
              <hr className='border-[1px] w-32 border-gray-400'/>
            </div>
            <div className='w-72 mt-3'>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio perferendis cum consectetur reprehenderit modi deleniti nostrum cupiditate quam nemo eveniet.</p>
            </div>
          </div>
          <div className='border-2 w-fit px-4 py-5 border-gray-500' data-aos='fade-left'>
            <div className='flex items-center gap-3'>
              <h1 className='lg:text-6xl md:text-4xl text-yellow-300'>08</h1>
              <hr className='border-[1px] w-32 border-gray-400'/>
            </div>
            <div className='w-72 mt-3'>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio perferendis cum consectetur reprehenderit modi deleniti nostrum cupiditate quam nemo eveniet.</p>
            </div>
          </div>
        </div> */}
    </div>
  )
}

export default OurWorks