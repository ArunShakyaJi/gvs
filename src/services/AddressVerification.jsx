import React , { useEffect} from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Education() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      
    });})
  return (
    <div >
     <div className="relative flex-1  lg:ml-16 w-screen mt-20 mx-5 lg:mx-0 z-[-1] my-10" data-aos="fade-up">
    <span className="font-bold text-4xl md:text-5xl relative text-blue-700 " >
        Address Validat
        <span className="relative" >
            <img src='/AddressVerification/24.png' className='absolute top-[-0.8rem] left-[-0.50rem] w-auto h-10' />
            ion
        </span>
    </span>
</div>


      <div className="mx-5 lg:mx-0">
        <div className="w-full flex flex-col md:flex-row justify-center items-center md:mb-16">
          <div className="w-full md:w-1/2 flex flex-col items-start justify-center bg-white   mb-4  ">
            <div >
              <p className="md:text-5xl text-3xl font-bold lg:ml-16" data-aos="fade-up" >
                Accurate Address Verification Services with
                <span className="text-customBlue"> GVS </span>
              </p>
              <p className="text-3xl  my-10 text-customBlue font-bold  lg:ml-16" data-aos="fade-up">
                Accurate Addresses, Assured Integrity
              </p>
              <p className="mt-8 lg:ml-16 text-lg font-semibold  " data-aos="fade-up">
                Ensuring the accuracy of a candidate's address is crucial for
                many business processes, from hiring to background checks. At
                GVS, we provide comprehensive address verification services to
                help you confirm the true residential details of your
                candidates. Our process is designed to be thorough, accurate,
                and secure, giving you confidence in every decision.
              </p>
            </div>
          </div>

          <div className="w-screen md:w-2/3 flex justify-center items-center mx-10 lg:px-10">
            <img
              src="/AddressVerification/22.png"
              alt="Right Image"
              data-aos="fade-up"
              className="w-screen lg:w-auto max-w-[500px] h-auto  px-10 py-10 lg:px-0 lg:py-0   "
            />
          </div>
        </div>
      </div>

      {/* New section starts */}
      <div className="w-full flex flex-col md:flex-row justify-center items-center mt-8">
        <div className="w-full md:w-2/3 flex flex-col items-start  justify-center bg-white   mb-4  ">
          <div className="text-left">
            <p className="text-5xl font-bold font-[Poppins] ml-4 lg:ml-16" data-aos="fade-up">
              Importance of Address Verifications
            </p>

            <p className="mt-8 ml-4 lg:ml-16  text-lg" data-aos="fade-up">
              Ensure the accuracy and reliability of your address information
              with GVS's Address Verification Services. Trust us to provide the
              accuracy and reliability you need to make informed decisions and
              build a trustworthy team.
            </p>
          </div>
          <div className="mt-8  ml-4 lg:ml-16">
            <ul className="flex flex-col text-start">
              <li className="flex items-start py-2" data-aos="fade-up">
                <img
                  src="/AddressVerification/24.png"
                  alt="Bullet"
                  className="w-8 h-8 mr-4"
                />
                <p className="text-lg font-semibold ">Enhanced Security</p>
              </li>
              <li className="flex items-start py-2" data-aos="fade-up">
                <img
                  src="/AddressVerification/24.png"
                  alt="Bullet"
                  className="w-8 h-8 mr-4"
                />
                <p className="text-lg font-semibold ">
                  Informed Decision Making
                </p>
              </li>
              <li className="flex items-start py-2" data-aos="fade-up">
                <img
                  src="/AddressVerification/24.png"
                  alt="Bullet"
                  className="w-8 h-8 mr-4"
                />
                <p className="text-lg font-semibold ">Compliance Assurance</p>
              </li>
              <li className="flex items-start py-2" data-aos="fade-up">
                <img
                  src="/AddressVerification/24.png"
                  alt="Bullet"
                  className="w-8 h-8 mr-4"
                />
                <p className="text-lg font-semibold ">Resource Optimization</p>
              </li>
              <li className="flex items-start py-2" data-aos="fade-up">
                <img
                  src="/AddressVerification/24.png"
                  alt="Bullet"
                  className="w-8 h-8 mr-4"
                />
                <p className="text-lg font-semibold ">Risk Mitigation</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="w-full md:w-1/3 flex justify-center items-center mt-8 md:mt-0 lg:mr-12">
          <img
            src="/AddressVerification/23.png"
            alt="Right Image"
            className="w-80 h-auto "
          />
        </div>
      </div>

      <div className="flex flex-col items-center justify-center md:justify-start md:items-start mx-8 md:mx-16 mt-8">
        <h2 className="text-6xl font-bold text-center md:text-left" data-aos="fade-up">
          {" "}
          Begin Verifying Addresses with
          GVS
        </h2>
      </div>

      <div className="w-full bg-white flex mx-8 md:mx-16 rounded-lg  mt-8 ">
        <div className="">
          <p className="mb-4 text-2xl font-bold" data-aos="fade-up">Physical Address Verification</p>
          <p className="lg:mt-8 text-xl font-semibold" data-aos="fade-up">
            Our on-field representatives physically verify the address to
            confirm the information provided by the candidate.
          </p>
          <p className="lg:mt-8 text-xl font-semibold" data-aos="fade-up">Here's how it works:</p>
        </div>
      </div>
      <div>

          <div className="flex flex-col md:flex-row justify-center items-center md:mx-16 my-8 " data-aos="fade-up">
            <div className="flex  items-center flex-col md:flex-row ">
              <div className="flex justify-center items-center  gap-x-4 border-dashed border-2 border-green-600  max-w-[300px] h-auto px-3 py-3 rounded-xl">
              <img src="/AddressVerification/25.png" className="w-auto max-w-8"/>
              <span className="text-[12px] font-bold">The Candidate recive a link via sms  to kick start the verification process</span>
              </div>
              <FaLongArrowAltRight className="rotate-90 md:rotate-0 m-4 w-10" />
            </div>

            <div className="flex justify-center  items-center flex-col md:flex-row  max-w-[463px] ">
              <div className="flex justify-start items-center gap-x-4 border-dashed border-2 border-green-600 max-w-[300px] h-auto px-3 py-3 rounded-xl">
              <img src="/AddressVerification/26.png" className="w-auto max-w-8"/>
              <span className="text-[12px] font-bold">On spot physical verification is performed.</span>
              </div>
              <FaLongArrowAltRight   className="rotate-90 md:rotate-0 m-4 w-10" />
            </div>
            <div className="flex justify-center  items-center flex-col md:flex-row ">
              <div className="flex justify-start items-center gap-x-4 border-dashed border-2 border-green-600 w-[300px] max-w-[300px] h-auto px-3 py-3 rounded-xl">
              <img src="/AddressVerification/27.png" className="w-auto max-w-8"/>
              <span className="text-[12px] font-bold">Period of stay is ensured.</span>
              </div>
              <FaLongArrowAltRight  className="rotate-90 md:rotate-0 m-4 w-10" />
            </div>
            <div className="flex justify-center  items-center flex-col md:flex-row ">
              <div className="flex justify-start items-center gap-x-4 border-dashed border-2 border-green-600 w-auto max-w-[300px] h-auto px-3 py-3 rounded-xl">
              <img src="/AddressVerification/28.png" className="w-auto max-w-8"/>
              <span className="text-[12px] font-bold">Identity Proof is requested to verify the address.</span>
              </div>
              
            </div>

          </div>
      </div>

      

      <div className="w-full bg-white  rounded-lg  mt-8 mx-5 lg:mx-16 ">
        <div className="w-screen mx-auto">
          <p className="mb-4 text-6xl  font-bold font-[Poppins] my-10 md:my-24 " data-aos="fade-up">Digital Address Verification (DAV)</p>
          <p className="lg:mt-8 text-xl font-semibold font-[Rubik]" data-aos="fade-up">
            Here, the candidate's information is collected in real-time. Image<br/>
            uploads from mobile galleries or saved pictures will not be
            accepted.
          </p>
          <p className="lg:mt-8 text-xl font-bold" data-aos="fade-up">Here's how it works:</p>
        </div>
      </div>

    <div className="flex flex-col md:flex-row justify-center items-center md:mx-16 my-8 " data-aos="fade-up">
            <div className="flex  items-center flex-col md:flex-row ">
              <div className="flex justify-center items-center  gap-x-2 border-dashed border-2 border-green-600  max-w-[300px] h-auto px-3 py-3 rounded-xl">
              <img src="/AddressVerification/25.png" className="w-auto max-w-8"/>
              <span className="text-[12px] font-bold">The Candidate recive a link via sms  to kick start the verification process</span>
              </div>
              <FaLongArrowAltRight className="rotate-90 md:rotate-0 m-4 w-10" />
            </div>

            <div className="flex justify-center  items-center flex-col md:flex-row  max-w-[463px] ">
              <div className="flex justify-start items-center gap-x-4 border-dashed border-2 border-green-600 max-w-[300px] h-auto px-3 py-3 rounded-xl">
              <img src="/AddressVerification/26.png" className="w-auto max-w-8"/>
              <span className="text-[12px] font-bold">Location coordinate of residence are verified using GPS data.</span>
              </div>
              <FaLongArrowAltRight   className="rotate-90 md:rotate-0 m-4 w-10" />
            </div>
            <div className="flex justify-center  items-center flex-col md:flex-row ">
              <div className="flex justify-start items-center gap-x-4 border-dashed border-2 border-green-600 w-[300px] max-w-[300px] h-auto px-3 py-3 rounded-xl">
              <img src="/AddressVerification/27.png" className="w-auto max-w-8"/>
              <span className="text-[12px] font-bold">The photo samples of their residence are captured and submitted </span>
              </div>
              <FaLongArrowAltRight  className="rotate-90 md:rotate-0 m-4 w-10" />
            </div>
            <div className="flex justify-center  items-center flex-col md:flex-row ">
              <div className="flex justify-start items-center gap-x-4 border-dashed border-2 border-green-600 w-auto max-w-[300px] h-auto px-3 py-3 rounded-xl">
              <img src="/AddressVerification/28.png" className="w-auto max-w-8"/>
              <span className="text-[12px] font-bold">Finally, Period of stay and Proofof address is verified.</span>
              </div>
              
            </div>

          </div>
     


      

      <div className="flex flex-col md:flex-row lg:mt-20">
        <div className="md:w-1/2 p-10">
          <img
            className="object-cover w-full h-full"
            src="/AddressVerification/33.jpg"
            alt="Image Description"
            data-aos="fade-up"
          />
        </div>
        <div className="md:w-1/2 p-4 text-center lg:mt-20 lg:mr-10 lg:pt-20">
          <h2 className="text-2xl md:text-4xl lg:text-5xl text-center  font-bold" data-aos="fade-up">
            Confirm Addresses with Confidence Using GVS
          </h2>
          <p className="mt-4 text-xl lg:mt-10" data-aos="fade-up">
            "Trust GVS for accurate, reliable address verification,
            <br />
            ensuring the integrity and security of your organization"
          </p>

          <Link to="/contact-us">
              <button className="bg-blue-600 hover:bg-blue-800 text-white text-2xl my-10 font-[Rubik] mx:10 md:mx-16  px-4 py-2 rounded-lg" data-aos="fade-up">
                Verify Now
              </button>
            </Link>
        </div>
      </div>
    </div>
  );
}
