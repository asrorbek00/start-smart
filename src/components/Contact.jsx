import AOS from "aos";
import "aos/dist/aos.css";

import { useEffect } from "react";
import { FaInstagram } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { MdLocationPin } from "react-icons/md";
const Contact = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="mt-24">
      <h1
        className="lg:text-6xl md:text-5xl  sm:text-3xl  text-center text-yellow-400"
        data-aos="fade-up"
      >
        Bog`laning
      </h1>

      <div className="mt-12 px-14  grid lg:grid-cols-3 gap-3">
        <a href="tel:998 95 204 08 00">
          <div
            data-aos="fade-right"
            data-aos-duration="500"
            className="flex flex-col items-center cursor-pointer border-2 border-gray-500 py-5 px-3 rounded-lg shadow-black shadow-lg hover:border-gray-300 "
          >
            <span>
              <IoCall fill="yellow" size={20} />
            </span>
            <h3 className="text-lg text-white">Telefon</h3>
            <a className="tracking-2 " href="tel:998 95 204 08 00">
            +998 95 204 08 00
            </a>
          </div>
        </a>
        <a href="https://www.google.com/maps/place/40%C2%B045'22.0%22N+72%C2%B021'57.7%22E/@40.756104,72.36604,16z/data=!4m4!3m3!8m2!3d40.756104!4d72.36604?entry=ttu">
          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            className="flex  flex-col items-center cursor-pointer border-2 border-gray-500 py-5 px-3 rounded-lg shadow-black shadow-lg hover:border-gray-300"
          >
            <span>
              <MdLocationPin fill="yellow" size={23} />
            </span>
            <h3 className="text-lg text-white">Manzil</h3>
            <a className="tracking-2">Q948+CCV Андижан</a>
          </div>
        </a>
        <a href="https://www.instagram.com/start_smart_smm/">
          <div
            data-aos="fade-right"
            data-aos-duration="2000"
            className="flex flex-col items-center cursor-pointer border-2 border-gray-500 py-5 px-3 rounded-lg shadow-black shadow-lg hover:border-gray-300"
          >
            <span>
              <FaInstagram fill="yellow" size={20} />
            </span>
            <h3 className="text-lg text-white">Instagram</h3>
            <a className="tracking-2">@start_smart_smm</a>
          </div>
        </a>
      </div>
      <div
        className="py-20  px-10 lg:ml-12 grid lg:grid-cols-2 md:grid-cols-2 gap-10 mb-20 border-2 mt-12 lg:w-2/3 md:w-4/5 sm:grid-cols-1  rounded-xl"
        data-aos="fade-up"
      >
        <div className="flex flex-col gap-5 ">
          <input
            type="text"
            placeholder="Ism"
            className="rounded-xl shadow-xl pl-8 py-3"
          />
          <input
            type="text"
            placeholder="Familiya"
            className="rounded-xl shadow-xl pl-8 py-3"
          />
          <input
            type="number"
            placeholder="Tel.."
            className="rounded-xl shadow-xl pl-8 py-3"
          />
        </div>
        <div className="flex  gap-5">
          <textarea
            placeholder="Xabar.."
            className="shadow-xl pt-3 pl-3 rounded-xl h-36 w-80"
          />
          <button className="btn btn-outline btn-accent w-20 mt-48 lg:-ml-20 md:-ml-11 ">
            Yuborish
          </button>
        </div>
      </div>
      <hr className="border-[1px]" />

    </div>
  );
};

export default Contact;
