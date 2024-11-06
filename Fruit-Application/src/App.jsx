
import React from 'react'
import './App.css'
import FruitList from './Fruitlist'
const App = () => {
    const fruits = [
      {id:1, name: 'Apple', color: 'Red', description: 'Red Delicious', price:'12', weight: '10'},
      {id:2,name: 'Banana', color: 'Yellow', description: 'Musaceae family,', price:'52', weight: '13'},
      {id:3,name: 'Orange', color: 'Orange', description: 'Red Delicious', price:'12', weight: '11'},
      {id:4,name: 'Grape', color: 'Purple', description: 'Lauraceae family', price:'42', weight: '16'},
      {id:5,name: 'Pineapple', color: 'Green', description: 'Musaceae family,', price:'22', weight: '86'},
      {id:6,name: 'Strawberry', color: 'Red', description: 'Red Delicious', price:'12', weight: '33'},
      {id:7,name: 'Mango', color: 'Yellow', description: 'Lauraceae family', price:'32', weight: '27'},
      {id:8,name: 'Papaya', color: 'Green', description: 'Red Delicious', price:'23', weight: '65'},
      {id:9,name: 'Cherry', color: 'Red', description: 'Red Delicious', price:'44', weight: '9'},
      {id:10,name: 'Watermelon', color: 'Green', description: 'Red Delicious', price:'14', weight: '33'},
      {id:11,name: 'Kiwi', color: 'Green', description:'Rosaceae family', price:'13', weight: '2'},
      {id:12,name: 'Peach', color: 'Yellow', description: 'Musaceae family,', price:'12', weight: '20'}
    ]
  return (
    <div>
      <h1>Fruits Application</h1>
      <FruitList fruits = {fruits}/>
    </div>
  )
}

export default App