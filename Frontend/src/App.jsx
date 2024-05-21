import React from 'react'
import NavBar from './componets/NavBar/NavBar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Footer from './componets/Footer/Footer'

const App = () => {
  return (
    <>
    <div className='app'>
      
      <NavBar />
      <Routes>
         <Route path='/' element={<Home />} />
         <Route path='/cart' element={<Cart />} />
         
      </Routes>
     
    </div>
    <Footer />
    </>
  )
}

export default App