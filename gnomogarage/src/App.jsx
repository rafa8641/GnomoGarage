import { useState } from 'react'
import './App.css'
import AboutUs from './components/AboutUs/about_Us'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AboutUs />
    </>
  )
}

export default App
