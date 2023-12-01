
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';
import { useFetch } from '../hooks/useFetch';
import { info } from 'autoprefixer';
const Heading = () => {

  useEffect(()=>{
    AOS.init()
  },[])

  const [url , setUrl] = useState('https://backend.startsmart.uz/banner/')
      const {data, isPending , error} = useFetch(url)
  return (
    <>
    { data && data.map((info)=>{
      return  <div className='px-12' key={info.id}>
    <div className='flex items-center lg:gap-28 md:gap-10'>
        <div className='flex flex-col text-left lg:text-8xl md:text-5xl sm:text-4xl mt-12  w-2/4' data-aos='fade-right'>
            <h1 className='font-medium text'>{info.title}</h1>
            
        </div>
        <div className='' data-aos='fade-up' data-aos-duration='1000'>
          <img src="./public/result.png" alt=""  className='lg:w-96 lg:h-96   md:w-80 md:h-80 logo-spin '/>
        </div>
        </div>
        <div className='w-3/5 mt-5 font-sans  ' data-aos='fade-left'>
            <p>{info.text}</p>
        </div>
    </div>
  })
    }
    </>
  )
}

export default Heading