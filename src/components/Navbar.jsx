import React from 'react'
import {FaTelegram} from 'react-icons/fa'
import {BiPhoneCall} from 'react-icons/bi'
import {RxHamburgerMenu} from 'react-icons/rx'
import AOS from 'aos'
import  'aos/dist/aos.css'
import { useEffect } from 'react'

const Navbar = () => {
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
      <li><span className='flex cursor-pointer hover:text-emerald-400 font-mono mt-3'><BiPhoneCall  size={15}/>+998971632328</span></li>
    </ul>
    </div>
        <div className="navbar bg-base-100">
  <div>
    <a className="btn btn-ghost text-xl">daisyUI</a>
  </div>
   
   <ul className="flex cursor-pointer font-mono lg:text-xl md:text-lg lg:ml-[15%]">
      <li className='navli'><a>Asosiy</a></li>
      <li className='navli'><a>Xizmatlar</a></li>
      <li className='navli'><a>Portfolio</a></li>
      <li className='navli'><a>Video</a></li>
      <li className='navli'><a>Bog`lanish</a></li>
    </ul>
    <div className='flex gap-5 nav-contact ml-8' >
    <span className='flex cursor-pointer hover:text-emerald-400 font-mono text-white'><BiPhoneCall  size={25}/>+998971632328</span>
      <span className='cursor-pointer hover:text-sky-400'><FaTelegram size={33}/></span>
    </div>
</div>
    </div>
  )
}

export default Navbar