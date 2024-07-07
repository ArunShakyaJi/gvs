import React from 'react';

const Trial = () => {
  return (
    <>
      <div className="relative h-screen overflow">
        {/* <div className="absolute inset-0 bg-bgBlue rounded-br-full "></div> */}

        {/* Main Content */}
        <div className="flex flex-col md:flex-row items-center justify-center p-4 md:p-8 h-full relative ">
          <div className="md:w-1/2 p-4 flex flex-col items-center">
            <h2 className="text-5xl mb-4 text-customBlue text-center">
              Genuine Credentials <br /> Confident Decisions
            </h2>
            <p className="text-xl mb-4 text-center">
              Empower your business with verified academic <br /> achievements and professional licenses.
            </p>
            <button className="text-xl mt-4 px-6 py-2 bg-customBlue text-white font-semibold rounded-xl hover:bg-blue-700">
              Contact Sales
            </button>

            <div className="mt-4"></div>
            <ul className="text-left mt-4">
              <li className="flex items-center mb-2 text-lg">
                <img src="/tickmark.png" alt="Blue Tick" className="w-7 h-7 mr-2" />
                Verify to Trust: Confirm Educational Credentials
              </li>
              <li className="flex items-center mb-2 text-lg">
                <img src="/tickmark.png" alt="Blue Tick" className="w-7 h-7 mr-2" />
                Secure Your Business with Verified Education
              </li>
              <li className="flex items-center mb-2 text-lg">
                <img src="/tickmark.png" alt="Blue Tick" className="w-7 h-7 mr-2" />
                Protect your organization against liability claims
              </li>
              <li className="flex items-center text-lg">
                <img src="/tickmark.png" alt="Blue Tick" className="w-7 h-7 mr-2" />
                Reduce Risk with Reliable Education Verification
              </li>
            </ul>
          </div>

          <div className="md:w-1/2 p-4 z-[-1]">
            <img src="/home1.png" alt="" className="w-full h-auto object-cover rounded-tl-lg rounded-br-none md:w-auto lg:w-auto xl:w-auto" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Trial;
