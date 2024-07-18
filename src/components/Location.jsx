import React, { useEffect } from 'react';
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Location() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      
    });})
  return (
    <div className="flex flex-col items-center gap-10 px-4 md:px-0 my-8  ">
      {/* Title */}
      <div className="flex justify-center items-center">
        <h1 className=' font-bold font-[Poppins] mb-4 text-4xl md:text-5xl hover:underline text-blue-600 ' data-aos="fade-up">OFFICE LOCATION</h1>
      </div>

      {/* Main content */}
      <div className="flex flex-col  md:flex-row w-full max-w-screen-xl gap-2 px-6 ">
        {/* Left side */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-start ">
          <h1 className="text-2xl md:text-4xl font-bold mb-2 text-blue-500 " data-aos="fade-up">Genuine Verification Service</h1>
          <div className="flex items-center mb-2" data-aos="fade-up">
            <MdEmail className="mr-2 text-blue-500 size-8" />
            <span className='md:text-xl  my-5 font-[Rubik] text-sm font-semibold'>support@genuineverification.com</span>
          </div>
          <div className="flex items-center" data-aos="fade-up">
            <FaPhone className="mr-2 text-blue-500 size-8" />
            <span className='md:text-xl text-lg  font-[Rubik]' >+91 9711686873</span>
          </div>
        </div>

        {/* Right side */}
        <div className="w-full md:w-2/3 flex justify-center items-center shadow-lg" data-aos="fade-up">
          <iframe
            width="100%"
            height="450"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
            src="https://maps.google.com/maps?width=100%25&amp;height=450&amp;hl=en&amp;q=%20District%20Centre%20Janakpuri,%20Delhi+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Location;
