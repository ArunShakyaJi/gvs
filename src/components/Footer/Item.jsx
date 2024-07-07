import React from "react";

const Item = ({ Links, title }) => {
  return (
    <ul className="sm:text-3xl gap-10 pl-16">
      <h1 className="mb-1 font-semibold flex justify-start md:justify-left text-xl items-center">{title}</h1>
      {Links.map((link) => (
        <li key={link.name} className="flex justify-start md:justify-left items-center ">
          <a
            className="text-gray-400 hover:text-teal-400 duration-300
          text-sm cursor-pointer leading-6  "
            href={link.link}
          >
            {link.name}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Item;
