import { useState } from 'react'

import './App.css'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import Hero from './Pages/Hero'
import About from './Pages/About'
import ServicesPage from './Pages/ServicesPage'
import WhyChooseUs from './Pages/WhyChooseUs'
import CarousalPage from './Pages/CarousalPage'
import ConnectWithUs from './Pages/ConnectWithUs'
import Footer from './Pages/Footer'
import LoginPage from './Pages/LoginPage'
import SignUpPage from './Pages/SignUpPage'
import ChangePassword from './Pages/ChangePassword'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Route, Routes } from 'react-router-dom'
import { useRef } from 'react'
function App() {
  const HomeSection = useRef(null);
  const AboutSection = useRef(null);
  const ServicesPageSection = useRef(null);
  const WhyChooseUsSection = useRef(null);
  const CarousalPageSection = useRef(null);
  const ConnectWithUsSection = useRef(null);
  const FooterSection = useRef(null);


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
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<SignUpPage />} />
      </Routes>




      {/* <LoginPage /> */}
      {/* <ChangePassword /> */}
      {/* <SignUpPage /> */}
      {/* <Home /> */}
      {/* <About />
      <ServicesPage />
      <WhyChooseUs />
      <CarousalPage />
      <ConnectWithUs />
      <Footer /> */}
    </div>
  )
}

export default App
