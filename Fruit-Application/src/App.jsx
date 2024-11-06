
import React, { useEffect,useState } from 'react'
import './App.css'
import FruitList from './Fruitlist'
const App = () => {
  const [fruitz, setFruitz,] = useState("")
  useEffect(() =>{
    fetch('http://localhost:3000/fruits')
     .then(response => response.json())
     .then(data => setFruitz(data))
     .catch(error => console.error('Error:', error))
  },[]);
  
  return (
    <div>
      <h1>Fruits Application</h1>
      <FruitList fruits = {fruitz} setFruitz={setFruitz}/>
    </div>
  )
}

export default App