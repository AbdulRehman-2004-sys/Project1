import React from 'react'
import './App.css'
import Navbar from './components/Navbar'

import Contact from './Page/Contact'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Page/Home'

function App() {
  const handleMouse=(e)=>
  {
    
  }
  window.addEventListener("mousemove",handleMouse)
  return (
    <>
      

      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
