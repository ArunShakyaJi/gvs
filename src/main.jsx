import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import AddressVerification from './services/AddressVerification.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Pages/Home.jsx'
import Education from './services/Educationfinal.jsx'
import Contact from './Pages/Contact.jsx'
import IdentityVerification from './services/IdentityVerification.jsx'
import Service from './Pages/Service.jsx'
import About from './Pages/About.jsx'
import Solution from './Pages/Solution.jsx'
import Reference from './services/Reference.jsx'
import Credit from './services/Credit.jsx'  
import CriminalCheck from './services/Criminal.jsx'
import Due from './services/Due.jsx'
import Employee from './Solutions/Employee.jsx'
import PrevEmployee from './services/PreviousEmployement.jsx'
import CustomerEmployee from './Solutions/CustomeVerification.jsx'
import Driver from './Solutions/DriverVerification.jsx'
import Background from './components/background.jsx'
import HouseKeeper from './Solutions/HouseKeeper.jsx'
import Tennent from './Solutions/Tenant.jsx'
import TennantConstact from './Pages/TennantContact.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
        {
            path: "/",
            element: <Home />,

          },
          {
            path: '/contact-us',
            element: <Contact />
          },
          {
            path:'/about',
            element:<About />
          },
          {
            path: '/solutions',
            element : <Solution />
          },
          {
            path: '/service',
            element: <Service/>
          },
        {
          path: '/education-service',
          element: <Education /> 
        },
        {
          path: '/service/identity-verification',
          element: <IdentityVerification/>
        },
        {
          path: '/service/address-verification',
          element: <AddressVerification />
        },
        {
          path: '/service/reference-check' ,
          element: <Reference />
        },
        {
          path: '/service/credit-check',
          element: <Credit />
        },
        {
          path: '/service/criminal-check',
          element: <CriminalCheck />
        },
        {
          path: '/service/financial-due-check',
          element: <Due />
        },
        {
          path: '/service/previous-employment-check',
          element: <PrevEmployee />
        },
        {
          path: '/solutions/employment-verification',
          element: <Employee />
        },
        {
          path: '/solutions/customer-verification',
          element: <CustomerEmployee />
        },
        {
          path: '/solutions/driver-verification',
          element: <Driver />
        },
        {
          path: '/back',
          element: <Background/>
        },
        {
          path: '/solutions/housekeeper-verification',
          element: <HouseKeeper />
        },
        {
          path: '/solutions/tenant-verification',
          element: <Tennent />
        },
        {
          path: '/tennent-contact',
          element: <TennantConstact />
        }
    ]
},
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
