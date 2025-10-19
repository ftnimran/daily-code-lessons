import { useState } from 'react'
import './App.css'
import Card from './camponents/Card.jsx'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='card-container'>
        <Card />
        <Card />
        <Card />
      </div>
    </>
  )
}

export default App
