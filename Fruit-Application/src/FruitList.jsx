import React, { useState } from 'react'
import FruitDetails from './fruitDetails'

const FruitList = ({fruits, setFruitz}) => {
    
    const [fruitzData, setFruitzData] = useState({
        name: '',
        color: '',
        description: '',
        price: '0',
        weight: '0'
    })

    const handleChange = (event) => {
        const {name, value} = event.target
        setFruitzData({...fruitzData, [name]: value})
    }
    

    const handleSubmit = (event) => {
        event.preventDefault()
        fetch('http://localhost:3000/fruits',{
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(fruitzData)
        })
        .then(response => response.json())
        .then(data => setFruitz([...fruits, data]))
        .catch(error => console.error('Error:', error))
        // setFruitz([...fruits, { ...fruitzData, key: fruitzData.id }])

    }
  return (
    <div>
        {fruits.length > 0 ?fruits.map(fruit =>(
            <FruitDetails  key={fruit.id} fruit={fruit} 
            name = {fruit.name}
            color = {fruit.color}
            description = {fruit.description}
            price = {fruit.price}
            weight = {fruit.weight}
            id = {fruit.id}
            fruits = {fruits}
            setFruitz={setFruitz}
            
            />
        )):null}
        <form onSubmit={handleSubmit}>
            <input 
            type="text" 
            name="name" 
            placeholder="name" 
            value={fruitzData.name} 
            required
            onChange={handleChange}
            />
            <input 
            type="text" 
            name="description" 
            value={fruitzData.description} 
            placeholder="description" 
            required
            onChange={handleChange}
            />
            <input 
            type="text" 
            name="color" 
            value={fruitzData.color} 
            placeholder="color" 
            required
            onChange={handleChange}
            />
            <input 
            type="number" 
            name="price" 
            value={fruitzData.price} 
            placeholder="price" 
            required
            onChange={handleChange}
            />
            <input 
            type="number" 
            name="weight" 
            value={fruitzData.weight}
            placeholder="weight" 
            required
            onChange={handleChange}
            />
            <button type="submit">Add Fruit</button>
        </form>
    </div>
  )
}

export default FruitList