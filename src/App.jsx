import React  from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'



function App() {


  return (
    // <Router>
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path='/education' element={<Education />} />
    //   </Routes>
    // </Router>
    <div >
    <Navbar />
    <main>
    <Outlet />
    </main>
    <Footer/>
    </div>
  )
}

export default App
