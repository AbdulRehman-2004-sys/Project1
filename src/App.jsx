import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card_main from './components/Card_main'
import FetchData from './components/FetchData'
import Page1 from './Page/Page1'

function App() {
  const handleMouse=(e)=>
  {
    
  }
  window.addEventListener("mousemove",handleMouse)
  return (
    <>
      <Navbar/>
      <Hero/>
      <Page1/>
      <FetchData/>

    </>
  )
}

export default App
