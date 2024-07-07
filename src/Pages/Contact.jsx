import React, { useState, useRef, useEffect } from "react";
import Whygvs from "../components/Whygvs/Whygvs";
import Slider from "../components/imageSlider/Slider";
import Location from "../components/Location";
import Loader from "../components/Loader.jsx";
import Button from "../components/Button";
import Commitment from "../components/Commitment.jsx";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Form = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  const formRef = useRef(null);
  const notify = () => toast("Form Submitted Successfully!");
  const notifyFalse = () => toast("Please Enter credentials Properly");

  const scriptUrl =
    "https://script.google.com/macros/s/AKfycbwKsL0r5bWkD0n-6AjIRKGF0h1hT3Tdo7O2fDOG_6YXdpcvxYe9cYgyKivYcLaebe26zw/exec";
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const form = formRef.current;
      const checkEmail = form.email.value;
      const checkPhone = form.phone.value;

      if (checkEmail === "" || checkPhone === "") {
        alert("Please fill all the fields");
        setLoading(false);
        return;
      }

      if (checkPhone.length !== 10) {
        alert("Please enter a valid phone number");
        setLoading(false);
        return;
      }

      const corporateEmails = [
        "@gmail.com",
        "@yahoo.com",
        "@outlook.com",
        "@hotmail.com",
        "@aol.com",
        "@msn.com",
        "@live.com",
        "@example.com",
      ];

      if (corporateEmails.some((domain) => checkEmail.endsWith(domain))) {
        alert("Please enter your corporate email address");
        setLoading(false);
        return;
      }

      // form.dateTime.value = new Date().toISOString();

      await fetch(scriptUrl, {
        method: "POST",
        body: new FormData(formRef.current),
      });
      notify();
      console.log("SUCCESSFULLY SUBMITTED");
    } catch (err) {
      console.log(err);
      notifyFalse();
    } finally {
      setLoading(false);
      // formRef.current.reset();
    }
  };

  return (
    <>
      <div className="bg-gradient-to-tr from-zinc-50 to-blue-700 py-10 md:py-16 ">
        <div className="flex flex-col justify-center items-center lg:flex-row bg-[#eefaff]  rounded-3xl shadow-lg md:mx-16 lg:mx-44 ">
          <div className="w-full md:w-1/2 p-4 flex flex-col justify-center items-center  object-fit " data-aos="fade-up">
            <img
              src="/contactImage.png"
              className="transform scale-x-[-1] w-auto h-auto max-w-[400px] "
              alt="Contact"
            />
            <div className="w-[350px] flex flex-col">
              <div className="flex flex-row justify-start items-center gap-10 mb-4 bg-white rounded border-b-2 border-black shadow-lg py-2 px-3">
                <FaPhoneAlt className="text-blue-700 size-8" />
                <div className="flex flex-col">
                  <h1 className="font-[Rubik]">Phone Number</h1>
                  <p className="font-semibold">+91 9871476291</p>
                </div>
              </div>
              <div className="flex flex-row justify-start items-center gap-10 mb-4 bg-white rounded border-b-2 border-black shadow-lg py-2 px-3">
                <MdEmail className="text-blue-700 size-8" />
                <div className="flex flex-col">
                  <h1 className="font-[Rubik]">Email Address</h1>
                  <p className="font-semibold">yogeshsbist@genuineservices.co.in</p>
                </div>
              </div>
              <div className="flex flex-row justify-start items-center gap-10 mb-4 bg-white rounded border-b-2 border-black shadow-lg py-2 px-3">
                <FaLocationDot className="text-blue-700 size-8" />
                <div className="flex flex-col">
                  <h1 className="font-[Rubik]">Location</h1>
                  <p className="font-semibold text-sm">
                    6th floor, Suneja Tower ll, District
                    <br />
                    Center, JanakPuri, New Delhi-110058
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 p-4 flex flex-col-1 justify-center lg:justify-start">
            <div className="mx-2 lg:mx-10 my-8 w-[450px] border border-10 rounded-xl shadow-md bg-white z-none">
              <h1 className="text-wrap text-center font-[Rubik] md:text-xl text-md my-4 text-primary font-bold">
                Your First step towards Verification
              </h1>
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                name="google-sheet"
                className="space-y-3"
              >
                <div className="mx-10 mt-8">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="First Name"
                    placeholder="First Name"
                    className="mt-1 block w-full p-2 border-b-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>

                <div className="mx-10 my-8">
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="Last Name"
                    placeholder="Last Name"
                    className="mt-1 block w-full p-2 border-b-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>

                <div className="mx-10 my-8">
                  <label
                    htmlFor="companyName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="companyName"
                    placeholder="Your Company Name"
                    name="Company"
                    className="mt-1 block w-full p-2 border-b-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
                <div className="mx-10 my-8">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="Email"
                    placeholder="Your Email *"
                    className="mt-1 block w-full p-2 border-b-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
                <div className="mx-10 my-8">
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Phone No
                  </label>
                  <input
                    type="text"
                    id="phone"
                    name="Phone"
                    placeholder="Your Phone *"
                    className="mt-1 block w-full p-2 border-b-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>

                <div className="mx-10 my-8">
                  <label
                    htmlFor="remark"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Remark
                  </label>
                  <textarea
                    id="remark"
                    placeholder="Enter your remark"
                    name="Remark"
                    rows="3"
                    className="mt-1 block resize-none w-full p-2 border-b-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
                <div className="flex justify-center">
                  {loading ? (
                    <div className="w-full grid place-items-center my-4 py-2 px-5">
                      <Loader />
                    </div>
                  ) : (
                    <button
                      type="submit"
                      className="bg-blue-500 text-white my-4 py-2 px-5 font-[Rubik] font-semibold button-custom rounded-xl shadow-lg hover:cursor-pointer"
                    >
                      Submit
                    </button>
                  )}
                  <ToastContainer />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Whygvs />
      <Commitment />
      <Slider />
      <Location />
    </>
  );
};

export default Form;
