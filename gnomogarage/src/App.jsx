import { useState } from 'react'
import './App.css'
import AboutUs from './components/AboutUs/about_Us'
import './App.css'
import NavBar from './components/navBar_Garage/nav_Bar.jsx'
import Contato from './components/contato_Garage/contato.jsx'
import Rodape from './components/rodape_Garage/rodape.jsx'

function App() {
  return (
    <>
      <NavBar/>
      <br/>
      <br/>
      <br/>
      <AboutUs />
      <br/>
      <br/>
      <br/>
      <Contato/>
      <br/>
      <br/>
      <br/>
      <Rodape/>
    </>
  )
}
export default App
