// src/Section1.jsx
import React , {useEffect} from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Section1 = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      
    });})
  return (
    <div className=" w-full h-auto ">
    {/* <div className="absolute inset-0 bg-bgBlue rounded-br-full "></div> */}

    {/* Main Content */}
    <div className="flex flex-col md:flex-row items-center justify-center p-4 md:p-8 h-full ">
      <div className="md:w-1/2  flex flex-col items-center md:items-start md:ml-10">
        <h2 className="md:text-5xl text-3xl font-bold my-4 mt-10 text-[#005b96] text-center" data-aos="fade-up">
          Genuine Credentials <br /> Confident Decisions
        </h2>
        <p className="text-xl mb-4 font-semibold text-center mt-10 md:mt-12 md:text-start " data-aos="fade-up">
          Empower your business with verified academic <br /> achievements and professional licenses.
        </p>
        <Link to='/contact-us'>
        <button className="text-xl mt-4 px-6 py-2 mb-16 bg-blue-600 hover:bg-blue-800  text-white font-semibold rounded-xl " data-aos="fade-up">
          Contact Sales
        </button>
        </Link>

        {/* <div className="mt-4"></div> */}
        <ul className="text-left mt-4" data-aos="fade-up">
          <li className="flex items-center mb-2 text-lg">
            <img src="/tickmark.png" alt="Blue Tick" className="w-7 h-7 mr-2" />
            Verify to Trust: Confirm Educational Credentials
          </li>
          <li className="flex items-center mb-2 text-lg">
            <img src="/tickmark.png" alt="Blue Tick" className="w-7 h-7 mr-2" />
            Secure Your Business with Verified Education
          </li>
          <li className="flex items-center mb-2 text-lg">
            <img src="/tickmark.png" alt="Blue Tick" className="w-7 h-7 mr-2" />
            Protect your organization against liability claims
          </li>
          <li className="flex items-center text-lg">
            <img src="/tickmark.png" alt="Blue Tick" className="w-7 h-7 mr-2" />
            Reduce Risk with Reliable Education Verification
          </li>
        </ul>
      </div>

      <div className="md:w-1/2 p-4 z-[-1]">
        <img src="/home1.png" alt="" className="w-full h-auto object-cover rounded-tl-lg rounded-br-none md:w-auto lg:w-auto xl:w-auto" data-aos="fade-up"/>
      </div>
    </div>
  </div>
  );
}

export default Section1;
