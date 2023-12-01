import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useFetch } from "../hooks/useFetch";

const AboutMe = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const [url, setUrl] = useState("https://backend.startsmart.uz/about/");
  const { data, isPending, error } = useFetch(url);

  

  return (<>
   
    <div >
      {data &&
        data.map((about) => {
          return (
            <div className="lg:ml-28 md:ml-20 sm:ml-5 sm:gap-0  flex gap-36 mb-24">
              <img
                src={about.about_image}
                alt=""
                className="rounded-3xl user mt-12 sm:w-0 sm:h-0"
                data-aos="fade-right"
              />

              <div>
                <h1
                  className="lg:text-5xl md:text-4xl text-yellow-400 mb-6 sm:text-3xl"
                  data-aos="fade-up"
                >
                  MEN HAQIMDA
                </h1>

                <p className="w-96" data-aos="fade-up">
                  {about.text}
                </p>

                <div className="flex items-baseline mt-12" data-aos="fade-up">
                  <h1 className="text-5xl text-yellow-300">{about.year}</h1>
                  <p>Yil Tajriba</p>
                </div>
                <div className="flex items-baseline mt-8" data-aos="fade-up">
                  <h1 className="text-5xl text-yellow-300">{about.completed_works}</h1>
                  <p>Tugallangan Loyihalar</p>
                </div>
                <div className="flex items-baseline mt-8" data-aos="fade-up">
                  <h1 className="text-5xl text-yellow-300">{about.regular_customers}</h1>
                  <p>Doimiy Mijozlar</p>
                </div>
              </div>
            </div>
          );
        })}
    </div>
    
    </>
  );
};

export default AboutMe;
