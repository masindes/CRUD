import React from 'react'
import ReactDom from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Footer, Navbar } from './components/Layout'
import { Home } from './components/Home'


const App = () => {
  return (
    <BrowserRouter>
    <Navbar />
    <Home />
    <>Footer </>
    </BrowserRouter>
  )
}

export default App