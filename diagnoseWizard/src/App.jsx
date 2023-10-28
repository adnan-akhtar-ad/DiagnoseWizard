import { useState } from 'react'

import './App.css'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import About from './Pages/About'
import ServicesPage from './Pages/ServicesPage'
import WhyChooseUs from './Pages/WhyChooseUs'
import CarousalPage from './Pages/CarousalPage'
import ConnectWithUs from './Pages/ConnectWithUs'
import Footer from './Pages/Footer'
import LoginPage from './Pages/LoginPage'
import SignUpPage from './Pages/SignUpPage'
import ChangePassword from './Pages/ChangePassword'



function App() {


  return (
    <div >
      <Navbar/>
      <LoginPage/>
      <ChangePassword/>
      <SignUpPage/>
      <Home/>
      <About/>
      <ServicesPage/>
      <WhyChooseUs/>
      <CarousalPage/>
      <ConnectWithUs/>
      <Footer/>
    </div>
  )
}

export default App
