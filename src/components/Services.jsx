import React, { useEffect } from "react";
import { FaCircle } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';
const Services = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className="mt-12 ml-12 mb-20" >
      <h1 className="text-center text-5xl text-yellow-300" data-aos="fade-up" data-aos-duration='1000'>XIZMATLAR</h1>
      <div>

        <div className="flex mt-12">
          <div  className="card w-96 border-yellow-200 flex-row items-center" data-aos="flip-left" data-aos-duration='1000'>
            <span className=""><FaCircle  size={17} fill="yellow"/></span>
              <p className="px-5 py-3 hover:text-white cursor-pointer">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Mollitia perferendis asperiores tempora quas veritatis omnis sit
                aliquam, accusantium totam voluptate?
              </p>
             
          </div>
            
          <div className="card w-96 border-yellow-200 flex-row items-center mt-5" data-aos="flip-left" data-aos-duration='1000'>
            <span className=""><FaCircle  size={17} fill="yellow"/></span>
              <p className="px-5 py-3 hover:text-white cursor-pointer">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Mollitia perferendis asperiores tempora quas veritatis omnis sit
                aliquam, accusantium totam voluptate?
              </p>
          </div>

          <div className="card w-96 border-yellow-200 flex-row items-center mt-10" data-aos="flip-left" data-aos-duration='1000'>
            <span className=""><FaCircle  size={17} fill="yellow"/></span>
              <p className="px-5 py-3 hover:text-white cursor-pointer">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Mollitia perferendis asperiores tempora quas veritatis omnis sit
                aliquam, accusantium totam voluptate?
              </p>
          </div>
        </div>
        <div className="flex lg:ml-52">

        <div className="card w-96 border-yellow-200 flex-row items-center mt-12" data-aos="flip-left" data-aos-duration='1000'>
            <span className=""><FaCircle  size={17} fill="yellow"/></span>
              <p className="px-5 py-3 hover:text-white cursor-pointer">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Mollitia perferendis asperiores tempora quas veritatis omnis sit
                aliquam, accusantium totam voluptate?
              </p>
          </div>

          <div className="card w-96 border-yellow-200 flex-row items-center mt-5" data-aos="flip-left" data-aos-duration='1000'>
            <span className=""><FaCircle  size={17} fill="yellow"/></span>
              <p className="px-5 py-3 hover:text-white cursor-pointer">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Mollitia perferendis asperiores tempora quas veritatis omnis sit
                aliquam, accusantium totam voluptate?
              </p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Services;
