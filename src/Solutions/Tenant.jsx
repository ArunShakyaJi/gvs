import React , {useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

export default function Tenant() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });})
  return (
    <>
      <section className="w-screen  bg-slate-100">
        <div className='flex flex-col md:flex-row  '>
        <div className="bg-slate-100 w-full md:w-1/2 flex flex-col justify-center lg:px-20 my-10">
          <div className="w-full px-6 ">
            <img  data-aos="fade-up" src='/Tennant/101.png' className='w-full' alt="Tenant verification" />
          </div>
          <div>
            <h2 className='mx-4 text-2xl font-bold lg:text-4xl'  data-aos="fade-up">Hassle-free Tenant Verification Service just a click away.</h2>
            <p className='mx-4 mt-2 lg:text-xl'   data-aos="fade-up">Detailed background check, quick turnaround time & pocket-friendly pricing</p>
          </div>
        </div>
        <div className="bg-customPurple w-full md:w-1/2 flex items-center justify-center mt-4 p-6"  data-aos="fade-up">
          <div className="bg-white shadow-2xl p-4 rounded">
            <h3 className="text-xl font-bold lg:text-4xl lg:px-8 lg:py-4">How does it work?</h3>
            <p className="mt-2 text-greycolor lg:text-center lg:text-2xl">It's<span className='font-bold text-customGrey '> simpler </span>than you think!</p>
            <ul className="mt-4">
              <li className="flex items-center space-x-2 lg:text-xl lg:ml-12">
                <img src="/Tennant/icon1.png" className="w-8 h-auto lg:w-12" alt="Icon 1" />
                <span>Enter tenant details</span>
              </li>
              <li className="flex items-center space-x-2 mt-4 lg:text-xl lg:ml-12">
                <img src="/Tennant/icon2.png" className="w-8 h-auto lg:w-12" alt="Icon 2" />
                <span>Get Verification Report </span>
              </li>
            </ul>

            <div className=' lg:my-10  '>
              <Link to='/tennent-contact'>
              <button className='border-4 bg-blue-600 hover:bg-blue-800 mt-8 mb-4 lg:text-3xl lg:py-2 lg:ml-8 text-white px-8 rounded-[6px]'>Verify Your Tenant</button>
              </Link>
              </div>
          </div>
        </div>
        </div>
      </section>
      
        <section className=' lg:pb-20 bg-blue '>
        <div className="text-center mt-8">
        <h2 className="text-3xl lg:text-5xl font-[Poppins] font-semibold lg:mt-[100px] lg:pt-20"  data-aos="fade-up">SERVICES</h2>
        <hr className="mx-auto mt-2 w-[100px] lg:w-[180px] border-t-2 border-black" />
        <h2 className="text-2xl font-bold mt-6 lg:text-5xl"  data-aos="fade-up">Tenant Verification Services</h2>
        <div className="mt-6 flex flex-col md:flex-row md:justify-center md:space-x-4 lg:px-24">
        <div className="mb-4 md:mb-0 md:w-1/3 px-4  flex flex-col items-center lg:mt-[26px]">
            <img  data-aos="fade-up" src="/Tennant/102.png" className="w-14 h-auto lg:w-20" alt="" />
            <h3 className="text-lg font-semibold mt-2 lg:text-2xl"  data-aos="fade-up">Identity Check</h3>
            <p className="mt-2 text-center mx-4 lg:text-xl"  data-aos="fade-up">Verify your tenant’s identity by checking his IDs like
            Aadhaar, PAN card, Passport, Voter ID, etc. Check 
            his/her credibility and financial stability by 
            checking their Bank Receipts, Loan Defaults, FICO 
            Score, etc
            </p>
        </div>
        <div className="mb-4 md:mb-0 md:w-1/3 px-4  flex flex-col items-center mt-4 lg:mt-8">
            <img  data-aos="fade-up" src="/Tennant/103.png" className="w-14 h-auto lg:w-20" alt="" />
            <h3 className="text-lg font-semibold mt-2 lg:text-2xl"  data-aos="fade-up">Police Verification</h3>
            <p className="mt-2 text-center mx-4 lg:text-xl"  data-aos="fade-up">Get the police verification of your tenant done just 
            by uploading the details online.
            </p>
        </div>
        <div className="mb-4 md:mb-0 md:w-1/3 px-4  flex flex-col items-center mt-4">
            <img  data-aos="fade-up" src="/Tennant/104.png" className="w-14 h-auto lg:w-[80px]" alt="" />
            <h3  data-aos="fade-up" className="text-lg font-semibold mt-2 lg:text-2xl">Civil/ Criminal Record</h3>
            <p  data-aos="fade-up" className="mt-2 text-center mx-4 lg:text-xl">Get to know about our tenant’s criminal records, 
            civil litigations or any other legal issues.e will verify 
            your tenant’s identity with the Multistate Criminal 
            Background Checks for Felonies and 
            Misdemeanour.
            </p>
        </div>
        </div>
      </div>
      </section>
    <section>
         <div>
          <h2 className='text-2xl text-center mt-8 lg:mt-20 lg:text-4xl font-semibold'  data-aos="fade-up">Benefits</h2>
        </div>
        <div className="max-w-6xl mx-auto bg-white p-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="flex flex-col items-center bg-white p-4 rounded-lg shadow-xl"  data-aos="fade-up">
          <img src="/Tennant/105.png" className="w-12 h-auto mb-4" alt="Benefit 1" />
          <h3 className="text-lg font-semibold" >Legal Compliance</h3>
          <p className="text-center mt-2">
            Tenant verification is a legal compliance where you need to first register your tenant to a local police station and then you need to check for the criminal records.
          </p>
        </div>
        <div className="flex flex-col items-center bg-white p-4 rounded-lg shadow-xl"  data-aos="fade-up">
          <img src="/Tennant/106.png" className="w-12 h-auto mb-4" alt="Benefit 2" />
          <h3 className="text-lg font-semibold">Criminal Background</h3>
          <p className="text-center mt-2">
            It is always important to know the criminal history of the person you are renting your property. Criminal record check not just safeguards your property but also acts as risk deterrent for others.
          </p>
        </div>
        <div className="flex flex-col items-center bg-white p-4 rounded-lg shadow-xl" data-aos="fade-up">
          <img src="/Tennant/107.png" className="w-12 h-auto mb-4" alt="Benefit 3" />
          <h3 className="text-lg font-semibold">Eviction History</h3>
          <p className="text-center mt-2">
            Tenant verification can tell you about the eviction history of a tenant. It is always better to get rid of the person who can capture your property.
          </p>
        </div>
        <div className="flex flex-col items-center bg-white p-4 rounded-lg shadow-xl" data-aos="fade-up">
          <img src="/Tennant/108.png" className="w-12 h-auto mb-4" alt="Benefit 4" />
          <h3 className="text-lg font-semibold text-center">Previous Landlord Recommendation</h3>
          <p className="text-center mt-2">
            Tenant verification can also get you the recommendation of the past landlord of your tenant. You would know about your prospect tenant's behavior from the previous landlord's recommendation.
          </p>
        </div>
      </div>
        <h2 className='text-center mt-8 font-bold lg:text-2xl lg:font-semibold ' data-aos="fade-up">Always verify your tenant before you rent them your property.</h2>
      </div>
    </section>
    
    <section>
      <div className='mt-10'> <h2 className='text-center text-2xl font-bold lg:mt-16 lg:text-4xl' data-aos="fade-up" >Why tenant verification is important</h2>
      <p className='mx-6 mt-4 text-center lg:text-xl lg:mx-[300px]' data-aos="fade-up"> 
      Tenant verification is important while renting your property. It is always important to know the person you rent your property. People still miss to conduct this crucial requirement and make excuses.</p></div>
    
      <div className="flex flex-col md:flex-row mt-6 lg:mt-20 ">
        <div className="w-full md:w-1/2 p-2 lg:ml-20 lg:mt-10" data-aos="fade-up">
        <h2 className='text-center text-xl font-bold mb-4 lg:text-2xl lg:mb-8'>What you consider</h2>
          <img src="/Tennant/109.png" className="w-full h-auto px-6" alt="Tenant verification 1" />
        </div>
        <div className="w-full md:w-1/2 p-2" data-aos="fade-up">
        <h2 className='text-center text-xl font-bold mt-6 mb-4 lg:text-2xl'>What you don't consider</h2>
          <img src="/Tennant/110.png" className="w-full h-auto px-6 lg:w-[400px] lg:ml-36" alt="Tenant verification 2" />
        </div>
      </div>
      <div className='mt-10 px-6 mb-10'>
        <h2 className='text-center text-lg font-bold lg:text-4xl lg:font-semibold' data-aos="fade-up">Think before giving away your property, EVEN FOR RENT</h2>
        <p className='mt-4 text-center lg:text-xl' data-aos="fade-up">Looks can be deceiving, documents can be fake.</p>
        <p className='mt-4 text-center lg:text-xl' data-aos="fade-up">Background verification tells you the truth.</p>
      </div>
    </section>
    </>
  )
}
