import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { links } from "../../services/constants";

import { IoIosArrowDropdown } from "react-icons/io";
import { IoIosArrowDropup } from "react-icons/io";
import { GiHidden } from "react-icons/gi";


const Navlinks = () => {
  const [heading, setHeading] = useState('');
  const [click , setClick] = useState(false);


  return (
    <>
      {links.map((link, index) => (
        <div key={index}>
          <div className="px-3 text-left md:cursor-pointer group">
            <h1
              className="py-4 flex flex-row justify-between items-center text-[16px] font-semibold md:pr-0 pr-5 text-gray-600 hover:text-primary "
              onClick={() => heading !== link.name ? setHeading(link.name) : setHeading('')}
            >
              <NavLink to={link.route}>
              {link.name}
              </NavLink>
             
              {
                link.submenu ? (
                  <div className="text-xl md:hidden">
                    {heading === link.name ? <IoIosArrowDropup /> : <IoIosArrowDropdown />}
                  </div>
                ) : (
                  <div className="text-xl">
                    
                  </div>
                )
              }
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
                        <Link to={mlink.route} className=" font-semibold">
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
          <div className={`${heading === link.name ? 'md:hidden' : 'hidden'}`}>
            {link.submenu && (
              <div>
                {link.sublink.map((slink, sindex) => (
                  <li key={sindex} className="py-2 pl-14">
                    <Link to={slink.route}>
                      <h1 className="font-semibold">{slink.name}</h1>
                    </Link>
                  </li>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
    </>
  );
};

export default Navlinks;
