import { useState } from 'react'
import './App.css'
import Card from './camponents/Card.jsx'
import Navbar from './camponents/Navbar.jsx'
import Hero from './camponents/Hero.jsx'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>  
        <Navbar />
        <Hero />
        {/* <Card />
        <Card /> */}
    </>
  )
}

export default App
