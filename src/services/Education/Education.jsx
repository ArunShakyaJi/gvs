// AdditionalContent.jsx
import React, { useEffect } from "react";
import Button from "../../components/Button";
import { Link } from "react-router-dom";
import Section1 from "./EducationSection1";
import AOS from 'aos';
import 'aos/dist/aos.css';

const AdditionalContent = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      
    });})
  return (
    <div>
      <div className="flex flex-col md:flex-row items-center justify-center p-4 md:p-8 bg-white ">
        <div className="md:w-1/2 p-4">
          <img
            src="/hero.png"
            alt=""
            className="w-full h-auto object-cover rounded-tl-lg rounded-br-none md:w-90 lg:w-120 xl:w-144"  data-aos="fade-up"
          />
        </div>

        <div className="md:w-1/2 p-4 flex flex-col ">
          <h1 className="text-3xl lg:text-5xl font-bold mb-4 font-[Poppins] text-customBlue text-center md:text-start"  data-aos="fade-up">
            The Value of Verifying Educational Credentials
          </h1>
          <p className="text-[15px] text-lg font-semibold mb-4 text-center md:text-start"  data-aos="fade-up">
            Over 85% of employers have discovered discrepancies or false claims
            on candidate resumes through thorough screening processes. Ensuring
            genuine educational qualifications is vital for making informed
            hiring decisions. Education verifications help you to:
          </p>
          <div className="flex justify-start">
            <ul className=" mt-4">
              <li className="flex items-center  mb-2 text-lg font-bold font-[Rubik] font-regular text-gray-800   "  data-aos="fade-up">
                <img
                  src="/tickmark.png"
                  alt="Blue Tick"
                  className="w-7 h-7 mr-4 "
                   
                />
                Hire Competent Candidates
              </li>

              <li className="flex items-center mb-2 text-lg font-bold  font-[Rubik] font-regular text-gray-700"  data-aos="fade-up">
                <img
                  src="/tickmark.png"
                  alt="Blue Tick"
                  className="w-7 h-7  mr-4"
                  
                />
                Detect False Education Claims
              </li>

              <li className="flex items-center mb-2 text-lg font-bold font-[Rubik] font-regular text-gray-700"  data-aos="fade-up">
                <img
                  src="/tickmark.png"
                  alt="Blue Tick"
                  className="w-7 h-7  mr-4"
                />
                Uncover Discrepancies and Red Flagst
              </li>

              <li className="flex items-center text-lg font-bold font-[Rubik] font-regular text-gray-700 "  data-aos="fade-up">
                <img
                  src="/tickmark.png"
                  alt="Blue Tick"
                  className="w-7 h-7  mr-4"
                />
                Optimize Resources and Minimize Risk
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-8 bg-customBlue p-8  md:rounded-full rounded-3xl shadow-md max-w-md mx-auto lg:max-w-3xl ">
        <h2 className="text-4xl font-[Poppins] font-bold text-white text-center"  data-aos="fade-up">
          All Educational Credentials,
          <br />
          Verified and Consolidated
        </h2>
      </div>

      <div className="flex flex-col md:flex-row items-center   p-4 md:p-8 mt-8">
        <div className="md:w-3/5 p-4  ">
          <h2 className="text-4xl md:text-5xl  font-bold mb-4 text-black md:text-left text-center"  data-aos="fade-up">
            Launch Your Verification Process Quickly
          </h2>
          <div className="flex justify-center items-center py-10"  data-aos="fade-up">
            <img
              src="/school.png"
              alt="Section 2 Image"
              className=" w-auto max-w-[400px] py-10 px-10  "
            />
          </div>
        </div>

        <div className="md:w-2/5 p-4">
          <div className="mt-4"></div>
          <ul className="text-left mt-4">
            <li className="flex items-center mb-4"  data-aos="fade-up">
              <img
                src="/badge.jpg"
                alt="Blue Tick"
                className="w-14 h-14  mr-8 mt-5 rounded-full"
              />
              <div>
                <h3 className="text-customBlue font-bold drop-shadow-lg"  data-aos="fade-up">
                  Activate Qualification Check
                </h3>
                <p className="text-sm font-semibold"  data-aos="fade-up">
                  Candidates are requested to submit the <br />
                  background verification form along with the
                  <br /> supporting documents to initiate the process.
                </p>
              </div>
            </li>
            <li className="flex items-start mb-4"  data-aos="fade-up">
              <img
                src="/talk.png"
                alt="Blue Tick"
                className="w-14 h-14  mr-8 mt-5 rounded-full"
              />
              <div>
                <h3 className="text-customBlue  font-bold drop-shadow-lg "  data-aos="fade-up">
                  Run thorough checks
                </h3>
                <p className="text-sm font-semibold"  data-aos="fade-up">
                  The request for confirming the educational details of
                  <br />
                  candidates shall be raised in one of four methods:
                  <br />
                  personal visit to the educational institutions, courier,
                  <br />
                  e-mail, or fax
                </p>
              </div>
            </li>
            <li className="flex items-start mb-4"  data-aos="fade-up">
              <img
                src="/verify.png"
                alt="Blue Tick"
                className="w-14 h-14  mr-8 mt-5 rounded-full"
              />
              <div>
                <h3 className="text-customBlue  font-bold drop-shadow-lg"  data-aos="fade-up">
                  Request Employment Verification
                </h3>
                <p className="text-sm font-semibold"  data-aos="fade-up">
                  Get detailed information on qualification, name of the
                  <br />
                  institution, duration, year of passing, and more.
                  <br />
                  Review if it is in line with the information provided by
                  <br />
                  the candidate.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center p-8 ">
        <div className="w-screen px-6 flex flex-col items-center">
          <h2 className="text-3xl md:text-5xl font-bold font-[Poppins] md:mb-4 md:mx-10 text-customBlue text-center md:text-start"  data-aos="fade-up">
            What Makes Genuine Verification Services Unique?
          </h2>
          <div className="h-auto grid grid-cols-1 md:grid-cols-2 gap-10 p-6">
  <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-10 my-10"  data-aos="fade-up">
    <div className="flex justify-center items-center border-b border-r shadow-blue-left-bottom border-black p-5">
      <img src="/1.png" className="w-auto max-w-[44px] mr-4" alt="Icon 1" />
      <span className="text-center text-xl font-semibold" >Comprehensive <br/> Verification Solutions</span>
    </div>
    <div className="flex justify-center items-center border-b border-r shadow-blue-left-bottom border-black p-5"  data-aos="fade-up">
      <img src="/1.png" className="w-auto max-w-[44px] mr-4" alt="Icon 2" />
      <span className="text-center text-xl font-semibold">Global Reach</span>
    </div>
    <div className="flex justify-center items-center border-b border-r shadow-blue-left-bottom border-black p-5"  data-aos="fade-up">
      <img src="/1.png" className="w-auto max-w-[44px] mr-4" alt="Icon 3" />
      <span className="text-center text-xl font-semibold">Customer <br/> Centric Approach</span>
    </div>
    <div className="flex justify-center items-center border-b border-r shadow-blue-left-bottom border-black p-5"  data-aos="fade-up">
      <img src="/1.png" className="w-auto max-w-[44px] mr-4" alt="Icon 4" />
      <span className="text-center text-xl font-semibold">Transparency and Trust</span>
    </div>
  </div>
  <div className="w-full flex items-center justify-center"  data-aos="fade-up">
    <img src="/educationservice1.jpg" className="w-auto max-w-full md:max-w-[400px]" alt="Image" />
  </div>
</div>

        </div>
      </div>

      <div className="flex flex-col items-center justify-center "  data-aos="fade-up">
        <div className="flex items-center ">
          <img
            src="/announce.png"
            alt="Icon"
            className="hidden md:block w-screen md:w-[100px] h-full mr-3"
          />{" "}
          {/* Adjust size as needed */}
          <h2 className="text-5xl font-[Rubik] font-semibold   text-customBlue text-center"  data-aos="fade-up">
            Let's Verify and Secure Together
          </h2>
        </div>
      </div>
      <div>

      <div className="flex flex-col items-center justify-center mt-8 lg:flex-row lg:items-center"  data-aos="fade-up">
        <img
          src="/ss.png"
          alt="Image"
          className="md:w-[450px] h-auto md:mx-20 mb-12 my-10 rounded-lg lg:mr-4"
          />
      <h1 className="text-2xl md:text-4xl text-center font-[Rubik] mx-20 py-10 text"  data-aos="fade-up">"Redefining assurance through comprehensive verification practices, safeguarding your peace of mind."</h1>
      
      </div>
      
          </div>
    </div>
  );
};

export default AdditionalContent;
