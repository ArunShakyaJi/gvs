import React , {useEffect} from "react";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';

function PreviousEmployement() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });})
  return (
    <>
      <section className="bg-slate-100 mb-10">
        <div className="flex flex-col md:flex-row ">
          <div className="md:w-1/2 w-screen flex flex-col justify-start items-start mt-12">
            <h1 className="text-3xl text-[#005b96] md:text-5xl mx-10 font-[Poppins] font-semibold mx:10 md:mx-16 my-12 md:my-12 " data-aos="fade-up">
              Employement track Record Check
            </h1>
            <h5 data-aos="fade-up" className="text-black mx-10 text-xl md:text-2xl font-semibold font-[Rubik] mx:10 md:mx-16  ">
              Rapid Work History <br />
              Validation
            </h5>
            <p data-aos="fade-up" className="text-sm text-black md:mx-16 mx-10 md:pr-32 my-4">
              Experience effortless ex-employee verification on autopilot -
              seamless, accurate, and lightning-fast. Tailored for trust-
              focused team leaders.
            </p>
            <Link to='/contact-us'>
            <button data-aos="fade-up" className="bg-blue-600 hover:bg-blue-800 text-white  font-[Rubik] mx-10 md:mx-16  px-4 py-2 rounded-lg">
              Verify Now
            </button>
            </Link>
            <div data-aos="fade-up" className="flex flex-col md:flex-row my-8">
              <div className="flex mx-10 md:mx-16 w-1/2">
                <p className="font-semibold text-xl">
                 <span className="font-bold text-xl">20+</span>  <br />
                  Multinational businesses have used GVS
                </p>
              </div>
              <div className="flex mx-10 w-1/2">
                <p className="font-semibold text-xl">
                <span className="font-bold">4K+</span>  <br />
                  Daily transactions from around the world
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center ">
            <img
            data-aos="fade-up"
              src="/PreviosEmployement/128.png"
              className="w-auto px-8 md:px-0 md:py-0 py-8  md:max-w-[500px] md:h-auto h-[300px]"
            />
          </div>
        </div>
      </section>
      <section className="mb-10 ">
        <div className="flex flex-col md:flex-row gap-x-10">
          <div className="flex justify-center items-center ">
            <img
            data-aos="fade-up"
              src="/PreviosEmployement/123.png"
              className="w-auto px-8 md:px-4 md:py-0 py-8  md:max-w-[500px] md:h-auto h-[300px]"
            />
          </div>
          <div className="flex flex-col justify-start items-start my-10 " data-aos="fade-up">
            <h1 className="text-3xl md:text-5xl font-semibold font-[Poppins] mx-10 my-10">
              GVS: The key to Verified Work Paths
            </h1>
            <p className="font-semi text-2xl md:mr-44 mx-10 my-6">
              Experience effortless ex-employee verification - seamless,
              accurate, and lightning-fast. Tailored for trust-focused team
              leaders.
            </p>
            <div className="ml-9 my-1 flex justify-center items-center gap-4 md:gap-10" data-aos="fade-up">
              <img src="/CriminalCheck/ticky.png" className="w-8" />
              <p className="font-bold text-xl">Comprehensive Employment History Checks</p>
            </div>
            <div className="ml-9 my-1 flex justify-center items-center  gap-4 md:gap-10" data-aos="fade-up">
              <img src="/CriminalCheck/ticky.png" className="w-8" />
              <p className="font-bold text-xl">Accurate Verification Methods</p>
            </div>
            <div className="ml-9 my-1 flex justify-center items-center  gap-4 md:gap-10" data-aos="fade-up">
              <img src="/CriminalCheck/ticky.png" className="w-8" />
              <p className="font-bold text-xl">Fast Turnaround Time</p>
            </div>
            <div className="ml-9 my-1 flex justify-center items-center  gap-4 md:gap-10" data-aos="fade-up">
              <img src="/CriminalCheck/ticky.png" className="w-8" />
              <p className="font-bold text-xl">Fraud Prevention</p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <h1 className="text-center w-screen text-xl md:text-4xl font-semibold font-[Poppins]" data-aos="fade-up"> 
          Insights Gained from Previous Employment Verification
        </h1>
        <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-44 my-10 md:my-20">
          <div className="flex flex-col justify-center items-center" data-aos="fade-up">
            <img src="/PreviosEmployement/125.png" className="w-14" />
            <p className="font-bold text-xl">Name</p>
          </div>
          <div className="flex flex-col justify-center items-center" data-aos="fade-up">
            <img src="/PreviosEmployement/127.png" className="w-14" />
            <p className="font-bold text-xl">Designation</p>
          </div>
          <div className="flex flex-col justify-center items-center" data-aos="fade-up">
            <img src="/PreviosEmployement/121.png" className="w-14" />
            <p className="font-bold text-xl">Date of Joining</p>
          </div>
          <div className="flex flex-col justify-center items-center" data-aos="fade-up">
            <img src="/PreviosEmployement/124.png" className="w-14" />
            <p className="font-bold text-xl">Last Working Day</p>
          </div>
        </div>
      </section>
      <sectin>
        <div className="flex md:flex-row flex-col">
          <div className="flex justify-center items-center md:w-1/2 ">
            <img
              src="/PreviosEmployement/126.png"
              className="w-auto px-8 md:px-0 md:py-0 py-8  md:max-w-[500px] md:h-auto h-[300px]"
            />
          </div>
          <div className="flex flex-col justify-center items-start md:w-1/2 my-16 ">
            <h1 className="text-5xl font-[Poppins] leading-11 font-semibold mx-10" data-aos="fade-up">Ready to get Started with us?</h1>
            <p className="mx-10 text-xl font-semibold my-10 " data-aos="fade-up">
              Confirm your candidate's authenticity by running a thorough
              Previous Employment Verification in an instant
            </p>
            <Link to='/contact-us'>
            <button data-aos="fade-up" className="bg-blue-600 hover:bg-blue-700 text-white font-[Rubik] mx-10 px-4 py-2 rounded-lg my-8">
              Verify Now
            </button>
            </Link>
          </div>
        </div>
      </sectin>
    </>
  );
}

export default PreviousEmployement;
