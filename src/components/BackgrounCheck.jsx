import React, { useEffect } from 'react';
import { FaHome } from 'react-icons/fa';
import { FaBookReader } from 'react-icons/fa';
import { RiMoneyRupeeCircleFill } from 'react-icons/ri';
import { MdCreditScore } from 'react-icons/md';
import { BsPersonFillCheck } from 'react-icons/bs';
import { RiCriminalFill } from 'react-icons/ri';
import { SlPeople } from 'react-icons/sl';
import { FaBuilding } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const BackgrounCheck = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      
    });})
  return (
    <div className='bg-white h-auto flex flex-col justify-center items-center  overflow-hidden'>
      <div className='container  py-12'>
        <div className='mb-8 flex flex-col justify-center items-center '>
          <h1 className='text-4xl font-bold text-gray-600' data-aos="fade-up">Our Services</h1>
          <p className='text-[#3faffa] font-[Rubik] text-lg md:text-xl font-regular shadow-custom-red mt-2 px-16' data-aos="fade-up">
          We provide various service to reduce fraud and build successful relationships based on trust. 
          </p>
        </div>
        <div className='flex  flex-col md:flex-row justify-center items-center  px-6  md:px-0  cursor-pointer'>
          <div className='w-full md:w-1/3  text-2xl md:text-xl  md:px-24 '>
          <Link to='/contact-us'>
            <div className='flex   justify-left items-center  mb-8' data-aos="fade-up">
              <BsPersonFillCheck className=' text-4xl text-black mr-3'/>
              <p className='text-blue-500 hover:text-blue-700 font-[Rubik] md:font-semibold hover-underline' >Identity Verification</p>
            </div>
            </Link>
            <Link to='/contact-us'>
            <div className='flex justify-left items-center mb-8' data-aos="fade-up">
              <FaBuilding className='text-4xl text-black mr-3'  />
              <p className='text-blue-500 hover:text-blue-700 font-[Rubik]  md:font-semibold hover-underline text-left' >Previous Employment Verification</p>
            </div>
            </Link>
            <Link to='/contact-us'>
            <div className='flex justify-left items-center mb-8' data-aos="fade-up">
              <RiCriminalFill className='text-4xl text-black mr-3' />
              <p className='text-blue-500 hover:text-blue-700 font-[Rubik]  md:font-semibold hover-underline' >Criminal Record</p>
            </div>
            </Link>
            <Link to='/contact-us'>
            <div className='flex justify-left items-center mb-8' data-aos="fade-up">
              <SlPeople className='text-4xl text-black mr-3'  />
              <p className='text-blue-500 hover:text-blue-700 font-[Rubik]  md:font-semibold hover-underline' >Reference Check</p>
            </div>
            </Link>
          </div>
          <div className='w-full md:w-1/2 md:mx-auto md:mb-8 hidden md:block' data-aos="fade-up">
            <img src='./Home.jpg' alt='Client' className=' mx-10  w-96 h-auto' />
          </div>
          <div className='w-full md:w-1/3  text-2xl md:text-xl'>
          <Link to='/contact-us'>
            <div className='flex justify-left items-center mb-8' data-aos="fade-up">
              <FaHome className='text-4xl text-black mr-3'  />
              <p className='text-blue-500 hover:text-blue-700 font-[Rubik]  md:font-semibold text-left hover-underline' >Address Verification</p>
            </div>
            </Link>
            <Link to='/contact-us'>
            <div className='flex justify-left items-center mb-8' data-aos="fade-up">
              <FaBookReader className='text-4xl text-black mr-3'  />
              <p className='text-blue-500 hover:text-blue-700 font-[Rubik]  md:font-semibold hover-underline' >Education Verification</p>
            </div>
            </Link>
            <Link to='/contact-us'>
            <div className='flex justify-left items-center mb-8' data-aos="fade-up">
              <RiMoneyRupeeCircleFill className='text-5xl text-black mr-3'  />
              <p className='text-blue-500 hover:text-blue-700 font-[Rubik]  md:font-semibold hover-underline' >Financial Due Diligence</p>
            </div>
            </Link>
            <Link to='/contact-us'>
            <div className='flex justify-left items-center mb-8' data-aos="fade-up">
              <MdCreditScore className='text-5xl text-black mr-3'  />
              <p className='text-blue-500 hover:text-blue-700 font-[Rubik]  md:font-semibold hover-underline' >Credit Check</p>
            </div>
            </Link>
          </div>
        </div>
        <div className='md:fle  md:hidden'>
        <img src='./Home.jpg' alt='Client' className='mx-auto w-96 h-auto' />
        </div>
      </div>
    </div>
  );
};

export default BackgrounCheck;
