
import { Swiper, SwiperSlide } from 'swiper/react';
import AOS from 'aos'
import  'aos/dist/aos.css'
import { useEffect } from 'react'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation'



// import required modules
import { Pagination,Navigation } from 'swiper/modules';

const OurTeam = () => {
  return (
    <div className='mt-12 ' >
           <Swiper
        slidesPerView={4}
        spaceBetween={10}
        centeredSlides={true}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        
        breakpoints={{
          '@0.00': {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          '@0.75': {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          '@1.00': {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          '@1.50': {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination , Navigation ]}
        className="mySwiper"
      >
        <SwiperSlide><img src="https://cdn.vectorstock.com/i/preview-1x/77/30/default-avatar-profile-icon-grey-photo-placeholder-vector-17317730.jpg" alt="" className='rounded-3xl user mt-12'/></SwiperSlide>
        <SwiperSlide><img src="https://cdn.vectorstock.com/i/preview-1x/77/30/default-avatar-profile-icon-grey-photo-placeholder-vector-17317730.jpg" alt="" className='rounded-3xl user mt-12'/></SwiperSlide>
        <SwiperSlide><img src="https://cdn.vectorstock.com/i/preview-1x/77/30/default-avatar-profile-icon-grey-photo-placeholder-vector-17317730.jpg" alt="" className='rounded-3xl user mt-12'/></SwiperSlide>
        <SwiperSlide><img src="https://cdn.vectorstock.com/i/preview-1x/77/30/default-avatar-profile-icon-grey-photo-placeholder-vector-17317730.jpg" alt="" className='rounded-3xl user mt-12'/></SwiperSlide>
        <SwiperSlide><img src="https://cdn.vectorstock.com/i/preview-1x/77/30/default-avatar-profile-icon-grey-photo-placeholder-vector-17317730.jpg" alt="" className='rounded-3xl user mt-12'/></SwiperSlide>
        <SwiperSlide><img src="https://cdn.vectorstock.com/i/preview-1x/77/30/default-avatar-profile-icon-grey-photo-placeholder-vector-17317730.jpg" alt="" className='rounded-3xl user mt-12'/></SwiperSlide>
        <SwiperSlide><img src="https://cdn.vectorstock.com/i/preview-1x/77/30/default-avatar-profile-icon-grey-photo-placeholder-vector-17317730.jpg" alt="" className='rounded-3xl user mt-12'/></SwiperSlide>
        <SwiperSlide><img src="https://cdn.vectorstock.com/i/preview-1x/77/30/default-avatar-profile-icon-grey-photo-placeholder-vector-17317730.jpg" alt="" className='rounded-3xl user mt-12'/></SwiperSlide>
      </Swiper>
    </div>
  )
}

export default OurTeam