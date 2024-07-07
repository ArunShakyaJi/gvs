import React , {useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Commitment = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  });
  return (
    <>
      <div className="bg-customGrey">
        <div>
          <h1 data-aos="fade-up" className="text-center mt-6 text-2xl font-bold pt-6 lg:text-6xl">
            Our Commitment<span className="text-customBlue"> to You</span>
          </h1>
        </div>

        <div  className="mt-6 px-6 grid grid-cols-1 sm:grid-cols-2 gap-6 pb-10 lg:px-28 lg:py-20 lg:gap-12">
          <div data-aos="fade-up" className="bg-white p-4 shadow-md rounded-lg hover:bg-blue-200 duration-300 hover:shadow-2xl">
            <h2 className="text-lg font-semibold lg:text-3xl">
              Accuracy and Reliability
            </h2>
            <p className="text-base mt-2 lg:text-xl">
              We understand the importance of accurate information. Our
              verification process is thorough, ensuring that every detail is
              checked and validated.
            </p>
          </div>
          <div data-aos="fade-up" className="bg-white p-4 shadow-md rounded-lg hover:bg-blue-200 duration-300 hover:shadow-2xl">
            <h2 className="text-lg font-semibold lg:text-3xl">
              Security and Confidentiality
            </h2>
            <p className="text-base mt-2 lg:text-xl">
              We prioritize the security and confidentiality of your data. Our
              processes are designed to protect sensitive information, providing
              you with peace of mind.
            </p>
          </div>
          <div data-aos="fade-up" className="bg-white p-4 shadow-md rounded-lg hover:bg-blue-200 duration-300 hover:shadow-2xl">
            <h2 className="text-lg font-semibold lg:text-3xl">
              Customer-Centric Approach
            </h2>
            <p className="text-base mt-2 lg:text-xl">
              Your satisfaction is our top priority. We work closely with you to
              understand your needs and provide tailored verification solutions
              that meet your specific.
            </p>
          </div>
          <div data-aos="fade-up" className="bg-white p-4 shadow-md rounded-lg hover:bg-blue-200 duration-300 hover:shadow-2xl">
            <h2 className="text-lg font-semibold lg:text-3xl">
              Innovation and Excellence
            </h2>
            <p className="text-base mt-2 lg:text-xl">
              We continuously innovate to improve our services. Our commitment
              to excellence drives us to adopt the latest technologies and best
              practices in the industry.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Commitment;
