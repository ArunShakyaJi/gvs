// Card.js
import React, { useEffect } from 'react';
import './Card.css'; // Import the custom CSS file
import Button from '../Button';
import { data } from './Cardfile'; // Import the data from the Cardfile.js file
import AOS from 'aos';
import 'aos/dist/aos.css';

const Card = () => {
  const [change, setChange] = React.useState(false);
  useEffect(() => {
    AOS.init({
      duration: 1000,
      
    });
  })
  return (
    <div>
      <div className='flex justify-center items-center bg-slate-200 py-4 '>
      <h1 className='text-[#005b96] text-center font-semibold font-[Poppins] text-5xl my-10 mx-10 md:mx-1 drop-shadow pb-10' data-aos="fade-up">Why Choose GVS</h1>
      </div>

    <div className="flex flex-wrap justify-center items-center bg-slate-200 pb-16">
      
      {data.map((item, index) => (
        <div key={index} className="max-w-sm m-5 rounded overflow-hidden shadow-lg group relative bg-slate-100 object-cover md:mx-16" data-aos="fade-up">
          <div className="w-full min-w-[300px] max-w-[300px] object-cover transition-opacity duration-200 md:group-hover:opacity-0 px-5" >
            <img
              className="w-full  object-cover"
              src={`${item.route}`}
              alt="Cover"
              
              />
              {/* #46B2C8 */}
            <div className="px-6 py-4 text-center border-t-4 border-black">
              <div className="font-bold text-xl mb-10 ">{item.heading}</div>
              {/* <Button text="Read More " mm='8' /> */}
              <button onClick={()=> (setChange(true))} className='bg-primary text-white  hover:bg-blue-700  px-6 py-3 rounded-md font-[Rubik] text-xl mb-8'>Read More</button>
            </div>
          </div>
          <div className="absolute inset-0 flex  items-center justify-center bg-white px-6 py-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="hidden-content">
              <h1 className="font-semibold font-[Rubik] text-xl mb-2">{item.heading}</h1>
              <p className='text-sm'>
                {item.text}
              </p>
            </div>
          </div>
         
        </div>
      ))}
    </div>
      </div>
  );
};

export default Card;
