import React from "react";
import Logo from "../Logo";
import { Link } from "react-router-dom";
import Navlinks from "./Navlinks";
import Button from "../Button";
import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <nav className="shadow-md drop-shadow-sm" >
        <div className="bg-[#fdfdfd] ">
          <div className="flex items-center font-medium justify-around ">
            <div className="z-30  p-1 md:w-auto w-full flex justify-between items-center mr-5">
              <Logo />
              <div
                className="text-3xl md:hidden cursor-pointer "  
                onClick={() => {
                  setOpen(!open);
                }}
              >
                {open ? <IoClose /> : <IoMenu />}
              </div>
            </div>

            <ul className="md:flex hidden text-xl uppercase items-center gap-8 font-[Poppins]">
              <li>
                <Link
                  to={"/"}
                  className="text-gray-600 font-semibold hover:text-primary  px-4 inline-block"
                >
                  Home
                </Link>
              </li>
              <div className="flex justify-center items-center gap-10">
              <Navlinks/>
              </div>
            </ul>
            <div className="md:block hidden ">
              <Button />
            </div>

            {/* Mobile view */}
            <ul
              className={`md:hidden bg-white absolute w-full h-screen top-20 left-0 transition-transform duration-500 ${
                open ? "translate-x-0" : "-translate-x-full"
              } z-70`}
            >
              <li>
                <Link to="/" className="py-4 px-4 inline-block">
                  <h1 className="text-gray-700 hover:text-primary font-semibold">Home</h1>
                </Link>
              </li>
              <Navlinks />
              <div className="py-5">
                <Button />
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
