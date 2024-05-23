import React from 'react'
import NavBar from './componets/NavBar/NavBar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import Footer from './componets/Footer/Footer'
import LoginPopup from './componets/LoginPopup/LoginPopup'

const App = () => {

   const [showLogin,setShowLogin] = React.useState(false)
  return (
    <>
    {showLogin?<LoginPopup setShowLogin ={setShowLogin}/>:<></>}
    <div className='app'>
      <NavBar setShowLogin={setShowLogin}/>
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