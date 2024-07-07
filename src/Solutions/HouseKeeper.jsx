import React , {useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const HouseKeeper = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      
    });})
  return (
    <div>
      <div className="flex justify-center items-center " data-aos="fade-up">
        <div className="max-w-full mx-auto flex flex-col lg:flex-row items-center justify-between bg-customPeach z-[-1] "  >
          <div className="lg:w-1/2 " >
            <h1 className=" font-bold font-[Poppins] mb-4 lg:ml-28 lg:text-4xl text-2xl ml-2 p-4"  >
              Housekeeping Staff Verification
            </h1>
          </div>

          <div className="relative lg:w-1/2  lg:mt-0 "  >
            <div className="relative z-[-1]">
              <img
                src="/HouseKeeping/91.jpg"
                alt="Image"
                className="w-full h-auto  "
                 
                
              />
              <div className="absolute inset-0 bg-gradient-to-r from-customPeach to-transparent" data-aos="fade-up" ></div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center  ">
        <div className="  flex flex-col lg:flex-row items-center justify-center ">
          <div className="w-full lg:w-1/2  mb-6 lg:mb-0 flex flex-col gap-10 mx-5 md:mx-10 ">
            <h1 className="text-3xl font-bold mb-4 mx-5 my-16 md:my-0 md:mx-0  lg:text-5xl"  data-aos="fade-up">
              Maintain your office premises, and its secrecy too :
            </h1>
            <p className="text-sm leading-relaxed  lg:text-sm mx-5 md:mx-0"  data-aos="fade-up">
              Hiring trustworthy and reliable housekeeping and staff members is
              crucial for maintaining a safe and efficient environment. At GVS,
              our thorough verification services help you confirm the background
              and credentials of your housekeeping and staff, ensuring peace of
              mind and operational excellence. We apply diverse checking scales
              to screen the entire list of applicants and submit a clear report
              to you. This makes you aware of the suitability of service
              providers and their staff. Thus you can curb corporate frauds and
              keep your office data and premises safe. We offer the following
              checks for housekeeping background verification:
            </p>
          </div>

          <div className=" md:w-1/2  flex justify-center items-center" data-aos="fade-up">
            <img
              src="/HouseKeeping/92.png"
              alt="Image"
              className="w-full h-auto  px-10 py-10"
               
            />
          </div>
        </div>
      </div>

      <div>
        <h2 className=" text-lg font-bold  mt-8 ml-6 lg:text-center lg:text-5xl mb-8"  data-aos="fade-up">
          Transform recruitment decisions with our housekeeping staff
          verification solutions like:
        </h2>
      </div>

      <div className="flex flex-col md:flex-row  md:p-8 justify-center ">
        <div className="font-bold text-customBlue text-center  md:mr-4  lg:text-xl"  data-aos="fade-up">
          Address and Document Verification
        </div>
        <div className="relative"  data-aos="fade-up">
          <div className="h-full w-1 bg-gray-300 mx-auto lg:hidden"></div>
          <div className="hidden lg:block absolute h-full w-[1px] bg-gray-500 left-1/2 transform -translate-x-1/2"></div>
        </div>

        <hr
          className="md:hidden  md:mx-4 w-[300px]  ml-8 bg-black my-2"
          style={{ height: "auto" }}
        />
        <div className="font-bold text-customBlue text-center md:text-left md:ml-4 lg:text-xl mx-4" data-aos="fade-up">
          Global Regulatory and Criminal Record Search
        </div>
      </div>

      <section className="mt-10">
        <div className="flex flex-col md:flex-row justify-center items-center w-screen ">
          <div className="flex justify-center items-center md:w-1/2" data-aos="fade-up">
            <img src="/HouseKeeping/93.png" className="px-5"/>
          </div>
          <div className="md:w-1/2 flex flex-col justify-center items-start mt-10 md:mt-2" data-aos="fade-up">
            <h1 className="text-3xl md:text-4xl mb-10 mx-5 font-[Poppins] font-semibold " >Address and Document Verification</h1>
            <p className="font-[Rubik] mx-5 md:mx-10">
              We have a systematic approach and practice to enable address and
              document verification including driving license, work permit,
              identity proof, address proof etc
            </p>
          </div>
        </div>
      </section>
      <section className="mt-10">
        <div className="flex flex-col md:flex-row justify-center items-center w-screen ">
          <div className="md:w-1/2 flex flex-col justify-center items-start">
            <h1 className="text-3xl md:text-4xl  md:mb-10 mx-5 md:mx-12  font-[Poppins] font-semibold " data-aos="fade-up">Global Regulatory and Criminal Record

Search</h1>
            <p className="font-[Rubik] mx-5 md:mx-12 my-10" data-aos="fade-up">
            We employ a methodical approach and routine to facilitate verification and documentation, encompassing items such as driving licenses, work permits, identity proofs, and address verifications.
            </p>
          </div>
          <div className="flex justify-center items-center md:w-1/2">
            <img src="/HouseKeeping/94.png" className="px-5" data-aos="fade-up"/>
          </div>
        </div>
      </section>
      <section className="mt-10">
        <div className="flex flex-col md:flex-row justify-center items-center w-screen ">
          <div className="flex justify-center items-center md:w-1/2">
            <img data-aos="fade-up" src="/HouseKeeping/95.png" className="px-5"/>
          </div>
          <div className="md:w-1/2 flex flex-col justify-center items-start">
            <h1 className="text-3xl md:text-4xl mb-10 mx-5 md:mx-10 font-[Poppins] font-semibold " data-aos="fade-up">Building Trust with Verified Staff and
            Housekeeping</h1>
            <p className="font-[Rubik] mx-5 md:mx-10 mb-10" data-aos="fade-up">
            Rely on GVS to ensure the integrity and reliability of your team, safeguarding your
            organization's reputation and operational excellence.
            </p>
            <button data-aos="fade-up" className="mb-12  mx-5 rounded-lg md:mx-10 bg-blue-600 hover:bg-blue-800 px-5 font-[Rubik] font-semibold text-white text-xl  py-3">Verify Now</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HouseKeeper;
