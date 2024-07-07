import React, { useEffect } from 'react';
import Card from './Card';
import Card1 from './Card1';
import Card2 from './Card2';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Info = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      
    });
  })
  return (
    <div className='bg-half-red-yellow  py-8'>
      <div className='flex justify-center items-center mb-10 md:mb-15'>
      <p className=' font-[Poppins] font-bold text-4xl' data-aos="fade-up">BUSSINESS</p>
      </div>
      <div className=' flex max-w-7xl sm:max-w-9xl mx-auto px-4 justify-center items-center'>
        <div className='grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 md:gap-24 gap-6 ' data-aos="fade-up">
          <Card />
          <Card2 />
          <Card1 />
        </div>
      </div>
    </div>
  );
};

export default Info;
