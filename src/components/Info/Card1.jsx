import React from 'react';
import { BsBuildingsFill } from "react-icons/bs";

const Card = () => {
  return (

    <div className=" flex justify-around items-center max-w-56 mx-8   my-6 text-wrap bg-white shadow-lg rounded-lg overflow-hidden ">
      <div className="p-6 flex flex-col items-center">
        <BsBuildingsFill className="text-6xl text-blue-600 w-24 h-24 mb-4" />
        <h2 className="text-2xl font-semibold mb-2 ">Enterprise</h2>
        <p className="text-center text-sm  text-gray-700">
        Background check solutions for large corporates with a total strength of more than 500 employees. 
        </p>
      </div>
    </div>
  );
};

export default Card;
