import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Sections from './components/Sections.jsx'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>  
        <Navbar />
        <Hero />
        <Sections />
    </>
  )
}

export default App
