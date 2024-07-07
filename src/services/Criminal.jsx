import React , {useEffect} from "react";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function Criminal() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      
    });})
  return (
    <div>
      <div className="w-screen h-
      auto flex flex-col md:flex-row bg-slate-100">
        <div className="w-full md:w-1/2 flex flex-col p-4 md:pl-10 ml-10 md:my-16  ">
          <div className="flex ">
            <h1 className="text-3xl  text-slate-700 md:text-5xl font-semibold font-[Poppins] mb-2" data-aos="fade-up">
              Build a Safe
            </h1>
            <img
              src="/CriminalCheck/52.png"
              className="w-auto max-w-[30px] md:max-w-[50px] mb-2 "
              data-aos="fade-up"
            />
          </div>
          <h1 className="text-3xl md:text-5xl text-slate-700 font-semibold font-[Poppins] mb-2" data-aos="fade-up">
            Team with GVS <br />
            Criminal Record
          </h1>
          <span className="flex gap-5">
            <h1 className="text-3xl md:text-5xl text-slate-700 font-semibold font-[Poppins]" data-aos="fade-up">
              Checks
            </h1>
            <img
              src="/CriminalCheck/53.png"
              className="w-auto max-w-[30px] md:max-w-[50px] mb-2"
              data-aos="fade-up"
            />
          </span>

          <p className="md:mr-28 py-10 mr-14" data-aos="fade-up">
            Trust GVS for meticulous criminal record checks. Our advanced
            technology ensures thorough screening to safeguard your team and
            make informed hiring decisions.
          </p>

          <Link
              to="/Contact-us"
              className="flex justify-center lg:justify-start  pt-10 "
            >
              <button className="bg-[#3f47df] hover:bg-blue-800 text-white font-[Poppins]  rounded-md font-bold text-xl px-4 py-2 lg:p-4 lg:mt-10 sm:p-2 sm:px-4 sm:py-2 " data-aos="fade-up">
                VERIFY TODAY
              </button>
            </Link>
          
        </div>

        <div className=" flex justify-center items-center md:justify-end p-4">
          <img
            src="/CriminalCheck/51.png"
            className="w-full max-w-[400px] h-[400px]"
            data-aos="fade-up"
          />
        </div>
      </div>

      <div className="my-10" data-aos="fade-up" >
        <h2 className="text-center text-3xl font-bold font-[Poppins] mt-4 lg:text-7xl lg:font-semibold ">
          List of Courts Covered
        </h2>
      </div>

      <div className="flex flex-col   md:flex-row justify-start items-center md:items-start p-4 md:p-8 space-y-4 md:space-y-0 md:space-x-4">
        <div className="w-full md:w-1/2 flex justify-center lg:w-1/2">
          <img
            src="/CriminalCheck/54.webp"
            alt="Example"
            className="max-w-full h-auto p-10 rounded-lg"
            data-aos="fade-up"
          />
        </div>

        <div className="w-full md:w-1/2 flex flex-col justify-center items-start gap-10 py-10 px-6">
          <div className=" flex  justify-center md:justify-center items-center md:items-center flex-row gap-x-6 " data-aos="fade-up"> 
            <img src="/CriminalCheck/55.png" className="w-14 lg:w-20" />
            <p className="text-xl  font-semibold  " >
              High Courts and Supreme Court of India 
            </p>
          </div>
          <div className="flex  justify-center md:justify-center items-center md:items-center flex-row gap-x-6" data-aos="fade-up">
            <img src="/CriminalCheck/56.png" className="w-14  lg:w-20 " />
            <p className="text-xl font-semibold  ">
              Courts and NCRDC commission
            </p>
          </div>
          <div className="flex  justify-center md:justify-center items-center md:items-center flex-row gap-x-6" data-aos="fade-up">
            <img src="/CriminalCheck/57.png" className="w-14  lg:w-20" />
            <p className="text-xl font-semibold  ">
              District court and tribunals
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row  items-center md:items-start p-4 md:p-8 space-y-4 md:space-y-0 md:space-x-8 ml-2 lg:ml-20">
        <div className="w-full md:w-1/2 lg:2/3">
          <h2 className="text-2xl font-bold lg:text-5xl font-[Poppins] md:text-4xl" data-aos="fade-up">
            Information you'll know from Criminal Record Check{" "}
          </h2>
          <p className="text-lg mt-4 font-semibold  md:text-xl" data-aos="fade-up">
            Criminal Record Check helps employers gain additional information
            about your candidates such as:
          </p>
          <ul className="list-none mt-6 ">
            <li className="flex items-start mb-4" data-aos="fade-up">
              <img
                src="/CriminalCheck/ticky.png"
                alt="Bullet 1"
                className="w-6 h-6 mr-2 lg:mt-2 "
              />
              <span className="text-lg font-[Rubik] lg:ml-2  md:text-xl" >
                Liens and foreclosures
              </span>
            </li>
            <li className="flex items-start mb-4" data-aos="fade-up">
              <img
                src="/CriminalCheck/ticky.png"
                alt="Bullet 2"
                className="w-6 h-6 mr-2 lg:mt-2"
              />
              <span className="text-lg font-[Rubik] lg:ml-2  md:text-xl">
                Personal restraining orders
              </span>
            </li>
            <li className="flex items-start mb-4" data-aos="fade-up">
              <img
                src="/CriminalCheck/ticky.png"
                alt="Bullet 3"
                className="w-6 h-6 mr-2 lg:mt-2"
              />
              <span className="text-lg font-[Rubik] lg:ml-2  md:text-xl">
                Civil rights violations
              </span>
            </li>
            <li className="flex items-start mb-4" data-aos="fade-up">
              <img
                src="/CriminalCheck/ticky.png"
                alt="Bullet 4"
                className="w-6 h-6 mr-2 lg:mt-2"
              />
              <span className="text-lg font-[Rubik] lg:ml-2  md:text-xl">
                Tax claims and disputes
              </span>
            </li>
            <li className="flex items-start mb-4" data-aos="fade-up">
              <img
                src="/CriminalCheck/ticky.png"
                alt="Bullet 4"
                className="w-6 h-6 mr-2 lg:mt-2"
              />
              <span className="text-lg font-[Rubik] lg:ml-2  md:text-xl">
                Criminal cases
              </span>
            </li>
          </ul>
        </div>

        <div className="w-full md:w-1/2 lg:w-1/3   flex justify-center">
          <img
            src="/CriminalCheck/58.png"
            alt="Example"
            className="max-w-full h-auto p-4 lg:mt-10 lg:w-full md:mt-20  "
          />
        </div>
      </div>
      <div className="text-2xl font-bold p-4  lg:text-center  lg:font-bold lg:text-5xl lg:mt-10 md:text-3xl" data-aos="fade-up">
        Detailing GVS's Methodology for Criminal Verifications
      </div>

      <div className="w-full md:w-full flex flex-col md:flex-row justify-around items-center md:items-start md:text-left lg:px-18  lg:w-full">
        <div className="md:flex-1 bg-blue p-4 m-6  shadow-custom-black flex flex-col justify-between md:mx-20">
          <div>
            <div className="flex  justify-start md:justify-start items-center md:items-center flex-row gap-x-6">
            <img
              src="/CriminalCheck/59.png"
              className="w-8"
              alt="Court Check on Law Firm Letterhead"
              data-aos="fade-up"
            />
            <p className="text-2xl font-bold text-center" data-aos="fade-up">
              Court Check on Law Firm Letterhead
            </p>
            </div>
            <p className="text-xl font-semibold mt-4" data-aos="fade-up">
              Based on the address information of the candidate, the nearest
              police station is contacted. Our Law Firm partner will run a
              thorough check and produce a final report with the comments from
              the concerned authorities.
            </p>
          </div>
        </div>
        <div className="md:flex-1 mt-2 bg-blue p-4 m-6 shadow-custom-black flex flex-col justify-between lg:mt-6 md:mt-6">
          <div>
            <div className="flex  justify-start md:justify-start items-center md:items-center flex-row gap-x-6">
            <img
              src="/CriminalCheck/55.png"
              className="w-10 "
              alt="Court Record Verification"
              data-aos="fade-up"
            />
            <h2 className="text-2xl font-bold mt-4" data-aos="fade-up">
              Court Record Verification
            </h2>
            </div>
            <p className="text-xl font-semibold mt-4 lg:mb-8 md:mb-20" data-aos="fade-up">
              Get detailed information of any lawsuits, criminal cases, or
              ongoing trials against the candidate.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center md:items-start p-4 md:p-8 space-y-4 md:space-y-0 md:space-x-8 ">
        <div className="w-full md:w-1/2 flex justify-center" data-aos="fade-up">
          <img
            src="/CriminalCheck/60.png"
            alt="Example"
            className="max-w-full h-auto"
            data-aos="fade-up"
          />
        </div>

        <div className="">
          <h2 className="text-2xl font-bold ml-4 lg:font-bold lg:text-5xl lg:mt-36 md:text-4xl md:mt-18" data-aos="fade-up">
            Ready to get started <br/> with us?
          </h2>
          <p className="text-lg ml-4 lg:text-2xl font-[Cabin] lg:mt-10 md:text-xl" data-aos="fade-up">
            Partner with the most robust background verification service for a
            safe and secure workplace.
          </p>
          <Link to="/contact-us">
          <button className="text-2xl lg:ml-36 font-[Rubik] font-semibold px-4 text-white bg-customBlue hover:bg-blue-700 rounded-3xl hover:shadow-lg ml-18 my-24   lg:text-5xl lg:px-6 lg:py-4 md:text-4xl " data-aos="fade-up">
            CONTACT US
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
