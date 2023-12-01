import React, { useState } from 'react'
import {FaTelegram} from 'react-icons/fa'
import {BiPhoneCall} from 'react-icons/bi'
import {RxHamburgerMenu} from 'react-icons/rx'
import { useFetch } from '../hooks/useFetch'
 


const Navbar = () => {
   

      const [url , setUrl] = useState('https://backend.startsmart.uz/info/')
      const {data , isPending , error} = useFetch(url)



  return (
    <div className='flex'>
    <div className="dropdown nav-menu mt-2">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
      <span><RxHamburgerMenu size={25} /></span>
      </div>
      <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      <li><a>Asosiy</a></li>
      <li><a>Xizmatlar</a></li>
      <li><a>Portfolio</a></li>
      <li><a>Video</a></li>
      <li><a>Bog`lanish</a></li>
      {data && data.map((nomer) =>{
      return  <>
      <li><span className='flex cursor-pointer hover:text-emerald-400 font-mono mt-3'><BiPhoneCall  size={15}/><a href="tel:998952040800">{nomer.phone}</a></span></li>
      </>
      })}
      
    </ul>
    </div>
        <div className="navbar bg-base-100">
  <div>
    <img src='public/logo.png' alt="" className='lg:w-32 ml-5 md:w-28 sm:w-20 sm:ml-72' />
  </div>
   
   <ul className="flex cursor-pointer font-mono lg:text-xl md:text-lg lg:ml-[10%]">
      <li className='navli'><a>Asosiy</a> </li>
      <li className='navli'><a>Xizmatlar</a></li>
      <li className='navli'><a>Portfolio</a></li>
      <li className='navli'><a>Video</a></li>
      <li className='navli'><a>Bog`lanish</a></li>
    </ul>
    <div className='flex gap-5 nav-contact ml-8' >
    {data && data.map((nomer)=>{
     return <> 
     <span className='flex cursor-pointer hover:text-emerald-400 font-mono text-white'><BiPhoneCall  size={25}/>{nomer.phone}</span>
      <span className='cursor-pointer hover:text-sky-400'><FaTelegram size={33}/></span>
      </>
    })}
    
    </div>
</div>
    </div>
  )
}

export default Navbar