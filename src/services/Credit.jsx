import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Credit() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      
    });})
  return (
    <div>
      <div className="bg-blue-100 flex flex-col md:flex-row ">
        <div className="w-screen md:w-1/2 my-16">
          <h2 className="lg:text-5xl font-bold text-center md:text-start text-4xl  my-12 md:ml-16 " data-aos="fade-up">
            Reliable Credit Check
            <br />
            for Candidates
          </h2>

          <p className="lg:text-2xl text-gray-800 font-semibold md:font-semibold text-center mt-4 text-xl mx-4 md:text-start md:ml-16 " data-aos="fade-up">
            Ensure financial integrity with GVS's dependable credit checks.
            <br />
            Gain clear insights and make informed hiring decisions effortlessly.
          </p>

          <Link to='/contact-us' className="flex justify-center md:justify-start md:ml-16">
          <button className="text-center bg-blue-600 hover:bg-blue-800 text-white rounded-xl px-4 py-2 text-2xl font-bold  md:text-start  mt-10 lg:ml-200 lg:mt-16 lg:text-3xl my-16 " data-aos="fade-up">
            CONTACT US
          </button>
          </Link>
        </div>

        <div className="w-screen mb-10 md:mb-0  md:w-1/2 flex justify-center ">
          <img
            src="/CreditCheck/40.png"
            className="w-full bg-contain  h-auto  "
            data-aos="fade-up"
          />
        </div>
      </div>

      <div className=" mt-10 flex flex-col md:flex-row w-full max-w-full  overflow-hidden " >
        <div className="md:w-1/2 flex justify-center items-center ">
          <img src="/CreditCheck/41.jpg" className="w-full max-w-[500px] h-auto"  data-aos="fade-up"/>
        </div>
        <div className="md:w-1/2  p-8  ">
          <h1 className="text-2xl font-semibold mb-6 lg:text-5xl font-[Poppins]" data-aos="fade-up">
            Need for Credit Checks
          </h1>
          <p className=" lg:text-xl md:pr-10 font-semibold " data-aos="fade-up">
            Individuals with a bad track record of financial management can
            directly have an impact on your brand image and reputation. Thus,
            running credit checks can be helpful for:
          </p>

          <ul className="list-none mt-4 lg:text-xl lg:mt-8" >
            <li className="flex items-center mb-2" data-aos="fade-up">
              <img
                src="/CreditCheck/verify.jpg"
                alt="bullet"
                className="w-6 h-auto mr-2 lg:w-8 "
              />
              <span>Employees who manage your company finances</span>
            </li>
            <li className="flex items-center mb-2 lg:mt-4" data-aos="fade-up">
              <img
                src="/CreditCheck/verify.jpg"
                alt="bullet"
                className="w-6 h-auto mr-2 lg:w-8 "
              />
              <span>Accounting and Stakeholder management</span>
            </li>
            <li className="flex items-center mb-2 lg:mt-4" data-aos="fade-up">
              <img
                src="/CreditCheck/verify.jpg"
                alt="bullet"
                className="w-6 h-auto mr-2 lg:w-8 "
              />
              <span>Employees in the banking and fintech sector</span>
            </li>
            <li className="flex items-center mb-2 lg:mt-2" data-aos="fade-up">
              <img
                src="/CreditCheck/verify.jpg"
                alt="bullet"
                className="w-6 h-auto mr-2 lg:w-8 "
              />
              <span>Hiring for Executive-level and Financial roles</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center px-4 lg:mt-20">
        <div className="lg:w-2/3 mb-4 lg:mb-0 lg:mr-4 lg:ml-10  ">
          <p className=" text-2xl lg:text-5xl lg:text-start text-center font-bold  mx-4" data-aos="fade-up">
            Insights Gained from Credit Checks
          </p>
          <p className="lg:text-xl font-[Rubik]   lg:mt-6 mx-4 " data-aos="fade-up">
            Credit checks are essential for employers hiring for key financial
            and managerial positions. Here's what you can discover with GVS
            Credit Verifications
          </p>

          <div className="flex flex-col md:flex-row items-start pt-6  md:pl-4 lg:mt-8 md:space-y-0 md:space-x-4">
            

            <div className=" lg:ml-4 rounded-md  md:w-1/2 ml-6 mt-3" data-aos="fade-up">
              <img src="/CreditCheck/43.png" className="w-8 lg:w-10" />
              <p className="lg:text-xl ">
                Candidate's complete <br/> financial history.
              </p>
            </div>
            <div className=" lg:ml-4 rounded-md  md:w-1/2 ml-6 mt-4" data-aos="fade-up">
              <img src="/CreditCheck/44.png" className="w-8 lg:w-10" />
              <p className="lg:text-xl ">
                Noticeable flags due to bad loans,<br/> bankruptcy or debts
              </p>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2">
          <img src="/CreditCheck/42.png" className="w-full h-auto " />
        </div>
      </div>

      <div className="text-center font-semibold text-xl lg:mt-20 font-[Poppins] lg:text-5xl mt-10" data-aos="fade-up">
        
        Ready to Enhance Your Hiring
        <br />
        Process with GVS?
      </div>

      <div className=" mt-4  flex flex-col md:flex-row w-full max-w-full bg-white  overflow-hidden ">
        <div className="md:w-1/2 w-2/3 ml-14 lg:w-1/2">
          <img src="/CreditCheck/45.png" className="w-full h-auto" data-aos="fade-up" />
        </div>
        <div className="md:w-1/2 w-full p-8 lg:w-1/2">
          <p className="lg:text-3xl lg:text-center lg:mt-24 font-[Rubik]" data-aos="fade-up">
            Get thorough insights into your candidate's financial history by
            running credit verifications
          </p>
          <Link to='/contact-us' >
          <button className="text-center bg-blue text-white bg-blue-600 hover:bg-blue-800 rounded-2xl px-2 text-2xl font-bold ml-14 mt-4 lg:px-8 lg:text-4xl lg:py-2 lg:ml-36 lg:mt-12" data-aos="fade-up">
            VERIFY NOW
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
