import { Swiper, SwiperSlide } from "swiper/react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";

// Import Swiper styles
import "swiper/css";

import "swiper/css/navigation";

// import required modules
import {  Navigation } from "swiper/modules";
import { useFetch } from "../hooks/useFetch";

const OurTeam = () => {
  useEffect(()=>{
    AOS.init()
  },[])

  const [url , setUrl] = useState('https://backend.startsmart.uz/team/')
  const [logourl , setLogoUrl] = useState('https://backend.startsmart.uz/logo/')
  const {data , isPending , error} = useFetch(url)
  const {data:logo } = useFetch(logourl)
  return (
    <div className="mt-20 mb-8">
      <h1 className="text-yellow-400 lg:text-6xl md:text-5xl text-center sm:text-3xl" data-aos='fade-up'>
        Jamoa
      </h1>
      <Swiper
        data-aos="fade-up"
        slidesPerView={4}
        spaceBetween={10}
        centeredSlides={true}
        grabCursor={true}
        navigation={true}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          "@1.50": {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[ Navigation]}
        className="mySwiper rounded-none sm:px-16"
      >
      {data && data.map((image) =>{
      return  <SwiperSlide key={image.id} >
          <img
            src={image.image}
            alt=""
            className="rounded-3xl user mt-12"
          />
        </SwiperSlide>
      })}
        
      </Swiper>

      <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 mt-24 lg:px-0 sm:px-2" >
      {logo && logo.map((image) =>{
            return  <div className="py-8 px-10 border-2" data-aos='fade-up' key={image.id}>
           <img src={image.logo} alt=""  data-aos='flip-left'/>
        </div>
      })}
      </div>
    </div>
  );
};

export default OurTeam;
