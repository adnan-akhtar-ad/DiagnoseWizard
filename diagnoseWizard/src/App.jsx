import { useState } from 'react'

import './App.css'
import Navbar from './Components/Navbar'
import Hero from './Pages/Hero'
import LoginPage from './Pages/LoginPage'
import SignUpPage from './Pages/SignUpPage'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Route, Routes } from 'react-router-dom'
import { useRef } from 'react'
import PageNotFound from './Pages/PageNotFound'
function App() {
  const HomeSection = useRef(null);
  const AboutSection = useRef(null);
  const ServicesPageSection = useRef(null);
  const WhyChooseUsSection = useRef(null);
  const CarousalPageSection = useRef(null);
  const ConnectWithUsSection = useRef(null);
  const FooterSection = useRef(null);
  const jwt = sessionStorage.getItem('jwt');
  return (
    <div >
      <Navbar message={"login successful"}
        AboutSection={AboutSection}
        HomeSection={HomeSection}
        ServicesPageSection={ServicesPageSection}
        WhyChooseUsSection={WhyChooseUsSection}
        CarousalPageSection={CarousalPageSection}
        ConnectWithUsSection={ConnectWithUsSection}
        FooterSection={FooterSection}
      />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />

      <Routes>
        <Route path='/'
          element={
            <Hero
              AboutSection={AboutSection}
              HomeSection={HomeSection}
              ServicesPageSection={ServicesPageSection}
              WhyChooseUsSection={WhyChooseUsSection}
              CarousalPageSection={CarousalPageSection}
              ConnectWithUsSection={ConnectWithUsSection}
              FooterSection={FooterSection}
            />} />
        {!jwt && <Route path='/login' element={<LoginPage />} />}
        {!jwt && <Route path='/signup' element={<SignUpPage />} />}
        <Route path='*' element={<PageNotFound />} />
      </Routes>


    </div>
  )
}

export default App;
