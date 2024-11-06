import FruitList from './Fruitlist'
import Fruitsdetails from './Fruitsdetails'
import './App.css'

function App() {
  const Fruits = [
    {id:1, name: 'apple', description: 'Red Delicious', price:'ksh10', size: '0.5kg',availability:'available'},
    {id:2, name: 'Apricot', description: 'Rosaceae family', price:'ksh5', size: '10kg', availability:'available'},
    {id:3, name: 'Avocado', description: 'Lauraceae family', price:'ksh19', size: '12kg', availability:'available'},
    {id:4, name: 'Banana', description: 'Musaceae family,', price:'ksh5', size: '5kg', availability:'available'},
    {id:5, name: 'Blueberry', description: 'Ericaceae family', price:'ksh4', size: '6kg', availability:'not-available'},
    {id:6, name: 'Cherry', description: 'Red Delicious', price:'ksh26', size: '4kg', availability:'available'},
    {id:7, name: 'Coconut', description: 'Arecaceae family,', price:'ksh170', size: '3kg', availability:'available'},
    {id:8, name: 'Cranberry', description: 'Ericaceae family', price:'ksh23', size: '10kg',availability:'not-available'},
  ]

  return (
    <>
     
      <h1>Fruit Application</h1>
      <FruitList Fruits = {Fruits}/>

    </>
  )
}

export default App
