import React , {useEffect} from 'react'
import Button from './Button'
import { Link } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Main = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      
    });
  })
  return (
    <div className=' bg-[#f7f7f7] sm:mb-0  ' > 
      <div className='flex flex-col md:flex-row justify-start items-center   sm:mx-6 '>
        <div className=' w-full md:w-1/2  px-10   lg:px-16  my-10 '>
        <div className=''>
          <p className='text-slate-600 font-bold text-2xl ' data-aos="fade-up">Genuine Verification Service</p> 
        <h1 className='text-5xl md:text-7xl font-[Roboto] font-bold text-[#005b96] pb-4' data-aos="fade-up">GVS Your Shield Against Fraud </h1>
        {/* <h1 className='text-5xl md:text-7xl  pb-4 font-[Roboto] font-bold drop-shadow text-[#005b96]'>Welcome to GVS</h1> */}
        {/* <p className='text-slate-600 font-bold text-2xl'>Genuine Verification service</p> */}
        </div>
          <p className='text-sm md:text-xl  font-[Poppins] font-semibold py-10  ' data-aos="fade-up">Ensure the authenticity of your workforce with our reliable background verification services.</p>
          <Link to='/contact-us' data-aos="fade-up">
              <button className="bg-blue-600 hover:bg-blue-800 text-white  font-bold py-4 px-4  mt-10 rounded-3xl text-3xl " data-aos="fade-up">
               Verify Now
              </button>
              </Link>
        </div>
        <div className='w-screen md:w-1/2 flex items-start  my-auto ' data-aos="fade-up"> 
          {/* <img className='w-auto md:w-[700px]  h-auto  md:my-0 mb-0' src='./mainImage.png' /> */}
          <img className='w-auto md:w-[650px] mt-0 ' src='./frame2.png' />
        </div>
      </div>
    </div>
  )
}

export default Main
