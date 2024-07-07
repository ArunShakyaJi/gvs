// src/Section1.jsx
import React , {useEffect} from "react";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Due = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      
    });})
  return (
    <div className="  ">
      <div className=" inset-0 lg:h-3/4 z-0">
        <div className="flex flex-col md:flex-row p-4 md:p-8 bg-slate-100 ">
          <div className="md:w-1/2 p-4 flex flex-col items-center lg:items-start w-full lg:w-2/3 ">
            <h2 className="text-2xl font-[Poppins] mt-6 font-bold lg:text-5xl lg:font-bold mb-4 text-customBlue  lg:text-left  md:py-10" data-aos="fade-up">
              Identity Unlock Financial Clarity with Expert Due Diligence
            </h2>
            <p className="text-lg mb-4 lg:mt-8 lg:text-xl md:mr-20 mt-8  lg:font-semibold  lg:text-left pb-10" data-aos="fade-up">
              Gain clarity and confidence in your financial decisions. Our
              meticulous analysis uncovers critical insights, empowering you to
              navigate with certainty and seize opportunities.
            </p>
            <Link to="/contact-us">
              <button className="text-xl mt-4 px-6 py-2 text-white font-semibold font-[Rubik]  cursor-pointer rounded-xl bg-blue-600 hover:bg-blue-8000 lg:text-2xl lg:mr-96" data-aos="fade-up">
                Contact Sales
              </button>
            </Link>
          </div>
          <div className="md:w-1/2 w-full h-auto ">
            <img
              src="/DueDeligence/61.png"
              data-aos="fade-up"
              alt="Example"
              className=" w-full h-auto object-cover rounded-tl-lg md:rounded-br-none lg:w-auto xl:w-auto"
            />
          </div>
        </div>
      </div>
      <div className="lg:text-center  lg:text-5xl font-[Poppins] lg:mt-20 lg:font-bold px-6  mt-6 text-3xl font-bold" data-aos="fade-up">
        Kickstart Your Financial Due Diligence in Three Easy Steps
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center p-4 md:p-8 bg-white ">
        <div className="md:w-1/2 p-4">
          <img
            src="/DueDeligence/62.png"
            alt=""
            className="w-full h-auto object-cover rounded-tl-lg rounded-br-none md:w-90 lg:w-120 xl:w-144"
            data-aos="fade-up"
          />
        </div>

        <div className="md:w-2/5 ml-2 mr-2">
          <div className="mt-4"></div>
          <ul className="text-left mt-4">
            <li className="flex items-start mb-4" data-aos="fade-up">
              <img
                src="/DueDeligence/badge.jpg"
                alt="Blue Tick"
                className="lg:w-16 w-14 h-auto mr-2 lg:mr-8 mt-5 rounded-full"
              />
              <div className="">
                <h3 className="text-customBlue font-semibold lg:text-2xl">
                  Activate Qualification Check
                </h3>
                <p className="lg:text-md font-semibold">
                  Initiate the background check process by selecting the
                  candidate for Financial Due Deligence
                </p>
              </div>
            </li>
            <li className="flex items-start mb-4" data-aos="fade-up">
              <img
                src="/DueDeligence/talk.png"
                alt="Blue Tick"
                className="lg:w-16 w-14 h-auto mr-2 lg:mr-8 mt-5 rounded-full"
              />
              <div className="lg:mt-6" data-aos="fade-up">
                <h3 className="text-customBlue font-semibold lg:text-2xl">
                  Run thorough checks
                </h3>
                <p className="lg:text-md font-semibold">
                  Tour team will thoroughly verify using comprehensive databases
                  to ensure you receive the most accurate and reliable results.
                </p>
              </div>
            </li>
            <li className="flex items-start mb-4" data-aos="fade-up">
              <img
                src="/DueDeligence/verify.jpg"
                alt="Blue Tick"
                className="lg:w-16 w-14 h-auto mr-2 lg:mr-8 mt-5 rounded-full"
              />
              <div className="lg:mt-6" >
                <h3 className="text-customBlue font-semibold lg:text-2xl" >
                  Download detailed report
                </h3>
                <p className="lg:text-md font-semibold" data-aos="fade-up">
                  Download a comprehensive report that provides detailed
                  insights and findings from the verification process.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="lg:ml-20 lg:text-5xl  lg:font-bold text-customBlue text-2xl font-[Poppins] drop-shadow-sm font-bold mx-9" data-aos="fade-up">
        {" "}
        Unveiling Financial Fortunes The Vital Role of Due Diligence
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center p-4 md:p-8 bg-white lg:ml-10 ">
        <div className="md:w-1/2 p-4 flex flex-col ">
          <p className="text-lg mb-4 font-[Rubik]  lg:text-md text-gray-700" data-aos="fade-up">
            Navigate financial landscapes with confidence through meticulous due
            diligence. Assessing data, market trends, and compliance ensures
            informed decisions and mitigates risks. Essential for transparency
            and trust, due diligence guides strategic transactions and supports
            sustainable growth in dynamic markets.
          </p>
          <div className="mt-4"></div>
          <ul className="text-left mt-4">
            <li className="flex items-center mb-2 text-lg lg:text-2xl text-blue-600 font-semibold" data-aos="fade-up">
              <img
                src="/DueDeligence/ticky.png"
                alt="Blue Tick"
                className="w-7 h-7 mr-2 lg:mr-4"
              />
              Prevention of Conflicts of Interest
            </li>
            <div className="mt-4"></div>
            <li className="flex items-center mb-2 text-lg lg:text-2xl text-blue-600 font-semibold" data-aos="fade-up">
              <img
                src="/DueDeligence/ticky.png"
                alt="Blue Tick"
                className="w-7 h-7 mr-2 lg:mr-4"
              />
              Regulatory Compliance
            </li>
            <div className="mt-4"></div>
            <li className="flex items-center mb-2 text-lg lg:text-2xl text-blue-600 font-semibold" data-aos="fade-up">
              <img
                src="/DueDeligence/ticky.png"
                alt="Blue Tick"
                className="w-7 h-7 mr-2 lg:mr-4"
              />
              Reduction in Internal Theft and Fraud
            </li>
            <div className="mt-4"></div>
            <li className="flex items-center text-lg lg:text-2xl text-blue-600 font-semibold" data-aos="fade-up">
              <img
                src="/DueDeligence/ticky.png"
                alt="Blue Tick"
                className="w-7 h-7 mr-2 lg:mr-4"
              />
              Enhanced Long term Stability
            </li>
          </ul>
        </div>
        <div className="md:w-1/2 p-4">
          <img
            src="/DueDeligence/63.png"
            alt=""
            className="w-full h-auto object-cover rounded-tl-lg rounded-br-none md:w-90 lg:w-120 xl:w-144"
          />
          <button className="bg-blue-600 hover:bg-blue-800 text-white  px-6 ml-8 lg:px-8 rounded-full lg:text-4xl lg:font-bold lg:w-full lg:py-4" data-aos="fade-up">
            Ensuring Financial Integrity<br></br>
            and Informed Decisions
          </button>
        </div>
      </div>

      <div className="lg:text-6xl lg:font-bold lg:text-center lg:ml-20 lg:mr-20 text-customBlue lg:mt-20 px-6 font-bold text-2xl  " data-aos="fade-up">
        What Makes Genuine Verification Services Unique?
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center p-6">
        <div className="md:w-4/5 p-4 flex flex-col items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 " data-aos="fade-up">
            <div className="flex justify-start gap-10 items-center text-center   border-4 shadow-blue-left-bottom p-2 mb-10 " data-aos="fade-up">
              <img
                src="/DueDeligence/64.png"
                alt="Blue Tick"
                className="w-16 h-auto mr-5"
                data-aos="fade-up"
              />
              <p className="text-xl  lg:text-2xl font-semibold lg:py-4 ">
                Comprehensive <br />
                Verification Solutions
              </p>
            </div>
            <div className="flex justify-start items-center text-center gap-10  border-4 shadow-blue-left-bottom p-4 mb-10 " data-aos="fade-up">
              <img
                src="/DueDeligence/65.png"
                alt="Blue Tick"
                className="w-16 h-auto mr-5"
              />
              <p className="text-xl  lg:text-2xl font-semibold lg:py-4  ">
                Global Reach
              </p>
            </div>
            <div className="flex justify-start gap-10 items-center text-center    border-4 shadow-blue-left-bottom p-4 mb-10 " data-aos="fade-up">
              <img
                src="/DueDeligence/66.png"
                alt="Blue Tick"
                className="w-16 h-auto mr-5"
              />
              <p className="text-xl  lg:text-2xl font-semibold lg:py-4  ">
                Customer Centric Approach
              </p>
            </div>
            <div className="flex justify-start gap-10 items-center  text-center border-4 shadow-blue-left-bottom p-4 mb-10" data-aos="fade-up">
              <img
                src="/DueDeligence/67.png"
                alt="Blue Tick"
                className="w-16 h-auto mr-5"
              />
              <p className="text-xl  lg:text-2xl font-semibold lg:py-4 ">
                Transparency and Trust
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className=" lg:mt-10  text-customBlue lg:text-5xl font-[Poppins]  lg:ml-20 lg:mr-20 lg:text-center lg:font-semibold px-6 font-bold text-2xl" data-aos="fade-up">
        Securing Financial Futures with Expert Due Diligence
      </div>
      <div className="flex flex-col lg:flex-row lg:mt-8" data-aos="fade-up">
        <img
          src="/DueDeligence/68.png"
          alt="Image"
          className="w-full lg:w-1/2  mt-4 lg:mr-4 lg:mb-0 lg:mt-0 px-6 lg:rounded-none"
        />
        <div className="p-4 rounded-lg w-full lg:w-1/2" data-aos="fade-up">
          <p className="text-lg lg:text-xl font-normal font-[Rubik] px-8 lg:my-10 ">
            Empower your financial decisions with our expert due diligence,
            ensuring clarity, mitigating risks, and paving the way for strategic
            growth and sustainable success in dynamic markets.
          </p>
          <button className="text-2xl lg:text-4xl font-bold text-white px-4 bg-blue-600 hover:bg-blue-800mx-8 mt-4 lg:mt-6 py-2  rounded-xl " data-aos="fade-up">
            CONTACT US
          </button>
        </div>
      </div>
    </div>
  );
};

export default Due;
