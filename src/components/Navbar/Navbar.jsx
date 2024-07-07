import React from "react";
import Logo from "../Logo";
// import { Link } from "react-router-dom";
import Navlinks from "./Navlinks";
import Button from "../Button";
import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

//navlink code

import { Link, NavLink } from "react-router-dom";
import { links } from "../../services/constants";

import { IoIosArrowDropdown } from "react-icons/io";
import { IoIosArrowDropup } from "react-icons/io";
import { GiHidden } from "react-icons/gi";

function Navbar() {
  const [heading, setHeading] = useState("");

  const [open, setOpen] = useState(false);
  return (
    <>
      <nav className="shadow-md drop-shadow-sm z-50">
        <div className="bg-[#fdfdfd] ">
          <div className="flex items-center font-medium justify-around ">
            <div className="z-50  p-1 md:w-auto w-full flex justify-between items-center mr-5">
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
                <Navlinks />
              </div>
            </ul>
            <div className="md:block hidden ">
              <Button />
            </div>

            {/* Mobile view */}
            <ul
              className={`md:hidden bg-white absolute w-full h-screen top-20 left-0 transition-transform duration-500 ${
                open ? "translate-x-0" : "-translate-x-full"
              } z-50`}
            >
              <li>
                <Link to="/" className="py-4 px-4 inline-block">
                  <h1 className="text-gray-700 hover:text-primary font-semibold">
                    Home
                  </h1>
                </Link>
              </li>
              <div>
                {/* nav livk code */}

                <>
                  {links.map((link, index) => (
                    <div key={index}>
                      <div className="px-3 text-left md:cursor-pointer group">
                        <h1
                          className="py-4 flex flex-row justify-between items-center font-semibold md:pr-0 pr-5 text-gray-600 hover:text-primary "
                          onClick={() =>
                            heading !== link.name
                              ? setHeading(link.name)
                              : setHeading("")
                          }
                        >
                          <NavLink to={link.route}>
                            <h1
                              onClick={() => {
                                setOpen(!open);
                              }}
                            >
                              {link.name}
                            </h1>
                          </NavLink>

                          {link.submenu ? (
                            <div className="text-xl md:hidden">
                              {heading === link.name ? (
                                <IoIosArrowDropup />
                              ) : (
                                <IoIosArrowDropdown />
                              )}
                            </div>
                          ) : (
                            <div className="text-xl"></div>
                          )}
                        </h1>
                        {link.submenu && (
                          <div>
                            <div className="absolute top-18  hidden group-hover:md:block hover:md:block drop-shadow-md z-54">
                              <div className="py-3 ">
                                {/* //pointer */}
                                <div className="w-4 h-4 left-10 absolute mt-1  bg-white rotate-45"></div>
                              </div>
                              <div className="bg-white shadow rounded grid grid-cols-2 z-96 mr-10">
                                {link.sublink.map((mlink, mindex) => (
                                  <li
                                    key={mindex}
                                    className="text-sm hover:text-primary  mx-3 py-3 font-medium"
                                  >
                                    <Link
                                      to={mlink.route}
                                      className=" font-semibold"
                                    >
                                      {mlink.name}
                                    </Link>
                                  </li>
                                ))}
                              </div>
                            </div>
                          </div>
                        )}
                      </div>

                      {/** Mobile view */}
                      <div
                        className={`${
                          heading === link.name ? "md:hidden" : "hidden"
                        }`}
                      >
                        {link.submenu && (
                          <div>
                            {link.sublink.map((slink, sindex) => (
                              <li key={sindex} className="py-2 pl-14">
                                <Link to={slink.route}>
                                  <h1
                                    className="font-semibold"
                                    onClick={() => {
                                      setOpen(!open);
                                    }}
                                  >
                                    {slink.name}
                                  </h1>
                                </Link>
                              </li>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </>
              </div>
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
