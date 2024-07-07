import React, { useEffect } from "react";
import Commitment from "../components/Commitment.jsx";
import Whygvs from '../components/Whygvs/Whygvs'
import Slider from "../components/imageSlider/Slider";
import Location from '../components/Location'

import AOS from 'aos';
import 'aos/dist/aos.css';

export default function About() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      
    });
  })

  return (
    <div  >
      <div className="m-10 flex flex-col justify-center items-center " >
        <h1 className="text-3xl font-[Poppins] mb-10 font-semibold lg:text-6xl " data-aos="fade-up">
          ABOUT <span className="text-blue-600">US</span>
        </h1>
        <h2 className="text-2xl font-semibold font-[Rubik] mt-4 lg:text-4xl my-10 " data-aos="fade-up">
          We Secure,<span className="text-blue-600">Your Trust</span> 
        </h2>
        <p className="mt-4 lg:px-10  font-normal  lg:text-lg font-[Rubik] my-10 lg:mx-24" data-aos="fade-up">
          Welcome to Genuine Verification Services (GVS), where your trust is
          our unwavering commitment. We are a dedicated team of professionals
          focused on delivering comprehensive and reliable employment
          verification services. Our mission is to empower businesses with the
          truth, ensuring that every hire is based on verified, accurate, and
          trustworthy information.
        </p>
        
        <img src="/About/71.jpg" className=" max-w-[600px]" data-aos="fade-up" />
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between p-4">
        <div className="md:w-1/2 p-4">
          <h2 className="text-2xl font-bold mb-2 lg:text-6xl lg:ml-10 " data-aos="fade-up">
            {" "}
            <span className="text-customBlue">Our </span>
            Journey
          </h2>
          <p className="text-base mt-2 lg:ml-10 font-[Rubik] lg:text-lg lg:mt-8" data-aos="fade-up">
            Founded on the principles of integrity and excellence, GVS has grown
            into a trusted partner for businesses seeking to enhance their
            hiring processes. Our journey began with a simple yet powerful idea:
            to provide employers with the confidence they need in their hiring
            decisions through meticulous verification of previous employment.
          </p>
        </div>
        <div className="md:w-1/2 px-4" data-aos="fade-up">
          <img
            src="/About/72.png"
            alt="Description"
            className="w-full h-auto "
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-around p-4">
        <div className="w-1/2 hidden md:flex justify-center items-center" data-aos="fade-up">
          <img
            src="/About/73.png"
            alt="Description"
            className="w-auto max-w-[350px]  h-auto border-2 border-customBlue rounded-lg"
          />
        </div>
        <div className="md:w-1/2 p-4">
          <h2 className="text-2xl font-bold mb-2 lg:text-6xl lg:ml-10" data-aos="fade-up">
            {" "}
            <span className="text-customBlue">What </span>
            we do
          </h2>
          <p className="text-base mt-2 lg:ml-10 font-[Rubik] lg:text-lg lg:mt-8" data-aos="fade-up">
            At GVS, we specialize in previous employment verification, helping
            businesses verify the authenticity of their candidates' work
            histories. Our services are designed to mitigate risks, improve
            decision-making, and ensure compliance with industry standards. We
            leverage advanced technology and expert insights to deliver
            accurate, secure, and confidential verification results.
          </p>
        </div>
        <div className="md:w-1/2 px-4 lg:hidden " data-aos="fade-up">
          <img
            src="/About/73.png"
            alt="Description"
            className="w-auto max-w-[250px] my-10  h-auto border-2 border-customBlue rounded-lg"
          />
        </div>
      </div>

      {/* <div className="bg-customGrey">
        <div>
          <h1 className="text-center mt-6 text-2xl font-bold pt-6 lg:text-6xl">
            Our Commitment<span className="text-customBlue"> to You</span>
          </h1>
        </div>

        <div className="mt-6 px-6 grid grid-cols-1 sm:grid-cols-2 gap-6 pb-10 lg:px-28 lg:py-20 lg:gap-12">
          <div className="bg-white p-4 shadow-md rounded-lg hover:bg-blue-200 duration-300 hover:shadow-2xl">
            <h2 className="text-lg font-semibold lg:text-3xl">
              Accuracy and Reliability
            </h2>
            <p className="text-base mt-2 lg:text-xl">
              We understand the importance of accurate information. Our
              verification process is thorough, ensuring that every detail is
              checked and validated.
            </p>
          </div>
          <div className="bg-white p-4 shadow-md rounded-lg hover:bg-blue-200 duration-300 hover:shadow-2xl">
            <h2 className="text-lg font-semibold lg:text-3xl">
              Security and Confidentiality
            </h2>
            <p className="text-base mt-2 lg:text-xl">
              We prioritize the security and confidentiality of your data. Our
              processes are designed to protect sensitive information, providing
              you with peace of mind.
            </p>
          </div>
          <div className="bg-white p-4 shadow-md rounded-lg hover:bg-blue-200 duration-300 hover:shadow-2xl">
            <h2 className="text-lg font-semibold lg:text-3xl">
              Customer-Centric Approach
            </h2>
            <p className="text-base mt-2 lg:text-xl">
              Your satisfaction is our top priority. We work closely with you to
              understand your needs and provide tailored verification solutions
              that meet your specific.
            </p>
          </div>
          <div className="bg-white p-4 shadow-md rounded-lg hover:bg-blue-200 duration-300 hover:shadow-2xl">
            <h2 className="text-lg font-semibold lg:text-3xl">
              Innovation and Excellence
            </h2>
            <p className="text-base mt-2 lg:text-xl">
              We continuously innovate to improve our services. Our commitment
              to excellence drives us to adopt the latest technologies and best
              practices in the industry.
            </p>
          </div>
        </div>
      </div> */}
      <Commitment />
      <Whygvs/>
      

      <div className="flex flex-col md:flex-row items-center justify-between p-4 ">
        <div className="md:w-1/2 p-4 lg:ml-20">
          <h2 className="text-2xl font-bold mb-2 lg:text-6xl" data-aos="fade-up">
            {" "}
            Join Us in
            <span className="text-customBlue"> Building Trust</span>
          </h2>
          <p className="text-base mt-2 lg:text-xl lg:mt-8" data-aos="fade-up">
            Founded on the principles of integrity and excellence, GVS has grown
            into a trusted partner for businesses seeking to enhance their
            hiring processes. Our journey began with a simple yet powerful idea:
            to provide employers with the confidence they need in their hiring
            decisions through meticulous verification of previous employment.
          </p>
          <button className=" lg:mt-8 lg:text-4xl lg:py-2 text-white bg-customBlue mt-4 px-4 rounded-lg  font-bold text-lg" data-aos="fade-up">
            JOIN US
          </button>
        </div>
        <div className="md:w-1/2 px-4" data-aos="fade-up">
          <img
            src="/About/74.png"
            alt="Description"
            className="w-full h-auto"
          />
        </div>
      </div>
      <Slider />
      <Location />
      
    </div>
  );
}
