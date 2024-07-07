import React, { useEffect } from "react";
import Contact from "../Pages/Contact";
import { Link } from "react-router-dom";
import Whygvs from "../components/Whygvs/Whygvs";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Verify1 = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      
    });})
  return (
    <div className=" w-full">
      <div className="w-full bg-customPink h-1/2">
        <div className="flex flex-col lg:flex-row items-center justify-between ">
          <div className="w-full lg:w-2/3 lg:pr-4   lg:ml-20">
            <h1 className="text-3xl pt-10 px-6 md:pt-8 md:px-0 md:text-4xl text-center lg:text-start font-[Poppins] font-bold mb-10 text-customBlue" data-aos="fade-up">
              Identity Verification: The Cornerstone of Trust
            </h1>
            <h2 className="text-slate-600 text-xl md:2xl px-6 md:px-0 font-semibold font-[Rubik] mb-4 text-center lg:text-start " data-aos="fade-up">
              Trust begins with verified identity
            </h2>
            <p className="text-slate-700 text-xl font-[Roboto] font-medium text-center px-6  md:px-0 text-wrap lg:text-start" data-aos="fade-up">
              Our Identity Verification services ensure that you can rely on
              accurate and verified information from trusted sources.
            </p>

            <Link
              to="/Contact-us"
              className="flex justify-center lg:justify-start  pt-10 "
            >
              <button className="bg-[#3f47df] hover:bg-blue-800 text-white font-[Poppins] my-5 rounded-md font-bold text-xl px-4 py-2 lg:p-4 lg:mt-10 sm:p-2 sm:px-4 sm:py-2 " data-aos="fade-up">
                VERIFY TODAY
              </button>
            </Link>
          </div>
          <div className="w-full lg:w-2/3 mt-4 lg:mt-0  flex justify-end" data-aos="fade-up">
            <img
              src="/IdentityVerification/1img.png"
              alt="Placeholder"
              className="w-full lg:w-auto lg:max-w-full  bottom-0 "
              style={{ maxWidth: "706px", height: "auto" }}
            />
          </div>
        </div>
      </div>

      {/* Second Section */}

      <div className="bg-white w-full  flex flex-col lg:flex-row items-center justify-between lg:mt-20  ">
        <div className="w-full lg:w-1/2 mt-4 lg:mt-0 flex justify-center " data-aos="fade-up">
          <img
            src="/IdentityVerification/2img.png"
            alt="Second Image"
            className="w-full mx-8 my-10 md:mx-0 mx:my-6 h-auto  lg:max-w-full border-4 bg-customPink rounded-2xl  )"
            style={{
              maxWidth: "500px",
              height: "auto",
              boxShadow: "2px 2px 4px rgba(0, 159, 227, 0.9)",
            }}
          />
        </div>
        <div className="w-full lg:w-1/3 lg:pl-4 flex-1 justify-center items-center text-center lg:text-left order-2  ">
          <h2 data-aos="fade-up" className="text-xl md:text-3xl lg:text-5xl  mb-2 text-customBlue text-center md:text-start font-[Poppins] font-bold ">
            <span style={{ color: "black" }} > Why</span> Identity Verification
            Matters
          </h2>
          <p data-aos="fade-up" className="text-slate-800   px-8 md:pr-16 md:pl-0 subpixel-antialiased leading-6  text-center md:text-start text-lg font-[Rubik]  lg:mt-10">
            Identity verification is fundamental to all checks, ensuring the
            reliability of findings in employment, education, references, court
            records, CVs, and more. By confirming true identities at the outset,
            we help businesses secure their processes and make well-informed
            decisions.
          </p>
        </div>
      </div>

      {/*section 3*/}
      <div className="mb-10">
        <div className="w-full mt-auto lg:mt-24 ">
          <div className="flex flex-col lg:flex-row items-center justify-between  p-4">
            <div className="w-full lg:w-2/3 lg:pr-4 lg:ml-auto">
              <h1 className="text-4xl  mb-2 text-black font-[Cabin] font-semibold text-center lg:text-5xl lg:ml-8 mx-2 " data-aos="fade-up">
                Authentic ID Verification through<br/>
                <span className="text-customBlue  font-bold" data-aos="fade-up"> GVS</span>
              </h1>

              <p className="text-black text-lg font-[Rubik]   mt-10 mx-12 text-center md:text-start" data-aos="fade-up">
                We verify the following documents to confirm the identity of a
                candidate: Our comprehensive verification process ensures the
                authenticity of these documents. The final report includes
                detailed verification results and status updates. Users have the
                flexibility to submit these documents manually, or they can
                benefit from a secure, trusted system for document retrieval,
                ensuring a seamless and efficient identity verification process.
              </p>
              <div className="flex items-start justify-center gap-2 md:gap-8 mt-8 px-10 " data-aos="fade-up">
                <img
                  src="/IdentityVerification/4img.png"
                  alt="Icon 1"
                  className="w-20 h-20 lg:mr-4 border-2 border-customBlue rounded-full"
                />
                <img
                  src="/IdentityVerification/5img.png"
                  alt="Icon 2"
                  className="w-20 h-20  lg:mr-4 border-2 border-customBlue rounded-full"
                />
                <img
                  src="/IdentityVerification/6img.png"
                  alt="Icon 3"
                  className="w-20 h-20  lg:mr-4 border-2 border-customBlue rounded-full"
                />
                <img
                  src="/IdentityVerification/7img.png"
                  alt="Icon 4"
                  className="w-20 h-20  lg:mr-4  border-2 border-customBlue rounded-full"
                />
              </div>
            </div>
            <div className="w-full h-1/2 lg:w-2/3 mt-4 lg:mt-0 flex justify-center" data-aos="fade-up">
              <img
                src="/IdentityVerification/3img.png"
                alt="Placeholder"
                className="w-full h-[400px] lg:w-auto lg:max-w-full rounded-3xl"
                style={{
                  maxWidth: "550px",
                  boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.8)",
                }}
              />
            </div>
          </div>
        </div>
      </div>
     <Whygvs />

      <div className=" py-8 px-4 lg:py-16 lg:px-24 bg-white">
        <div className="max-w-screen-xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-center bg-customPink  rounded-3xl lg:pt-10 lg:pb-10 " data-aos="fade-up">
            Ensure Integrity, Trust with GVS Identity
            Verification
          </h2>
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="w-full lg:w-1/2 pr-4 mb-4 lg:mb-0">
              <img
                src="/IdentityVerification/11img.png"
                alt="Image Description"
                className=" h-auto "
                data-aos="fade-up"
              />
            </div>

            {/* Right Side (Text) */}
            <div className="w-full lg:w-1/2 lg:ml-20 flex flex-col justify-center items-center md:justify-start md:items-start">
            <p className="text-3xl md:text-5xl font-[Poppins] font-semibold mb-16 text-center" data-aos="fade-up">"Your Partner in Secure and Reliable Identity Verification"</p>
            <Link to='/contact-us' >
              <button className="bg-blue-600 hover:bg-blue-800 text-white  font-bold py-2 px-4 md:ml-32 rounded-3xl text-3xl lg:p-6" data-aos="fade-up">
                CONTACT US
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Verify1;
