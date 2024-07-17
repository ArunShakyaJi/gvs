import React, { useEffect, useState } from 'react';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Counter() {
  const [counter , setCounter] = useState(false);
  useEffect(() => {
    AOS.init({
      duration: 1000,
      
    });})
  return (
    <ScrollTrigger onEnter={()=> (setCounter(true))} onExit={()=>(setCounter(false))}>

    <div className="justify-center items-center h-100px md:h-150px bg-gray-100 overflow-hidden">
      <div className="w-full py-12 px-4 md:px-12 bg-slate-100 shadow-lg rounded-lg">
        <p className="text-3xl md:text-4xl lg:text-5xl text-center font-semibold mb-8 md:mb-14" data-aos="fade-up">We Secure Your Trust</p>
          
       
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-center">
          <div className="text-center" data-aos="fade-up">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-red-600" >
              {
                counter && <><h1>2010</h1></>
              }
            </h1>
            <p className="text-base md:text-xl lg:text-2xl font-medium text-gray-700" >Founded</p>
          </div>
          <div className="text-center" data-aos="fade-up">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-red-600">+
             {
              counter &&  <CountUp start={0} end={900000} duration={2} delay={0} useIndianSeparators />
             }
            </h1>
            <p className="text-base md:text-xl lg:text-2xl font-medium text-gray-700">Reports Created</p>
          </div>
          <div className="text-center" data-aos="fade-up">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-red-600">+
              {
                counter && <CountUp start={0} end={200} delay={0} duration={2} />
              }
            </h1>
            <p className="text-base md:text-xl lg:text-2xl font-medium text-gray-700">Clients Served</p>
          </div>
        </div>
        <div className="mt-12 md:mt-20 text-center">
          <p className="text-base md:text-lg lg:text-xl font-normal leading-relaxed" data-aos="fade-up">
            We facilitate well-informed hiring decisions and minimize risk by providing comprehensive background checks for potential employees and customers.
          </p>
        </div>
      </div>
    </div>
    </ScrollTrigger>

  );
}

export default Counter;
