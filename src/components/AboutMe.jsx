import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutMe = () => {
    useEffect(()=>{
        AOS.init()
    },[])
  return (
    <div className='ml-28 flex gap-36 mb-24'>
        <img src="https://cdn.vectorstock.com/i/preview-1x/77/30/default-avatar-profile-icon-grey-photo-placeholder-vector-17317730.jpg" alt="" className='rounded-3xl user mt-12' data-aos='fade-right'/>
        <div>
            <h1 className='text-5xl text-yellow-400 mb-6'  data-aos='fade-up'>MEN HAQIMDA</h1>
            <p className='w-96'  data-aos='fade-up'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa tenetur tempora laboriosam cumque repellendus nulla nam fugit dolore odio numquam ex obcaecati enim, culpa, commodi, consequuntur temporibus itaque autem nemo laborum officiis! In, </p>

            <div className='flex items-baseline mt-12'  data-aos='fade-up'>
                <h1 className='text-5xl text-yellow-300'>6</h1>
                <p>Yil Tajriba</p>
            </div>
            <div className='flex items-baseline mt-8' data-aos='fade-up'>
                <h1 className='text-5xl text-yellow-300'>99</h1>
                <p>Tugallangan Loyihalar</p>
            </div>
            <div className='flex items-baseline mt-8' data-aos='fade-up'>
                <h1 className='text-5xl text-yellow-300'>25</h1>
                <p>Doimiy Mijozlar</p>
            </div>
        </div>
    </div>
  )
}

export default AboutMe