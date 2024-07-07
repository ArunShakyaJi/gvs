// src/Section1.jsx
import React , {useEffect} from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Employee = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      
    });})
  return (
    <div className="">
     <div className=" lg:h-3/4 bg-customGrey">
      <div className="flex flex-col md:flex-row  md:p-4  ">
        <div className="md:w-1/2 p-4 flex flex-col items-center lg:items-start w-full lg:w-2/3 lg:ml-20">
          <h2 className="text-2xl font-bold lg:text-5xl font-[Poppins] lg:font-bold lg:text-left mb-4 py-16 text-customBlue    " data-aos="fade-up">
          Build Trustworthy
          Teams with GVS
          Employee Verification
          </h2>
          <p className="text-lg font-[Rubik] mb-4  lg:text-xl lg:font-normal  lg:text-left" data-aos="fade-up">
          Building a reliable team starts with verifying the
          credentials and backgrounds of potential
          employees. At GVS, we offer thorough employee
          verification services to help you hire with
          confidence and protect your organization from
          potential risks.
          </p>
          <Link to='/contact-us' >
              <button className="bg-blue-600 hover:bg-blue-800 text-white  font-bold py-2 px-4  my-10 rounded-3xl text-3xl lg:p-6" data-aos="fade-up">
                CONTACT US
              </button>
              </Link>
        </div>
        <div className="md:w-1/2 w-full h-auto" data-aos="fade-up">
          <img src="/SolutionEmployee/81.png" alt="Example" className="w-full h-auto object-cover rounded-tl-lg px-4 lg:w-auto xl:w-auto" data-aos="fade-up" />
        </div>
      </div>
    </div>
      <div className='lg:text-center lg:text-5xl lg:mt-20 lg:font-bold px-6  mt-6 text-xl font-bold' data-aos="fade-up">Our Employee <span className='text-blue-500'> Verification Process </span>
    </div>
     



      <div className="flex flex-col md:flex-row items-center justify-center p-4 md:p-8 bg-white ">
      
      <div className="md:w-1/2 p-4">
        <img src="/SolutionEmployee/82.jpg" alt="" className="w-full h-auto object-cover rounded-tl-lg rounded-br-none md:w-90 lg:w-120 xl:w-144"  data-aos="fade-up"/>
      </div>
      
      
       
      <div className="md:w-2/5 ml-2 mr-2">
          <div className='mt-4'></div>
          <ul className="text-left mt-4">
            <li className="flex items-start mb-4" data-aos="fade-up">
              <img src="/SolutionEmployee/badge.jpg" alt="Blue Tick" className="lg:w-16 w-14 h-auto mr-2 md:mr-8 mt-5 rounded-full" />
              <div className='' >
                <h3 className='text-customBlue font-semibold font-[Rubik] lg:text-2xl'>Document Submission</h3>
                <p className='lg:text-md'>Initiate the background check process by
                Candidates submit their relevant documents for
                 verification. We ensure a secure and
                straightforward process for document collection.
</p>
              </div>
            </li>
            <li className="flex items-start mb-4" data-aos="fade-up">
              <img src="/SolutionEmployee/talk.png" alt="Blue Tick" className="lg:w-16 w-14 h-auto mr-2 lg:mr-8 mt-5 rounded-full" />
              <div className='lg:mt-6'>
                <h3 className='text-customBlue font-semibold font-[Rubik] lg:text-2xl'>Background Checks</h3>
                <p className='lg:text-md'>Conduct extensive background checks, including
                      criminal history, employment history, education
                       verification, and reference checks to confirm the
                       accuracy of the provided information.</p>
              </div>
            </li>
            <li className="flex items-start mb-4 " data-aos="fade-up">
              <img src="/SolutionEmployee/verify.jpg" alt="Blue Tick" className="lg:w-16 w-14 h-auto mr-2 md:mr-8 mt-5 rounded-full" />
              <div className='lg:mt-6'>
                <h3 className='text-customBlue font-semibold font-[Rubik] lg:text-2xl'>Detailed Reporting</h3>
                <p className='lg:text-md'>Download a comprehensive report that provides
                Provide comprehensive reports detailing the
                 verification results, highlighting any discrepancies or
                 issues discovered during the process.</p>
              </div>
            </li>
          </ul>
        </div>
        </div>



        <div className='lg:ml-20 lg:text-6xl lg:font-bold text-customBlue text-2xl px-6 font-bold' data-aos="fade-up"> 
        Benefits of Using GVS for Employee
         Verification</div>

        <div className="flex flex-col md:flex-row items-center justify-center p-4 md:p-8 bg-white lg:ml-10 ">
      
      
      
      <div className="md:w-1/2 p-4 flex flex-col ">
        
        <p className="text-base mb-4  lg:text-lg font-[Rubik]" data-aos="fade-up">
        At GVS, we streamline employee verification
        with secure document submission and
        comprehensive background checks. We
        examine criminal history, employment
        history, education credentials, and
        references. Our detailed reports highlight
       discrepancies, ensuring you make informed,
         confident hiring decisions with a clear
          understanding of each candidate s
        background.

        </p>
        <div className='mt-4'></div>
          <ul className="text-left mt-4">
            <li className="flex items-center mb-2 text-lg lg:text-2xl" data-aos="fade-up">
              <img src="/SolutionEmployee/ticky.png" alt="Blue Tick" className="w-7 h-7 mr-2 md:mr-4" />
              Enhanced Security
            </li>
            <div className='mt-4'></div>
            <li className="flex items-center mb-2 text-lg lg:text-2xl" data-aos="fade-up">
              <img src="/SolutionEmployee/ticky.png" alt="Blue Tick" className="w-7 h-7 mr-2 md:mr-4" />
              Informed Hiring Decisions
            </li>
            <div className='mt-4'></div>
            <li className="flex items-center mb-2 text-lg lg:text-2xl" data-aos="fade-up"> 
              <img src="/SolutionEmployee/ticky.png" alt="Blue Tick" className="w-7 h-7 mr-2 md:mr-4" />
              Compliance Assurance
            </li>
            <div className='mt-4'></div>
            <li className="flex items-center text-lg lg:text-2xl" data-aos="fade-up">
              <img src="/SolutionEmployee/ticky.png" alt="Blue Tick" className="w-7 h-7 mr-2 md:mr-4" />
              Efficient Hiring Process

            </li>
            <li className="flex items-center text-lg lg:text-2xl mt-4" data-aos="fade-up">
              <img src="/SolutionEmployee/ticky.png" alt="Blue Tick" className="w-7 h-7 mr-2 md:mr-4" />
              Risk Mitigation

            </li>
          </ul>
      </div>
      <div><img src='/SolutionEmployee/83.png' className='w-full px-10' data-aos="fade-up"/></div>
      </div>

      <section>
        <div className="lg:text-6xl lg:font-bold lg:text-center lg:ml-20 lg:mr-20 text-customBlue lg:mt-20 px-6 font-bold text-2xl  ">
          What Makes Genuine Verification Services Unique?
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center p-6">
          <div className="md:w-4/5 p-4 flex flex-col items-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 ">
              <div className="flex justify-start gap-10 items-center text-center   border-4 shadow-blue-left-bottom p-2 mb-10 " data-aos="fade-up">
                <img
                  src="/DueDeligence/64.png"
                  alt="Blue Tick"
                  className="w-16 h-auto mr-5"
                  
                />
                <p className="text-xl  lg:text-2xl font-semibold lg:py-4 " >
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
                <p className="text-xl  lg:text-2xl font-semibold lg:py-4  " >
                  Customer Centric Approach
                </p>
              </div>
              <div className="flex justify-start gap-10 items-center  text-center border-4 shadow-blue-left-bottom p-4 mb-10" data-aos="fade-up">
                <img
                  src="/DueDeligence/67.png"
                 
                  alt="Blue Tick"
                  className="w-16 h-auto mr-5"
                />
                <p className="text-xl  lg:text-2xl font-semibold lg:py-4 " >
                  Transparency and Trust
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>



     

     <div className=' lg:mt-10  text-customBlue lg:text-5xl font-[Poppins] lg:ml-20 lg:mr-20 lg:text-center lg:font-semibold px-6 font-bold text-2xl' data-aos="fade-up">Ensure Trust and Integrity in
     Your Workforce
     </div>
     <div className="flex flex-col lg:flex-row lg:mt-8">
      <img data-aos="fade-up" src="/SolutionEmployee/88.png" alt="Image" className="w-full lg:w-1/2 mb-4 mt-4 lg:mr-4 lg:mb-0 lg:mt-0 px-6 lg:rounded-none" />
      <div className="p-4 rounded-lg w-full lg:w-1/2 lg:mt-20">
        <p className='text-base  lg:text-2xl font-[Rubik]  px-6' data-aos="fade-up">
        Secure your hiring process with our expert
         verification, ensuring the integrity and
         reliability of your workforce.
        </p>
        <Link to='/contact-us' >
              <button className="bg-blue-600 hover:bg-blue-800 px-4 mx-6  text-white  font-bold py-2 my-10  md:mt-24 rounded-xl text-3xl lg:p-6" data-aos="fade-up">
                CONTACT US
              </button>
              </Link>
      </div>
    </div>


      </div>
    
  );
}

export default Employee;
