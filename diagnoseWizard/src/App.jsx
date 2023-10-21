import { useState } from 'react'

import './App.css'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import About from './Pages/About'

function App() {


  return (
    <div >
      <Navbar/>
      <Home/>
      <About/>
    </div>
  )
}

export default App
