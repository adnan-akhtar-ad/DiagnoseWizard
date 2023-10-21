import { useState } from 'react'

import './App.css'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import About from './Pages/About'
import ServicesPage from './Pages/ServicesPage'

function App() {


  return (
    <div >
      <Navbar/>
      <Home/>
      <About/>
      <ServicesPage/>
    </div>
  )
}

export default App
