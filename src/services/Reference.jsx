import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Contact from '../Pages/Contact';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Reference() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      
    });})
  return (
    <div>
      <div className="w-screen">
      <div className="flex flex-col lg:flex-row text-center pt-10 lg:pt-0 lg:text-start justify-center lg:justify-start items-center lg:items-start bg-slate-100 h-auto ">
        <div className=" px-8 lg:w-1/2  lg:pt-24 lg:pl-20 md:mb-24">
          <h2 className="text-3xl text-[#005b96] md:text-5xl font-bold font-[Poppins] mb-4 mr-2" data-aos="fade-up">
            Professional reference check services
          </h2>
          <p className="text-sm md:text-xl mt-10 mr-8" data-aos="fade-up">
            In the race to secure top talent, don't let address verifications
            slow you down. GVS ensures precise and swift screening, helping you
            hire the best candidates efficiently.
          </p>
          <Link to='/contact-us'>
          <button data-aos="fade-up" className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-2xl lg:text-2xl lg:px-4 mt-4  lg:my-12 lg:font-bold">
            VERIFY NOW
          </button>
          </Link>
        </div>
        <div className="  p-4 w-1/2 flex justify-center lg:mt-12 " data-aos="fade-up">
          <img
            src="/Reference/35.png"
            alt="Placeholder"
            className="lg:w-[400px] w-auto h-auto"
          />
        </div>
      </div>
      </div>


      <div className="lg:pr-20">

      <div className="flex flex-col lg:flex-row items-center   p-4 ">
        <div className="lg:w-3/10 w-full p-4 flex justify-center items-center">
          <img
            src="/Reference/36.png"
            alt="Placeholder"
            className="max-w-[400px] w-auto h-auto rounded"
            data-aos="fade-up"
          />
        </div>
        <div className="lg:w-7/10 w-full p-4 lg:mt-10">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 font-[Rubik] " data-aos="fade-up">
            Key Benefits of Conducting Professional Reference Checks for
            Employers
          </h2>
          <p className="text-xl md:text-[16px] font-[Poppins] font-normal" data-aos="fade-up">
            In the race to secure top talent, don't let address verifications
            slow you down. GVS ensures precise and swift screening, helping you
            hire the best candidates efficiently.
          </p>

          <ul className="list-none space-y-2 mt-8">
            <li className="flex flex-col" data-aos="fade-up">
              <div className="flex items-start">
                <img
                  src="/Reference/tick.png"
                  alt="Tick Icon"
                  className="w-8 h-auto mr-2 mt-1"
                />
                <span className="text-xl font-semibold text-customBlue " data-aos="fade-up">
                  Make more informed hiring decisions
                </span>
              </div>
              <p className="ml-10 text-sm" data-aos="fade-up">
                An employer reference check is a powerful tool used to help you{" "}
                <br />
                assess whether a candidate is a good fit for the position.
              </p>
            </li>
            <li className="flex flex-col" data-aos="fade-up">
              <div className="flex items-start">
                <img
                  src="/Reference/tick.png"
                  alt="Tick Icon"
                  className="w-8 h-auto mr-2 mt-1"
                />
                <span className="text-xl font-semibold text-customBlue " >
                  Hire qualified candidates
                </span>
              </div>
              <p className="ml-10 text-sm" >
                Employment reference checking before you hire helps give
                <br /> you a realistic assessment of the candidate in the
                <br /> workplace.
              </p>
            </li>
            <li className="flex flex-col" data-aos="fade-up">
              <div className="flex items-start">
                <img
                  src="/Reference/tick.png"
                  alt="Tick Icon"
                  className="w-8 h-auto mr-2 mt-1"
                />
                <span className="text-xl font-semibold text-customBlue " d>
                  Perform due diligence
                </span>
              </div>
              <p className="ml-10 text-sm" data-aos="fade-up">
                Conducting a reasonable inquiry into a candidate’s <br />
                background with a reference check service may protect <br />
                against a negligent hiring lawsuit.
              </p>
            </li>
          </ul>
        </div>
      </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center   p-4  ">
        <div className="lg:w-7/12 w-full p-4 lg:pl-20">
          <h2 className="text-3xl md:text-4xl font-[Rubik] font-semibold mb-4 text-center lg:text-start" data-aos="fade-up" >
            Why checking professional references is important
          </h2>
          <p className="text-lg md:text-xl text-center lg:text-start " data-aos="fade-up">
            An employee reference check ser vice helps you gain insight about a
            candidate you may not learn from a resume or inter view, such as:
          </p>

          <ul className="list-none space-y-4 mt-8">
            <li className="flex flex-col justify-center items-cente lg:items-start">
              <div className="flex lg:items-start ">
                <img
                  src="/Reference/tick.png"
                  alt="Tick Icon"
                  className="w-8 h-auto mr-2 mt-1"
                  data-aos="fade-up"
                />
                <span className="text-2xl text-customBlue " data-aos="fade-up">
                  Job per formance and skills
                </span>
              </div>
              <p className="ml-10" data-aos="fade-up">
                Get more insight into strengths and weaknesses,
                <br />
                areas of improvement , as well as soft skills.
              </p>
            </li>
            <li className="flex flex-col  justify-center items-center lg:items-start">
              <div className="flex items-start">
                <img
                  src="/Reference/tick.png"
                  alt="Tick Icon"
                  className="w-8 h-auto mr-2 mt-1"
                  data-aos="fade-up"
                />
                <span className="text-2xl text-customBlue " data-aos="fade-up">
                  Work accomplishments
                </span>
              </div>
              <p className="ml-10" data-aos="fade-up">
                In addition to a description of past duties and
                <br />
                experiences, learn about work accomplishments.
              </p>
            </li>
            <li className="flex flex-col  justify-center items-center lg:items-start">
              <div className="flex items-start">
                <img
                  src="/Reference/tick.png"
                  alt="Tick Icon"
                  className="w-8 h-auto mr-2 mt-1"
                  data-aos="fade-up"
                />
                <span className="text-2xl text-customBlue " data-aos="fade-up">
                  Personal characteristics
                </span>
              </div>
              <p className="ml-10" data-aos="fade-up">
                Get a sense of the candidate’s preferred work culture,
                <br />
                dependabilit y, and abilit y to work with others.
              </p>
            </li>
          </ul>
        </div>
        <div className="flex justify-center items-center lg:w-5/12 w-full p-4">
          <img
            src="/Reference/37.jpeg"
            alt="Placeholder"
            className="max-w-[500px] w-auto h-auto rounded"
            data-aos="fade-up"
          />  
        </div>
      </div>
      <div data-aos="fade-up" className="md:text-3xl lg:text-5xl text-3xl text-center font-bold mt-4 lg:mt-10 tracking-[0.1em] bg-slate-100 pt-10">
        “GVS Your Shortcut to Confidence”
      </div>
      <div className="flex justify-center items-center bg-slate-100 pb-10">
      <div data-aos="fade-up" className="bg-customPink  p-4 lg:px-20 lg:w-3/4 lg:ml-50 text-center rounded-xl md:rounded-full mx-8 px-16 lg:py-10 mt-8 lg:mt-10 w-full ">
        “At GVS, we understand the impor tance of swift and accurate
        verifications “At GVS, we understand the impor tance of swift and
        accurate verifications in today's fast-paced world. Our streamlined
        address verification process ensures that you receive reliable and
        precise results without delay. By leveraging advanced technology and
        trusted sources, we make it easier than ever to confirm residential
        details. With GVS, you can make informed decisions quickly and
        confidently, knowing that our thorough verification methods have got you
        covered. <span className="text-customBlue">Trust GVS</span> to be your
        shor tcut to confidence in ever y verification.”
      </div>
      </div>

      <div className="flex flex-col lg:flex-row  lg:pt-20 lg:ml-50 bg-white">
        <div className="lg:w-2/3 w-full p-4 lg:pt-10 lg:pl-20">
          <h2 className="text-xl md:text-3xl  mb-4 font-[Rubik] font-normal text-center md:text-start" data-aos="fade-up">
            Trust GVS to handle your professional reference checks with
            precision and reliability.
          </h2>

          <Link to= '/contact-us' className="flex justify-center md:justify-start">
          <button data-aos="fade-up" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4   rounded-2xl lg:text-2xl lg:px-4 mt-4 lg:ml-50 lg:mt-8 lg:font-bold">
            VERIFY NOW
          </button>
          </Link>
        </div>

        <div className="hidden md:block ">
          <img
            src="https://img.icons8.com/?size=100&id=118834&format=png&color=000000"
            className="lg:h-full transform md:rotate-0 md:transform-none md:origin-center lg:origin-top-right rotate-90 lg:w-12   md:h-12"
            alt="Icon"
            data-aos="fade-up"
          />
        </div>

        <div className="border-4 bg-black h-0.8 mx-4 lg:hidden"></div>

        <div className="lg:w-2/3 w-full p-4 flex justify-center items-center">
          <img
            src="/Reference/38.jpg"
            alt="Placeholder"
            className="w-auto max-w-[400px] h-auto"
            data-aos="fade-up"
          />
        </div>
      </div>
    </div>
  );
}
