import React, { useEffect } from 'react'
import Footer from '../components/Footer/Footer'
import AOS from 'aos';
import 'aos/dist/aos.css';
const Footer = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      
    });})
  return (
    <div data-aos="fade-up">
        <Footer />
    </div>
  )
}

export default Footer