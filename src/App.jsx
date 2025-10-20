import { useState } from 'react'
import './App.css'
import Card from './camponents/Card.jsx'
import Navbar from './camponents/Navbar.jsx'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>  
        <Navbar />
        <Card />
        <Card />
    </>
  )
}

export default App
