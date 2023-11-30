
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
const Heading = () => {

  useEffect(()=>{
    AOS.init()
  },[])
  return (
    <div>
    <div className='flex items-center lg:gap-32 md:gap-10'>
        <div className='flex flex-col text-left text-8xl ml-12 mt-12 ' data-aos='fade-right'>
            <h1 className='font-extrabold text-9xl smm'>SMM</h1>
            <h1 className='font-medium text'>SOCIAL</h1>
            <h1 className='font-medium text'>MEDIA</h1>
            <h1 className='font-medium text'>MARKETING</h1>
        </div>
        <div className='' data-aos='fade-up' data-aos-duration='1000'>
          <img src="./public/result.png" alt=""  className='w-96 h-96 logo-spin'/>
        </div>
        </div>
        <div className='w-3/5 ml-12 mt-5 font-sans  ' data-aos='fade-left'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem repudiandae quo sint corrupti dolor fuga quia quidem? Reprehenderit excepturi dolores dolore molestias dignissimos sint itaque, distinctio quisquam? Illo praesentium iste veritatis quia veniam rerum animi ex minus neque quos consectetur, voluptatibus, in esse sunt! Ea, minima? Alias tempora inventore vitae.</p>
        </div>
    </div>
  )
}

export default Heading