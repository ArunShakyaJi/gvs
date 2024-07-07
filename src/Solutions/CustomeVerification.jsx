import React , {useEffect} from "react";
import {Link} from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';

function CustomeVerification() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      
    });})
  return (
    <>
      <section>
        <div className="w-screen h-auto flex flex-col md:flex-row ">
          <div className="flex flex-col justify-center md:justify-start items-center md:items-start  md:w-1/2 ">
            <h1 className="text-3xl md:text-5xl mx-10 md:mx-16 my-10 md:my-12 font-bold"  data-aos="fade-up">Customer Verification Ensuring Authenticity and Security</h1>
            <p className="text-sm md:text-lg   font-[Rubik] mx-10  md:mx-16"  data-aos="fade-up">
              In today's digital age, verifying the authenticity of your
              customers is paramount to safeguarding your business from fraud
              and enhancing trust. At GVS, we offer comprehensive customer
              verification services designed to ensure the legitimacy of your
              customer base and protect your organization.
            </p>

            <Link to='/contact-us ' >
              <button  data-aos="fade-up" className="bg-blue-600 hover:bg-blue-800 px-4 mx-10  md:mx-16  text-white  font-bold py-2 my-10  md:mt-24 rounded-xl text-3xl lg:p-6">
                CONTACT US
              </button>
              </Link>          </div>
          <div className="flex flex-col justify-center items-center md:w-1/2">
            <img  data-aos="fade-up" src="/CustomerSoln/103.jpg" className="w-auto max-w-[400px] md:max-w-[500px]" />
            
          </div>
        </div>
      </section>
      <section>
        <div>
          <div></div>
          <div></div>
        </div>
      </section>
      <section className="my-10">
        <div className="w-screen flex flex-col md:flex-row">
          <div className="md:w-1/2 flex justify-center items-center ">
            <img src="/CustomerSoln/104.png" className="w-auto max-w-[400px] md:max-w-[500px] h-auto "/>
          </div>
          <div className="md:w-1/2 my-10">
            <h1 className="text-3xl md:text-5xl font-[Poppins] font-semibold mx-5 md:mr-10"  data-aos="fade-up"> Benifits of Using GVS for Customer verification</h1>
            <div className="flex flex-row justify-start items-start gap-4 md:mr-28 mt-8 mx-6">
              <img src="/Reference/tick.png" className="w-8"  data-aos="fade-up"/>
              <div className="flex flex-col">
              <h1 class="text-lg md:text-2xl  text-blue-400 font-semibold"  data-aos="fade-up">Improved Customer Trust</h1>
              <p className="text-sm md:text-xl font-semibold"  data-aos="fade-up"  >Build a trustwordhy relationship with your customer by demonstrating due deligence in verifying their Information.</p>
              </div>
            </div>
            <div className="flex flex-row justify-start items-start gap-4 md:mr-28 mt-8 mx-6">
              <img src="/Reference/tick.png" className="w-8"  data-aos="fade-up"/>
              <div className="flex flex-col">
              <h1 class="text-lg  md:text-2xl text-blue-400 font-semibold"  data-aos="fade-up">Enhanced Security</h1>
              <p className="text-sm md:text-xl font-semibold"  data-aos="fade-up">Protect your bussiness from fraudlent activities by ensuring customers information is accurate and verified.</p>
              </div>
            </div>
            <div className="flex flex-row justify-start items-start gap-4 md:mr-28 mt-8 mx-6">
              <img src="/Reference/tick.png" className="w-8"  data-aos="fade-up"/>
              <div className="flex flex-col"  data-aos="fade-up">
              <h1  data-aos="fade-up" class="text-lg  md:text-2xl text-blue-400 font-semibold">Compliance Assurance</h1>
              <p  data-aos="fade-up" className="text-sm md:text-xl font-semibold">Stay complaint with industry regulations and standards by employing rigorous customer verification methods. </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="flex flex-col justify-center items-center my-10">
          <h1  data-aos="fade-up" className="text-3xl md:text-6xl font-[Poppins] font-semibold my-10 mx-10">
            Securing Customer Trust with GVS
          </h1>
          <p  data-aos="fade-up" className="md:mx-44 mx-12   text-xl font-[Rubik] bg-blue-300 px-5 md:px-16  py-10 md:rounded-full rounded-xl ">
          "Our customer verification services ensure authenticity and security by validating identities, documents, and addresses. Protect your business from fraud, enhance customer trust, and stay compliant with industry regulations. With advanced technology and a dedicated expert team, we provide fast, accurate, and reliable verification results to support your growth."
          </p>
        </div>
      </section>
      <section>
      <div className="flex flex-col lg:flex-row  lg:pt-20 lg:ml-50 bg-white">
        <div className="lg:w-2/3 w-full p-4 lg:pt-10 lg:pl-20">
          <h2  data-aos="fade-up" className="text-xl md:text-5xl font-semibold mb-4 font-[Rubik] text-center md:text-start">
            Verify with Confidence ,<br/>
            Grow with Trust.
          </h2>

          <Link to='/contact-us ' className="mb-10">
              <button  data-aos="fade-up" className="bg-blue-600 hover:bg-blue-800 px-4   text-white  font-bold py-2 my-10 ml-16 md:ml-0 md:mt-24 rounded-xl text-3xl lg:p-6">
                CONTACT US
              </button>
              </Link>
        </div>

        <div className="hidden md:block "  data-aos="fade-up">
          <img
            src="https://img.icons8.com/?size=100&id=118834&format=png&color=000000"
            className="lg:h-full transform md:rotate-0 md:transform-none md:origin-center lg:origin-top-right rotate-90 lg:w-12   md:h-12"
            alt="Icon"
          />
        </div>

        <div className="border-4 bg-black h-0.8 mx-4 lg:hidden"></div>

        <div className="lg:w-2/3 w-full p-4 flex justify-center items-center">
          <img
           data-aos="fade-up"
            src="/Reference/38.jpg"
            alt="Placeholder"
            className="w-auto max-w-[400px] h-auto"
          />
        </div>
      </div>
      </section>
    </>
  );
}

export default CustomeVerification;
