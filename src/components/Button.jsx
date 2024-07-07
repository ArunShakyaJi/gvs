import React from "react";

const Button = ({size = 2 , mr = 15 , text = 'Verify' , mm = '3'} , ) => {
  return (
    <button className={`bg-primary text-white  hover:bg-blue-700 m-${mr} px-6 py-${size} rounded-md mb-${mm}`} >
      {text}
    </button>
  );
};

export default Button;

// className="bg-primary text-white  hover:bg-blue-700 px-6 py-2 rounded-md"