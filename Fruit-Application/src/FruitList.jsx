import React from 'react'
import FruitDetails from './fruitDetails'

const FruitList = ({fruits}) => {
  return (
    <div>
        {fruits.map(fruit =>(
            <FruitDetails  key={fruit.id} fruit={fruit} 
            name = {fruit.name}
            color = {fruit.color}
            description = {fruit.description}
            price = {fruit.price}
            weight = {fruit.weight}
            id = {fruit.id}
            
            />
        ))}
    </div>
  )
}

export default FruitList