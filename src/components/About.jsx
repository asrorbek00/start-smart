import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';
import { useFetch } from '../hooks/useFetch';
import Loading from './Loading';

const About = () => {
  useEffect(()=>{
    AOS.init()
  },[])

  const [url, setUrl] = useState("https://backend.startsmart.uz/about-me/");
  const { data, isPending, error } = useFetch(url);

  
  return (
    <>
    {isPending ? <Loading/> :

        <div className='ml-12 mb-20'>
        <h1 className='text-center lg:text-5xl md:text-4xl sm:text-3xl text-yellow-400' data-aos='fade-up'>BIZ HAQIMIZDA</h1>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 ">
        {data && data.map((info)=>{

       return <div  className='flex mt-10' key={info.id}>
        <div className='flex  items-center gap-2 ' >
         <div className='border-2 rounded-lg h-36 border-yellow-300'></div>
        <div className='cursor-pointer' data-aos='fade-right'>
        <p className='text-yellow-400 '>Biz Haqimizda</p>
        <p className='w-80 hover:text-white'>{info.text}</p>
        </div> 
        </div>

        </div> 
         })}
         </div>
    </div>
    }

    </>
  )
}

export default About