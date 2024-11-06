import React from 'react'

const FruitDetails = ({id,name,color,description,price,weight,fruitz,setFruitz}) => {
  const handleDelete = (id) => {
    fetch(`http://localhost:3000/fruits/${id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      
      
    })
     .then(response => response.json())
     .then(() => {
       const updatedFruits = fruitz.filter(fruit => fruit.id!== id)
       setFruitz(updatedFruits)
     })
     .catch(error => console.log(error))
  }
  return (
    <div>
        <h1>{name}</h1>
        <h2>{description}</h2>
        <p>Color: {color}</p>
        <p>Price: {price} USD</p>
        <p>Weight: {weight} kg</p>
        <p>ID: {id}</p>
        <button onClick={handleDelete}>Delete</button>
    </div>
  )
}

export default FruitDetails