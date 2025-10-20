import { useState } from 'react'
import './App.css'
import Card from './camponents/Card.jsx'
import Navbar from './camponents/Navbar.jsx'
import Hero from './camponents/Hero.jsx'
import Section from './camponents/section.jsx'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>  
        <Navbar />
        <Hero />
        <Section />
    </>
  )
}

export default App
