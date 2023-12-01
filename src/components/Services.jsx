import React, { useEffect, useState } from "react";
import { FaCircle } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useFetch } from "../hooks/useFetch";
const Services = () => {
  useEffect(() => {
    AOS.init();
  }, [])

  const [url , setUrl] = useState('https://backend.startsmart.uz/service/')
  const {data , isPending , error} = useFetch(url)
  return (
    <div className="mt-12 ml-12 mb-20" id="services">
      <h1 className="text-center lg:text-5xl  md:text-4xl sm:text-3xl   text-yellow-300" data-aos="fade-up" data-aos-duration='1000'>XIZMATLAR</h1>
      <div>

        <div className="grid lg:grid-cols-3 mt-12 md:grid-cols-2">
        {data && data.map((service)=>{

        return <div  className="card lg:w-96 md:w-80 border-yellow-200 flex-row items-center" data-aos="flip-left" data-aos-duration='1000' key={service.id}>
            <span className=""><FaCircle  size={17} fill="yellow"/></span>
              <p className="px-5 py-3 hover:text-white cursor-pointer">
                {service.text}
              </p>
             
          </div>
        })}
            
      </div>   
</div>
    </div>
  );
};

export default Services;
