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


import SignUp from './Pages/SignUpPage'

import LoginPage from './Pages/LoginPage'



function App() {


  return (
    <div >
      <Navbar/>
      <SignUp/>
      
      <LoginPage/>
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
