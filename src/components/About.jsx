import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const About = () => {
  useEffect(()=>{
    AOS.init()
  },[])
  return (
    <div className='ml-12 mb-20'>
        <h1 className='text-center text-5xl text-yellow-400' data-aos='fade-up'>BIZ HAQIMIZDA</h1>

        <div className='flex  gap-20 mt-20 '>
        <div className='flex flex-row items-center gap-2'>
         <div className='border-2 rounded-lg h-32 border-yellow-300'></div>
        <div className='cursor-pointer' data-aos='fade-right'>
        <p className='text-yellow-400 '>Biz Haqimizda</p>
        <p className='w-80 hover:text-white'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad, esse? Quos quis laborum consequatur soluta molestias. Incidunt eveniet vero placeat?</p>
        </div> 
        </div>

        <div className='flex flex-row items-center gap-2'>
         <div className='border-2 rounded-lg h-32 border-yellow-300'></div>
        <div className='cursor-pointer' data-aos='fade-right'>
        <p className='text-yellow-400 '>Biz Haqimizda</p>
        <p className='w-80 hover:text-white'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad, esse? Quos quis laborum consequatur soluta molestias. Incidunt eveniet vero placeat?</p>
        </div> 
        </div>

        <div className='flex flex-row items-center gap-2'>
         <div className='border-2 rounded-lg h-32 border-yellow-300'></div>
        <div className='cursor-pointer' data-aos='fade-right'>
        <p className='text-yellow-400 '>Biz Haqimizda</p>
        <p className='w-80 hover:text-white'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad, esse? Quos quis laborum consequatur soluta molestias. Incidunt eveniet vero placeat?</p>
        </div> 
        </div>
        </div>
    </div>
  )
}

export default About