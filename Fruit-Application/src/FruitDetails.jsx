import React from 'react'

const FruitDetails = ({id,name,color,description,price,weight}) => {
  return (
    <div>
        <h1>{name}</h1>
        <h2>{description}</h2>
        <p>Color: {color}</p>
        <p>Price: {price} USD</p>
        <p>Weight: {weight} kg</p>
        <p>ID: {id}</p>
    </div>
  )
}

export default FruitDetails