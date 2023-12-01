import React, { useState } from 'react'
import AOS from 'aos'
import  'aos/dist/aos.css'
import { useEffect } from 'react'
import { useFetch } from '../hooks/useFetch'

const Portfolio = () => {

  useEffect(()=>{
    AOS.init()
  },[])

   const[url , setUrl] = useState('https://backend.startsmart.uz/image-company/')

   const {data , isPending , error} = useFetch(url)
   
  return (
    <div className='mt-14'>
      <h1 className='lg:text-6xl md:text-5xl sm:text-3xl text-yellow-400 text-center ' data-aos='fade-up'>Portfolio</h1>
      <div className='mt-12 lg:px-20 sm:px-0'>
      {data && data.map((info) =>{
        return  <div className='flex sm:flex-row   sm:border-none  max-h-64 border-[1px] gap-3 mt-2' data-aos='fade-up' key={info.id}>
        
        <img src={info.image} alt="" className='w-2/3 grayscale hover:grayscale-0 sm:w-2/4' />
        <img src={info.logo} alt="" className='w-96 grayscale hover:grayscale-0 sm:w-2/4'/>
      </div>
      })}
      
      </div>

      <hr  className='mt-12 border-2 border-yellow-400 w-2/3 lg:ml-[15%] sm:ml-[17%] ' data-aos='fade-right'/>
    </div>
  )
}

export default Portfolio