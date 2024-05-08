import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom'
import { Home } from './components/Home/Home'
import { Nasa } from './pages/Nasa'
import { Shop } from './pages/Shop'
import { DetailProduct } from './components/apiShop/DetailProduct'
import './styles/products.css'

function App() {
  
  return (
    <div>
      <BrowserRouter>
        <nav className='nav'>
          <div>
            <Link to="/">Home</Link>
            <Link to="/nasa">nasa</Link>
            <Link to="/shop">shop</Link>
            
          </div>

        </nav>
          <div>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/nasa' element={<Nasa />} />
            <Route path='/shop' element={<Shop />} />
            <Route path='/shop/pruduct/:id' element={<DetailProduct />} />
          </Routes>
          </div>
      </BrowserRouter>
    </div>
  )
}

export default App
