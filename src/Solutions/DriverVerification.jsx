import React , {useEffect} from "react";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';

function DriverVerification() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      
    });})
  return (
    <>
      <section className="bg-slate-100 mb-10">
        <div className="flex flex-col md:flex-row ">
          <div className="md:w-1/2 w-screen flex flex-col justify-start items-start">
            <h1 data-aos="fade-up" className="text-3xl text-[#005b96] md:text-5xl font-[Poppins] font-semibold mx:10 md:mx-16 my-12 md:my-12 ">
              Driving Forward with Confidence and Security
            </h1>

            <p className="text-xl font-semibold py-5 font-[Rubik]  text-black mx-16 md:pr-32 my-2 " data-aos="fade-up" >
              Trust GVS to verify your drivers, ensuring safety, reliability,
              and peace of mind for your organization and the public
            </p>
            <Link to="/contact-us">
              <button data-aos="fade-up" className="bg-blue-600 text-white text-2xl my-10 font-[Rubik] mx:10 md:mx-16  px-4 py-2 rounded-lg">
                Verify Now
              </button>
            </Link>
            <div className="flex flex-col md:flex-row my-8" data-aos="fade-up">
              <div className="flex mx:10 md:mx-16 w-1/2">
                <p className="font-semibold text-xl">
                  <span className="font-bold text-2xl">20+</span> <br />
                  Multinational businesses have used GVS
                </p>
              </div>
              <div className="flex mx-10 w-1/2">
                <p className="font-semibold text-2xl">
                  <span className="font-bold">4K+</span> <br />
                  Monthly Verification
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center " data-aos="fade-up">
            <img
              src="/DriverCheck/carimage.png"
              alt="car Image"
              className="w-auto px-8 md:px-0 md:py-0 py-8  md:max-w-[550px] md:h-auto h-[300px]"
            />
          </div>
        </div>
      </section>
      <section>
        <div data-aos="fade-up" className="lg:text-6xl lg:font-bold lg:text-center lg:ml-20 lg:mr-20 text-customBlue lg:mt-20 px-6 font-bold text-2xl  ">
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
                <p className="text-xl  lg:text-2xl font-semibold lg:py-4  " >
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
      </section>

      <section>
        <h1 className="text-center w-screen text-xl md:text-4xl lg:text-5xl font-semibold font-[Poppins]" data-aos="fade-up">
          Insights Gained from Previous Employment Verification
        </h1>
        <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-24 mx-32 my-10 md:my-20">
          <div className="flex flex-col justify-center items-start" data-aos="fade-up">
            <img src="/DriverCheck/8351119.jpg" className="w-14" />
            <p className="font-bold text-2xl py-2">Driving Licenses</p>
            <span className="font-semibold text-xl">
              Confirm the authenticity and validity of driving licenses.{" "}
            </span>
          </div>
          <div className="flex flex-col justify-center items-start" data-aos="fade-up">
            <img src="/DriverCheck/11682551.png" className="w-14" />
            <p className="font-bold text-2xl py-2 ">Driving History</p>
            <span className="font-semibold text-xl">Check for any past violations, accidents, or penalties.</span>
          </div>
          <div className="flex flex-col justify-center items-start" data-aos="fade-up">
            <img src="/DriverCheck/trans.png" className="w-14" />
            <p className="font-bold text-2xl py-2 ">Professional Certifications</p>
            <span className="font-semibold text-xl " >
              Verify any additional certifications relevant to the driver’s role
            </span>
          </div>
        </div>
      </section>
      <section>
        <div className="flex flex-col md:flex-row items-center md:items-start p-4 md:p-8 space-y-4 md:space-y-0 md:space-x-8 ">
          <div className="w-full md:w-1/2 flex justify-center" data-aos="fade-up">
            <img
              src="/DriverCheck/3129573.jpg"
              alt="Example"
              className="max-w-full h-auto"
            />
          </div>

          <div className="w-1/2">
            <h2 className="text-2xl font-bold ml-4 lg:font-bold lg:text-5xl lg:mt-36 md:text-4xl md:mt-18" data-aos="fade-up">
              Verify your Driver <br /> with us?
            </h2>
            <p className="text-lg ml-4 lg:text-2xl font-[Cabin] lg:mt-10 md:text-xl" data-aos="fade-up">
              Trust GVS to verify your drivers, ensuring safety, reliability,
              and peace of mind for your organization and the public
            </p>
            <Link to='/contact-us ' >
              <button data-aos="fade-up" className="bg-blue-600 hover:bg-blue-800 text-white my-24  font-bold py-2 px-4 md:ml-32 rounded-3xl text-3xl lg:p-6">
                CONTACT US
              </button>
              </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default DriverVerification;
