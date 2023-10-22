import { useState } from 'react'

import './App.css'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import About from './Pages/About'
import ServicesPage from './Pages/ServicesPage'
import WhyChooseUs from './Pages/WhyChooseUs'

function App() {


  return (
    <div >
      <Navbar/>
      <Home/>
      <About/>
      <ServicesPage/>
      <WhyChooseUs/>
    </div>
  )
}

export default App
